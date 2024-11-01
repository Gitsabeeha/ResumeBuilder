import React, { useState } from "react";
import {Link,useNavigate}from 'react-router-dom'

const AdditionalInfo = () => {
  const navigate=useNavigate()
  const[info,setInfo]=useState('')
  const HandleOnChange=(e)=>{
    setInfo(e.target.value)
  }
  const handleSaveInfo=async()=>{
    const userId=sessionStorage.getItem('userId')
    if (!userId) {
      window.alert('User ID not found. Please save personal details first.');
      return;
  }
  const postData={
    myInfo:info
  }
  const PostInfo=await fetch('//localhost:5000/additionalinfo',{
    method:'POST',
    headers:{
      "content-type":'application/json',
      "authorization":`Bearer ${userId}`
  },
  body:JSON.stringify(postData)
  })
  const res = await PostInfo.json()
   if (res) {
    window.alert(' Additional Info saved')
  }
  if (res.success) {
    console.log('  Additional Info  data also',res.user)
  }
  navigate('/ResumeForm')

  }
  return (
    <div className="container mt-4">
       <p className="text-center text-light" style={{height:'50px' ,fontSize:'140%',backgroundColor:'rgb(121, 125, 124)',borderRadius:'30px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.6)'}}>ADDITIONAL INFORMATION</p>
      <div className="row offset-md-4">
        <div className="col-md-6">
          <textarea
            type="text"
            class="mt-4 form-control border border-primary"
            placeholder="Additional info"
            value={info}
            onChange={HandleOnChange}
            aria-label="Full name"
            style={{ height: "7rem" }}
          />
        </div>
        <div className="row offset-md-4 ">
        <div className="col">
        <button className="btn btn-primary mt-4"onClick={handleSaveInfo} >Save & Back</button>
        </div>
      </div>
      </div>
   
    </div>
  );
};

export default AdditionalInfo;
