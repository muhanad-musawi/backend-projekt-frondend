
 import { useState } from 'react'  
 

 


function Register() {   
  // recordAdd
  //const [ registerAdd, setRegisterAdd]  = useState([]) ;
  //const [adminName , setAdminName] = useState('') 
 //const [adminPassword , setAdminPassword] = useState('')
 
  const initialInput = { 
    adminName: '',
    adminPassword: ''
   } 
   const [inputs, setInputs] = useState(initialInput) 

   
   
   function handleInputChange(event) {  
 
     const value =  event.target.value 
    const name =  event.target.name 
    setInputs({ 
       ...inputs,
     [name]: value})
     
   }  
 
   const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
 const RECORDS _PATH = BACKEND_URL + '/login/admin/register'
 
 
   const fetchRecordsAddData = (record)=>{ 
     console.log("records:"+record); 
     
     /*'http://localhost:4000/records'*/
 
     const recordjson = JSON.stringify(record)
     fetch(RECORDS_PATH  , {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: recordjson 
       
   }) 
   .then((response) => {
    if (response.status !== 201) {
      alert("An Error occured");
      return;
    } else {
       router.reload(window.location.pathname)  
       //navigate("/Photography", { replace: true });
      return response.json();
    }
  })
   .catch((err)=>console.log(err)) 
 }
 
   function handleSubmit(event) { 
     event.preventDefault()
     const newAdmin = { 
       ...inputs
     } 
     fetchRecordsAddData(newAdmin )
   }


   return (  
    <div> 
      <h1>Hier kannst du dich als Admin registrieren!</h1>
     <div className='adminRegister' > 
    <form className='adminRegisterForm' action="" onSubmit={handleSubmit}>  
   
    <label for="adminName">Benutzername <span>*</span></label>
    <input type="text" name="adminName"  id="adminName" placeholder='Benutzername' value={inputs.adminName} size="30" maxLength="50" onChange={handleInputChange}></input>   
   
    <label for="adminPassword">Passwort<span>*</span></label>
    <input type="password" name="adminPassword"  id="adminPassword" placeholder='Passwort' value={inputs.adminPassword} size="30" maxLength="10" onChange={handleInputChange}></input>  
   
    <input type="submit" value="Send" />
    </form>
     </div>  
     </div> 
     );
}

export default Register 









  
