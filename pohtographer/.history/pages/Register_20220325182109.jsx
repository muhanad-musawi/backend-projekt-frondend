
// import { useState } from 'react'  



function Register() {
  return (
    <div>Register</div>
  )
}

export default Register 


import React from 'react';  
import './recordsAdd.css'
import {useState, useEffect} from 'react'; 
import {useNavigate} from "react-router-dom";

function RecordsAdd() { 
  let navigate = useNavigate();
  const [ recordsAdd, setRecordsAdd]  = useState([]) ; //Dependancy Array 
  const initialInput = { 
   title: '',
    artist: '', 
    year: '',  
    price: '',
    cover: ''
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
const RECORDS_PATH = BACKEND_URL + '/records/new'


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
  .then((response)=>{
    if (response.status !== 201){
      alert("An Error occured")
      return;
    } else{
      
      navigate("/records", {replace:true})
      return response.json()
    }
  })
  .catch((err)=>console.log(err)) 
}

  function handleSubmit(event) { 
    event.preventDefault()
    const newRecord = { 
      ...inputs
    } 
    fetchRecordsAddData(newRecord )
  }


  return (  
 <div> 
   <h1>Melde Dich in Deinem Webseite an</h1>
  <div className='adminRegister' > 
 <form className='adminRegisterForm' action="" onSubmit={handleSubmit}>  

 <label for="fname">Benutzername <span>*</span></label>
 <input type="text" name="title" placeholder='Title' value={inputs.title} size="30" maxLength="50" onChange={handleInputChange}></input>   

 <label for="fname">Passwort<span>*</span></label>
 <input type="text" name="title" placeholder='Passwort' value={inputs.title} size="30" maxLength="50" onChange={handleInputChange}></input>  

 <input type="submit" value="Send" />
 </form>
  </div>  
  </div> 
  );
}

export default RecordsAdd;