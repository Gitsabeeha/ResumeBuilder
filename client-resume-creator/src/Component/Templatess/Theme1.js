import React, { useEffect, useState } from 'react';
import girl from '../../Component/Asset/girl.jpg';

const Theme1 = () => {
  const [userData, setUserData] = useState(null);
  const userId = sessionStorage.getItem('userId');


useEffect(() => {
  console.log('Fetching user details for userId:', userId);

  const fetchUser = async () => {
    try {
      const url = `http://localhost:5000/userDetail/${userId}`;
      const response = await fetch(url);
      const resJson = await response.json();
      setUserData(resJson.user);
    } catch (error) {
      console.log(error);
    }
  };

  fetchUser();
}, [userId]);

  // Safe destructuring with a fallback to prevent null errors
  const {
    personalDetail = {},
    Objective = {},
    Achievment = {},
    Language = {},
    AdditionalInfo = {},
    Education = [],
    Experience = [],
    Skill = [],
    Project = []
  } = userData || {};
  const jobTitle = Experience.length > 0 ? Experience[0].JobTitle : null;
  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className='them1'>
      <div className="container">
        <div className="d-flex">
          <div className="headersec-them1 d-flex flex-column">
            {/* <img 
              src={personalDetail.photo || girl} 
              style={{ width: '90px', height: '100px', borderRadius: '50px', marginLeft: '7rem' }} 
              alt="Profile"
            /> */}
            <h2 className='mt-3 text-uppercase' style={{ marginLeft: '45%' }}>{personalDetail.fullName}</h2>
            <p className="text-uppercase fw-bolder" style={{ marginLeft: '45%' }}>{jobTitle}</p>
          </div>
          <div className="sideSectionForThem1"> 
            <div className="main">
              <h5 className='text-center fst-italic'>ABOUT ME</h5>
              <p className='text-center fst-italic '>{Objective.objectiver || 'Description not provided.'}</p>
              <h5 className='text-center mt-4 fst-italic'>CONTACT</h5>
              <p className='text-center fw-bolder fst-italic'>MOBILE No: {personalDetail.phoneNo}</p>
              <p className='text-center fw-bolder fst-italic'>Email: {personalDetail.emailAddress}</p>
              <h5 className='text-center fw-bolder mt-4 fst-italic'>REFERENCE</h5>
              <p className='text-center fw-bolder fst-italic'>LinkedIn: {personalDetail.linkdin}</p>
              <p className='text-center fw-bolder fst-italic'>Website: {personalDetail.website}</p>
            </div>
          </div>
          <div className="">
            <div className="main2">
              <div className="d-flex">
              <h5>EMPLOYMENT</h5>
              {Experience.length ? (
                Experience.map(exp => (
                  <div className='ms-4' key={exp._id}>
                    <p>Company Name: {exp.CompanyName}</p>
                    <p> {exp.StartDate}-{exp.EndDate}</p>
                    <p>Description: {exp.Description || 'No description available.'}</p>
                  </div>
                ))
              ) : (
                <p>No employment information available.</p>
              )}
              </div>
              <div className="d-flex">
              <h5>EDUCATION</h5>
              {Education.length ? (
                Education.map(edu => (
                  <div className='ms-5' key={edu._id}>
                    <p>Course: {edu.course}</p>
                    <p>University: {edu.University}</p>
                    <p>Grade: {edu.Grade}</p>
                    <p>Year: {edu.year}</p>
                  </div>
                ))
              ) : (
                <p>No education information available.</p>
              )}
              </div>
              <div className="d-flex">
              <h5>SKILLS</h5>
              {Skill.length ? (
                Skill.map(skill => (
                  <p className='ms-5' key={skill._id}>{skill.userSkill}</p>
                ))
              ) : (
                <p>No skills listed.</p>
              )}
              </div>
              <div className="d-flex">
              <h5>PROJECTS</h5>
              {Project.length ? (
                Project.map(proj => (
                  <div  className='ms-5'key={proj._id}>
                    <p>Title: {proj.title}</p>
                    <p>Details: {proj.detail}</p>
                  </div>
                ))
              ) : (
                <p>No projects listed.</p>
              )}
              </div>
              <div className="d-flex">
              <h5>ADDITIONAL INFO</h5>
              <p className='ms-4'>{AdditionalInfo.additionalInfo || 'No additional information available.'}</p>
             </div>
              <div className="d-flex">
              <h5>ACHIEVEMENTS</h5>
              <p className='ms-4'>{Achievment.achievment || 'No achievements available.'}</p>
              <p>{Achievment.myAchiev || ''}</p>
              </div>
              <div className="d-flex">
              <h5>LANGUAGE</h5>
              <p className='ms-5'>{Language.language || 'No languages listed.'}</p>
             
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme1;
