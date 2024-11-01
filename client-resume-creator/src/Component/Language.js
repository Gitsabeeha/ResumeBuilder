import React, { useState } from "react";
import {Link,useNavigate}from 'react-router-dom'
const Language = () => {
  const navigate=useNavigate()
  const[language,setLanguage]=useState('')
  const HandleOnChange=(e)=>{
    setLanguage(e.target.value)
  }
  const handleSaveLanguage=async()=>{
    const userId=sessionStorage.getItem('userId')
    if (!userId) {
      window.alert('User ID not found. Please save personal details first.');
      return;
  }
  const postData={
    mylan:language
  }
  const PostLanguage=await fetch('//localhost:5000/language',{
    method:'POST',
    headers:{
      "content-type":'application/json',
      "authorization":`Bearer ${userId}`
  },
  body:JSON.stringify(postData)
  })
  const res = await PostLanguage.json()
   if (res) {
    window.alert(' Language saved')
  }
  if (res.success) {
    console.log(' Language  data also',res.user)
  }
  navigate('/ResumeForm')

  }
  
  return (
    <div className="container mt-4">
       <p className="text-center text-light" style={{height:'50px' ,fontSize:'200%',backgroundColor:'rgb(121, 125, 124)',borderRadius:'30px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.6)'}}>LANGUAGE</p>
      <div className="row offset-md-4">
        <form method='POST'>
        <div className="col-md-6">
          <input
            type="text"
            class="mt-4 form-control border border-primary"
            placeholder="Languages"
            value={language}
            onChange={HandleOnChange}
            aria-label="Full name"
            style={{ height: "4rem" }}
          />
        </div>
        </form>
        <div className="row offset-md-4 ">
        <div className="col">
        <button className="btn btn-primary mt-4"onClick={handleSaveLanguage} >Save & Back</button>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Language;
