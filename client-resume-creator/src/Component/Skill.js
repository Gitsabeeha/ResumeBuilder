import React, { useState } from "react";
import {Link,useNavigate}from 'react-router-dom'


const Skill = () => {
  const navigate =useNavigate()
  const [skills, setSkills] = useState([""]);
  const HandleOnClick = (e,index) => {
    console.log("evemttttttt",e)
      const newSkills = [...skills]; // Create a copy of the current skills array
      newSkills[index] = e.target.value; // Update the specific skill at the given index with new value from event
      setSkills(newSkills); // Update the state with the modified skills array
    
    
   
 
  };
  const handleAdd=()=>{
    setSkills([...skills,""])
  }
  const handleDeleteButtonClick = (index) => {
    const updatedskillData = [...skills];
    updatedskillData.splice(index, 1);
    setSkills(updatedskillData);
  };

const HandleSaveSkill=async()=>{
  const userId=sessionStorage.getItem('userId')
  if (!userId) {
    window.alert('User ID not found. Please save personal details first.');
    return;
}
const postSkillData= await fetch('//localhost:5000/skill',{
  method:"POST",
  headers:{
    "content-type":"application/json",
    "authorization":`Bearer ${userId}`
  },
  body:JSON.stringify(skills)
}

)
const res=await postSkillData.json()
if (res) {
  window.alert('Skill data saved')
}
if (res.success) {
  console.log('skill data also',res.user)
}
navigate('/ResumeForm')

}
  return (
    <div className=" mt-4 container">
      <p className="text-center text-light" style={{height:'50px' ,fontSize:'200%',backgroundColor:'rgb(121, 125, 124)',borderRadius:'30px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.6)'}}>SKILL</p>
      <form method="POST">
        {skills.map((skill,index)=>{
           return<> <div className='mt-4'style={{backgroundColor:'darkgreen' ,color:'white',height:'40px'}}>
           {index > 0 && (
                   <div className="col-md-6">
                     <button type="button" onClick={() => handleDeleteButtonClick(index)} className="btn text-light ">
                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                       <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                     </svg>       
                     </button>
                   </div>
                 )}
               
             <h5 className='text-center'style={{marginTop:'-30px'}} >Skill {index+1}</h5>
             </div>
          <div className="row mt-3 d-flex justify-content-center"key={index}>
             
          <div class=" col-md-6">
            <textarea
              type="text"
              class="  border-primary form-control"
              placeholder="Skill"
              id="floatingTextarea2"
              style={{ height: "7rem" }}
              value={skill}
              // onChange={HandleOnClick}
              onChange={(e) => HandleOnClick(e, index)}
            ></textarea>
          </div>
          
        </div>
        </> })}
      
      <div className="row offset-md-7 ">
          <div class="col-md-6 mt-2">
              <button type="button" class="btn btn-primary" onClick={handleAdd}>
                Add+
              </button>
            </div>
            </div>
      
      </form>
      <div className="row offset-md-4 ">
        <div className="col">
        <button className="btn btn-primary" onClick={HandleSaveSkill}>Save & Back</button>
        </div>
      </div>
      <Link  to='/ResumeForm'className="" >go back</Link>
    </div>
  );
};

export default Skill;
