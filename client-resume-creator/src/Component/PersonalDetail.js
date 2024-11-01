import React, { useState, useRef } from "react";
import Person from './Person.png'
import {useNavigate}from 'react-router-dom'

export default function PersonalDetail() {
  const navigate=useNavigate()
  const [PersonalData, setPersonalData] = useState({
    FullName: '',
    Address: '',
    PhoneNo: '',
    email: '',
    DOB: '',
    LinkedIn: '',
    Website: '',
    // Photo: ''
  });

  const HandleOnChange = (e) => {
    // setPersonalData({...PersonalData,[e.target.name]:e.target.value})
    if (e.target.name === 'Photo') {
      // Handle image file separately
      const file = e.target.files[0];
      setPersonalData({
        ...PersonalData,
        [e.target.name]: file, // store the file itself, not the input value
      });
    } else {
      // Handle other input fields
      setPersonalData({
        ...PersonalData,
        [e.target.name]: e.target.value,
      });
    }


  }
  // const fileInputRef = useRef(null);
  // const handleImageClick = () => {
  //   // Trigger the file input when the placeholder image is clicked
  //   fileInputRef.current.click();
  //   console.log('clik')
  // };

  // const handleDeleteImage = () => {
  //   setPersonalData({
  //     ...PersonalData,
  //     Photo: '' // Remove the image
  //   });
  //   if (fileInputRef.current) {
  //     fileInputRef.current.value = '';
  //   }
  // };
   

  const HandleSaveData=async()=>{
    const{ FullName,Address,PhoneNo,email,DOB,LinkedIn, Website,Photo}=PersonalData
   const res= await fetch('//localhost:5000/personal-detail',{
    method:"POST",
    headers:{"content-Type":"application/json"},
    body:JSON.stringify({ FullName,Address,PhoneNo,email,DOB,LinkedIn, Website,Photo })
  })
  const resjson= await res.json()
  console.log('i get this data',resjson)
  if(resjson.success){
    window.alert('Personal data saved succefully')
    console.log('userid',resjson.userId)
    sessionStorage.setItem('userId',resjson.userId)
  }
  navigate('/ResumeForm')
  }

  return (
    <div className="mt-4 container">
      <p className="text-center text-light" style={{ height: '50px', fontSize: '200%', backgroundColor: 'rgb(121, 125, 124)', borderRadius: '20px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.6)' }}>PERSONAL DETAIL</p>
      <div class="row gap-3 offset-md-4">
      <form method="POST">
        <div class="col-md-6 mb-2">
          <input
            type="text"
            name="FullName"
            class="form-control border border-primary"
            placeholder="Full Name"
            aria-label="Full name"
            value={PersonalData.FullName}
            onChange={HandleOnChange}
          />
        </div>
        <div class="col-md-6 mb-2">
          <input
            type="text"
            name='Address'
            class="form-control  border border-primary"
            placeholder="Address(Optional)"
            aria-label="Address"
            value={PersonalData.Address}
            onChange={HandleOnChange}
          />
        </div>
        <div class="col-md-6 mb-2">
          <input
            type="number"
            name='PhoneNo'
            class="form-control  border border-primary"
            placeholder="Phone no."
            aria-label="Address"
            value={PersonalData.PhoneNo}
            onChange={HandleOnChange}
          />
        </div>
        <div class="col-md-6 mb-2">
          <input
            type="email"
            name='email'
            class="form-control  border border-primary"
            placeholder="Email Address"
            aria-label="Address"
            value={PersonalData.email}
            onChange={HandleOnChange}
          />
        </div>
        <div class="col-md-6 mb-2">
          <input
            type="text"
            name='DOB'
            class="form-control  border border-primary"
            placeholder="Date of Birth(Optional)"
            aria-label="Address"
            value={PersonalData.DOB}
            onChange={HandleOnChange}
          />
        </div>
        <div class="col-md-6 mb-2">
          <input
            type="text"
            name="LinkedIn"
            class="form-control  border border-primary"
            placeholder="LinkedIn(Optional)"
            aria-label="Address"
            value={PersonalData.LinkedIn}
            onChange={HandleOnChange}
          />
        </div>
        <div class="col-md-6 mb-2">
          <input
            type="text"
            name='Website'
            class="form-control  border border-primary"
            placeholder="Website(Optional)"
            aria-label="Address"
            value={PersonalData.Website}
            onChange={HandleOnChange}
          />
        </div>
        {/* <div class="mb-4 d-flex col-md-6">

          <div style={{ marginTop: '10px', cursor: 'pointer' }}  >
            {PersonalData.Photo instanceof File ? (<>

              <img

                src={URL.createObjectURL(PersonalData.Photo)}
                alt="Profile"
                style={{ width: '30%', height: '60px' }}
                onClick={handleImageClick}
              />


              <svg xmlns="http://www.w3.org/2000/svg" onClick={handleDeleteImage} width="16" height="16" fill="currentColor" class="bi bi-x-lg text-light" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>

            </>) : (
              <img
                src={Person}
                alt="Placeholder"
                style={{ maxWidth: '30%', height: '60px' }}
                onClick={handleImageClick}
              />
            )}
            <label htmlFor="photoInput" className="  ms-4 text-dark uploadButton">
              Photo (Optional)
            </label>
          </div>
          <input
            type="file"
            class="form-control  border border-primary"
            name="Photo"
            aria-label="Address"
            id="photoInput"
            style={{ display: 'none' }}
            onChange={HandleOnChange}
            ref={fileInputRef}
          />
        </div> */}
       
        </form>
        <div className="col-md-3">
        <button className="btn btn-primary" onClick={HandleSaveData}>Save & Back</button>
        </div>
      </div>
    
    </div>
  );
}
