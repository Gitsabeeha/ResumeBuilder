import React, { useState } from "react";
import {Link,useNavigate}from 'react-router-dom'
const Achievement = () => {
  const navigate=useNavigate()
  const[title,setTitle]=useState('')

  const HandleOnChange=(e)=>{
    setTitle(e.target.value)
  }
  const handleSaveAchievement=async()=>{
    const user=sessionStorage.getItem('userId')
    if(!user){
      window.alert('User ID not found. Please save personal details first.')
       return;
    }
    const postData={
      myAchiev:title
    }
    const PostAchievement=await fetch('//localhost:5000/achievement',{
      method:'POST',
      headers:{
        "content-type":'application/json',
        "authorization":`Bearer ${user}`
    },
    body:JSON.stringify(postData)
    })

   const res = await PostAchievement.json()
   if (res) {
    window.alert(' Achievement data saved')
  }
  if (res.success) {
    console.log('achivement data also',res.user)
  }
  navigate('/ResumeForm')
  }
  return (
    <div className="container mt-4">
      <p
        className="text-center text-light"
        style={{
          height: "50px",
          fontSize: "130%",
          backgroundColor: "rgb(121, 125, 124)",
          borderRadius: "30px",
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.6)",
        }}
      >
        ACHIEVEMENT AND AWARDS
      </p>
      <div className="row offset-md-4">
        <div className="col-md-6">
          <input
            type="text"
            class="mt-4 form-control border border-primary"
            placeholder="Title"
            aria-label="Full name"
            value={title}
            onChange={HandleOnChange}
            style={{ height: "4rem" }}
          />
        </div>
        {/* <div>
          <button type="button" class="  mt-4 btn btn-primary">
            Add+
          </button>
        </div> */}
        <div className="row offset-md-4 ">
        <div className="col">
        <button className="btn btn-primary mt-4"onClick={handleSaveAchievement} >Save & Back</button>
        </div>
      </div>
      </div>
    
    </div>
  );
};

export default Achievement;
