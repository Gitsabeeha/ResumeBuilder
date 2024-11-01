import React, { useState } from "react";
import {Link, useNavigate}from 'react-router-dom'
const Project = () => {
  const navigate=useNavigate()
  const [projectData,setProjectData]=useState([{
    title:"",
    detail:""
  }])
  
  const HandleOnChangeeee=(e,index)=>{
   const updatedProjectData=[...projectData]
   updatedProjectData[index]={
    ...updatedProjectData[index],
    [e.target.name]:e.target.value
   }
   setProjectData(updatedProjectData)
   console.log(projectData.title,'fffffffffffff')
  }
  const HandleOnChange = (e, index) => {
    const updatedProjectData = [...projectData];
    updatedProjectData[index] = {
      ...updatedProjectData[index],
      [e.target.name]: e.target.value
    };
    setProjectData(updatedProjectData);
   
  };
  const HandleAdd=()=>{
setProjectData([...projectData,{title:'',detail:''}])
  }

  const handleDeleteButtonClick = (index) => {
    const updatedProjecteData = [...projectData];
    updatedProjecteData.splice(index, 1);
    setProjectData(updatedProjecteData);
  };
  
  const handlePostProject=async()=>{
        const userId=sessionStorage.getItem('userId')
        if (!userId) {
          window.alert('User ID not found. Please save personal details first.');
          return;
      }
      const postProjectData= await fetch('//localhost:5000/project',{
        method:"POST",
        headers:{
          "content-type":"application/json",
          "authorization":`Bearer ${userId}`
        },
        body:JSON.stringify(projectData)
      }
  
      )
  
      const res=await postProjectData.json()
      if (res) {
        window.alert(' Project data saved')
      }
      if (res.success) {
        console.log('project data also',res.user)
      }
      navigate('/ResumeForm')
  }
  return (
    <div className=" mt-4 container">
      <p
        className="text-center text-light"
        style={{
          height: "50px",
          fontSize: "200%",
          backgroundColor: "rgb(121, 125, 124)",
          borderRadius: "30px",
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.6)",
        }}
      >
        PROJECT
      </p>

      <form method='POST'>
        {projectData.map((aproject,index)=>{
return<>  <div className='mt-4'style={{backgroundColor:'darkgreen' ,color:'white',height:'40px'}}>
{index > 0 && (
        <div className="col-md-6">
          <button type="button" onClick={() => handleDeleteButtonClick(index)} className="btn text-light ">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>       
          </button>
        </div>
      )}
    
  <h5 className='text-center'style={{marginTop:'-30px'}} >Project {index+1}</h5>
  </div>
<div className="row gap-3 offset-md-4 mt-4">
<div class=" col-md-6">
  <input
    type="text"
    name="title"
    class="  border-primary form-control"
    id="floatingTextarea2"
    placeholder="Title"
    value={projectData.title}
    onChange={(e) => HandleOnChange( e,index)}
  ></input>
</div>
<div class=" mt-3 col-md-6">
  <textarea
    type="text"
    class="  border-primary form-control"
    name="detail"
    placeholder="Detail"
    value={projectData.detail}
    onChange={(e) => HandleOnChange( e,index)}
    id="floatingTextarea2"
    style={{ height: "7rem" }}
  ></textarea>
</div>



</div>
</>    })}

<div>
  <button type="button" class="  btn btn-primary" onClick={HandleAdd}>
    Add+
  </button>
</div>
     
      </form>
      <div className="row offset-md-4 ">
        <div className="col">
        <button className="btn btn-primary"  onClick={handlePostProject}>Save & Back</button>
        </div>
      </div>
     
    </div>
  );
};

export default Project;
