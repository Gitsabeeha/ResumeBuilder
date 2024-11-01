import React, { useState } from "react";
import {useNavigate}from 'react-router-dom'

import {Link}from 'react-router-dom'
const Education = () => {
  const navigate=useNavigate()
  const[EducationData,setEducationData]=useState([{
    course:'',
    University:'',
    Grade:'',
    year:''
    }])
  //  const HandleOnChange=(e)=>{
  //     setEducationData({...EducationData,[e.target.name]:e.target.value})
  //   }
  const HandleOnChange = (index, e) => {
    const updatedEducationData = [...EducationData];
    updatedEducationData[index] = {
      ...updatedEducationData[index],
      [e.target.name]: e.target.value
    };
    setEducationData(updatedEducationData);
  };

  const handleAddButtonClick = () => {
    setEducationData([...EducationData,{ course: '', University: '', Grade: '', year: '' }]);
   
  };
  const handleDeleteButtonClick = (index) => {
    const updatedEducationData = [...EducationData];
    updatedEducationData.splice(index, 1);
    setEducationData(updatedEducationData);
  };

  const saveData=async()=>{
    const userId = sessionStorage.getItem('userId');
    if (!userId) {
      window.alert('User ID not found. Please save personal details first.');
      return;
  }
    
  const fetchData=await fetch('//localhost:5000/education',{
    method:"POST",
    headers:{"content-type":"application/json",
           'Authorization': `Bearer ${userId}` },
    // body:JSON.stringify({Course,School,Grade, Year})
    body: JSON.stringify(EducationData), 
  })
  const res= await fetchData.json()
  console.log(res)
  if(res){
    window.alert('education data save successfully')
  }
  if (res.success) {
    console.log( 'updated',res.user)
    
  }

  navigate('/ResumeForm')

  }
  return (
    <div className="mt-4 container">
      <form method="POST">
      
      <h5 className="text-center text-light " style={{height:'40px' ,fontSize:'200%',backgroundColor:'rgb(121, 125, 124)',borderRadius:'30px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.6)',marginBottom:'50px'}}>EDUCATION</h5>

      {EducationData.map((education, index) => (<>
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
          
        <h5 className='text-center'style={{marginTop:'-30px'}} >Education {index+1}</h5>
        </div>
        <div key={index} className="row gap-3 offset-md-4 mt-4">
          <div className="col-md-6">
            <input
              type="text"
              name='course'
              onChange={(e) => HandleOnChange(index, e)}
              value={education.course}
              className="form-control border border-primary"
              placeholder="Course/Degree"
              aria-label="Course"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name='University'
              onChange={(e) => HandleOnChange(index, e)}
              value={education.University}
              className="form-control border border-primary"
              placeholder="School/University"
              aria-label="School"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name='Grade'
              onChange={(e) => HandleOnChange(index, e)}
              value={education.Grade}
              className="form-control border border-primary"
              placeholder="Grade/Score"
              aria-label="Grade"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name='year'
              onChange={(e) => HandleOnChange(index, e)}
              value={education.year}
              className="form-control border border-primary"
              placeholder="Year"
              aria-label="Year"
            />
          </div>
       
        </div>
        </>))}

<div className="row offset-md-7 mt-5">
        <div className="col">
          <button type="button" onClick={handleAddButtonClick} className="btn btn-primary">
            Add+
          </button>
        </div>
      </div>
      </form>
      <button className="btn btn-primary" onClick={saveData}>Save & Back</button>
     
    </div>
    
  );
};

export default Education;
