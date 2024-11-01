import React, { useEffect, useState } from 'react';
import girl from '../../Component/Asset/girl.jpg';

const Theme1 = () => {
  const [userData, setUserData] = useState(null);
  const userId = sessionStorage.getItem('userId');

  useEffect(() => {
    console.log('Fetching user details for userId:', userId);
    
    // fetch('http://localhost:5000/userDetail/6721e5a20dd3c0cff8d511a3')
    fetch(`http://localhost:5000/userDetail/${userId}`)
      .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
          return response.text().then(text => {
            throw new Error(`Network response was not ok: ${text}`);
          });
        }
        return response.json();
      })
      .then(data => {
        console.log('User data retrieved:', data);
        setUserData(data.user); // Accessing the user object in the response
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
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

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className='them1'>
      <div className="container">
        <div className="d-flex">
          <div className="headersec-them1 d-flex">
            <img 
              src={personalDetail.photo || girl} 
              style={{ width: '90px', height: '100px', borderRadius: '50px', marginLeft: '7rem' }} 
              alt="Profile"
            />
            <h2 className='mt-3' style={{ marginLeft: '6rem' }}>{personalDetail.fullName}</h2>
          </div>
          <div className="sideSectionForThem1"> 
            <div className="main">
              <h5 className='text-center'>ABOUT ME</h5>
              <p className='text-center'>{Objective.objectiver || 'Description not provided.'}</p>
              <h5 className='text-center mt-4'>CONTACT</h5>
              <p className='text-center'>MOBILE No: {personalDetail.phoneNo}</p>
              <p className='text-center'>Email: {personalDetail.emailAddress}</p>
              <h5 className='text-center mt-4'>REFERENCE</h5>
              <p className='text-center'>LinkedIn: {personalDetail.linkdin}</p>
              <p className='text-center'>Website: {personalDetail.website}</p>
            </div>
          </div>
          <div className="">
            <div className="main2">
              <h5>EMPLOYMENT</h5>
              {Experience.length ? (
                Experience.map(exp => (
                  <div key={exp._id}>
                    <p>Company: {exp.CompanyName}</p>
                    <p>Start Date: {exp.StartDate}</p>
                    <p>End Date: {exp.EndDate}</p>
                    <p>Description: {exp.Description || 'No description available.'}</p>
                  </div>
                ))
              ) : (
                <p>No employment information available.</p>
              )}
              <h5>ACHIEVEMENTS</h5>
              <p>{Achievment.achievment || 'No achievements available.'}</p>
              <p>{Achievment.myAchiev || ''}</p>
              <h5>LANGUAGE</h5>
              <p>{Language.language || 'No languages listed.'}</p>
              <h5>ADDITIONAL INFO</h5>
              <p>{AdditionalInfo.additionalInfo || 'No additional information available.'}</p>
              <h5>EDUCATION</h5>
              {Education.length ? (
                Education.map(edu => (
                  <div key={edu._id}>
                    <p>Course: {edu.course}</p>
                    <p>University: {edu.University}</p>
                    <p>Grade: {edu.Grade}</p>
                    <p>Year: {edu.year}</p>
                  </div>
                ))
              ) : (
                <p>No education information available.</p>
              )}
              <h5>SKILLS</h5>
              {Skill.length ? (
                Skill.map(skill => (
                  <p key={skill._id}>{skill.userSkill}</p>
                ))
              ) : (
                <p>No skills listed.</p>
              )}
              <h5>PROJECTS</h5>
              {Project.length ? (
                Project.map(proj => (
                  <div key={proj._id}>
                    <p>Title: {proj.title}</p>
                    <p>Details: {proj.detail}</p>
                  </div>
                ))
              ) : (
                <p>No projects listed.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme1;
