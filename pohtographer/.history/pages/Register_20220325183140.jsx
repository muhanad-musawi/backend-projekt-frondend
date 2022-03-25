
 import { useState } from 'react'  
 import {useNavigate} from "react-router-dom";

 const [adminName , setAdminName] = useState('') 
 const [adminPassword , setAdminPassword] = useState('')


function Register() {
  return (
    <div>Register</div>
  )
}

export default Register 






function RecordsAdd() { 
  let navigate = useNavigate();
  const [ recordsAdd, setRecordsAdd]  = useState([]) ; //Dependancy Array 
  


  return (  
 <div> 
   <h1>Melde Dich in Deinem Webseite an</h1>
  <div className='adminRegister' > 
 <form className='adminRegisterForm' action="" onSubmit={handleSubmit}>  

 <label for="fname">Benutzername <span>*</span></label>
 <input type="text" name="title" placeholder='Title' value={inputs.title} size="30" maxLength="50" onChange={handleInputChange}></input>   

 <label for="fname">Passwort<span>*</span></label>
 <input type="password" name="Passwort" placeholder='Passwort' value={inputs.title} size="30" maxLength="50" onChange={handleInputChange}></input>  

 <input type="submit" value="Send" />
 </form>
  </div>  
  </div> 
  );
}

export default RecordsAdd;