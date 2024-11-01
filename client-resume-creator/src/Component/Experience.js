import React, { useState } from "react";
import { Link } from 'react-router-dom'
import {useNavigate}from 'react-router-dom'

const Experience = () => {
  const [ExperienceData, setExperienceData] = useState([{
    CompanyName: '',
    JobTitle: '',
    StartDate: '',
    EndDate: '',
    Description: ''
  }])
 const navigate =useNavigate()
 
  const HandleOnChange = (index,e) => {
    const updatedExperienceData = [...ExperienceData]
    updatedExperienceData[index] = {
      ...updatedExperienceData[index],
      [e.target.name]: e.target.value
    }
    setExperienceData(updatedExperienceData)
    // setExperienceData({...ExperienceData,[e.target.name]:e.target.value})
  }
  const HandleAdd = () => {
    console.log('vxdg')
    setExperienceData([...ExperienceData, {
      CompanyName: '',
      JobTitle: '',
      StartDate: '',
      EndDate: '',
      Description: ''
    }])
  }
  const handleDeleteButtonClick = (index) => {
    const updatedExperienceData = [...ExperienceData];
    updatedExperienceData.splice(index, 1);
    setExperienceData(updatedExperienceData);
  };
  const handleSaveExperience= async()=>{

    const userId=sessionStorage.getItem('userId')
    if (!userId) {
      window.alert('User ID not found. Please save personal details first.');
      return;
  }
    const postExperienceData= await fetch('//localhost:5000/experience',{
      method:"POST",
      headers:{
        "content-type":"application/json",
        "authorization":`Bearer ${userId}`
      },
      body:JSON.stringify(ExperienceData)
    }

    )

    const res=await postExperienceData.json()
    if (res) {
      window.alert('experience data saved')
    }
    if (res.success) {
      console.log('experience data also',res.user)
    }
    navigate('/ResumeForm')
    
  }

  return (
    <div className="mt-4 container">
      <p className="text-center text-light" style={{ height: '50px', fontSize: '200%', backgroundColor: 'rgb(121, 125, 124)', borderRadius: '30px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.6)' ,marginBottom:'50px'}}>EXPERIENCE</p>
      <form method="POST">
        
        {ExperienceData.map((experience, index) => {
           return <>
            <div className='mt-4'style={{backgroundColor:'darkgreen' ,color:'white',height:'40px'}}>
           {index > 0 && (
                   <div className="col-md-6">
                     <button type="button" onClick={() => handleDeleteButtonClick(index)} className="btn text-light ">
                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                       <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                     </svg>       
                     </button>
                   </div>
                 )}
               
             <h5 className='text-center'style={{marginTop:'-30px'}} >Experience {index+1}</h5>
             </div>
        <div class="row  mt-4 gap-3 offset-md-4" key={index}>

            <div class="col-md-6">
              <input
                type="text"
                name="CompanyName"
                value={ExperienceData.CompanyName}
                onChange={(e) => HandleOnChange(index, e)}
                class="form-control border border-primary"
                placeholder="Company Name"
                aria-label="Full name"
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                name="JobTitle"
                value={ExperienceData.JobTitle}
                onChange={(e) => HandleOnChange(index, e)}
                class="form-control border border-primary"
                placeholder="Job Title"
                aria-label="Full name"
              />
            </div>
            <div className="row  gap-3">
              <div class="col-5 col-md-3 ">
                <input
                  type="text"
                  name="StartDate"
                  value={ExperienceData.StartDate}
                  onChange={(e) => HandleOnChange(index, e)}
                  class="form-control border border-primary"
                  placeholder="Start Date"
                  aria-label="Full name"
                />
              </div>
              <div class="col-5 col-md-3">
                <input
                  type="text"
                  name="EndDate"
                  value={ExperienceData.EndDate}
                  onChange={(e) => HandleOnChange(index, e)}
                  class="form-control border border-primary"
                  placeholder="End Date"
                  aria-label="Full name"
                />
              </div>
            </div>
            <div class=" col-md-6 form-floating">
              <h5 className="fw-light text-light">Details</h5>
              <textarea
                class="  border-primary form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                name="comment"
                value={ExperienceData.Description}
                onChange={(e) => HandleOnChange(index, e)}
                style={{ height: "100px" }}
              ></textarea>
            </div>
            
          </div>
          </> })}
          
<div className="row offset-md-7 ">
          <div class="col-md-6 mt-2">
              <button type="button" class="btn btn-primary" onClick={HandleAdd}>
                Add+
              </button>
            </div>
            </div>
      </form>
     <div className="row offset-md-4 ">
        <div className="col">
        <button className="btn btn-primary"onClick={handleSaveExperience} >Save & Back</button>
        </div>
      </div>
    
    </div>
  );
};

export default Experience;
