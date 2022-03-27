
 import { useState } from 'react'  


   function Register() {   
  
 
  const initialInput = { 
    adminName: '',
    adminPassword: '',
   } 
   const [inputs, setInputs] = useState(initialInput) 

   
   function handleInputChange(event) {  
     
    const name =  event.target.name; 
     const value =  event.target.value;
     
    setInputs({ 
       ...inputs,
     [name]: value})
     
     
   }  
   
   const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
 const REGISTER_PATH = BACKEND_URL + '/login/admin/register'
 
 
   const fetchRegisterAddData = (register)=>{ 
     console.log("records:"+ register); 
     
     /*'http://localhost:4000/records'*/
 
     const registerJson  = JSON.stringify(register)
     fetch(REGISTER_PATH  , {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: registerJson 
       
   }) 
   .then((response) => {
    if (response.status !== 200) { 
       console.log('Status ist' + response.status);
      alert("An Error occured");
      return;
      
       
    } else {
       
      router.reload(window.location.pathname)  
       navigate("/Photography", { replace: true });
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
     fetchRegisterAddData(newAdmin )
   }


   return (  
    <div> 
      <h1>Hier kannst du dich als Admin registrieren!</h1>
     <div className='adminRegister' > 
    <form className='adminRegisterForm' action="" onSubmit={handleSubmit}>   

    <input type="text" name="adminName" placeholder='Admin Name' value={inputs.adminName} size="30" maxLength="50" onChange={handleInputChange}></input>  

 <input type="text" name="adminPassword" placeholder='Admin Password' value={inputs.adminPassword} size="30" maxLength="50" onChange={handleInputChange}></input>  

   
   {/**<label for="adminName">Benutzername <span>*</span></label> 
    
    <input type="text" name="adminName"  id="adminName" placeholder='Benutzername' value={inputs.adminName} size="30" maxLength="50" onChange={handleInputChange}></input>   
      <label for="adminPassword">Passwort<span>*</span></label>  
   
    <input type="password" name="adminPassword"  id="adminPassword" placeholder='Passwort' value={inputs.adminPassword} size="30" maxLength="10" onChange={handleInputChange}></input>  
  */}
   
    <input type="submit" value="Send" />
    </form>
     </div>  
     </div> 
     );
} 

export default Register ;