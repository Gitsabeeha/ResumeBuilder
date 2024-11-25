import React, { useEffect, useState } from 'react'
import girl from '../../Component/Asset/girl.jpg'

const Theme2 = () => {
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
    <div>
      <div className="theme2">
        <div className="upp">
          <div className="userName d-flex justify-content-between">
            <h3 className='text-light m-3  text-uppercase fw-bolde fst-italic'>{personalDetail.fullName}</h3>
            <div className="email-ph m-3">
              <p className=' text-light fw-bolder fst-italic'>Email: {personalDetail.emailAddress}</p>
              <p className=' text-light fw-bolder fst-italic'>MOBILE No: {personalDetail.phoneNo}</p>
            </div>
          </div>
        </div>
        <div className="oBJ d-flex m-4">
          <div className='bORDER'></div>
          <h5 className='text-center fst-italic ms-1' >OBJECTIVE</h5>
          <div className="detail ">
            <p className=' fst-italic '>{Objective.objectiver || 'Description not provided.'}</p>
          </div>
        </div>
        <div className="oBJ d-flex m-4">
          <div className='bORDER'></div>
          <h5 className='text-center fst-italic ms-1' >EXPERIENCE</h5>
          <div className="detail ">
          {Experience.length ? (
                Experience.map(exp => (
                  <div className='' key={exp._id}>
                    <p> {exp.CompanyName}</p>
                    <p> {exp.StartDate}-{exp.EndDate}</p>
                    <p> {exp.Description || 'No description available.'}</p>
                  </div>
                ))
              ) : (
                <p>No employment information available.</p>
              )}
          </div>
        </div>
        <div className="oBJ d-flex m-4">
          <div className='bORDER'></div>
          <h5 className='text-center fst-italic ms-1' >EDUCATION</h5>
          <div className="detail">
          {Education.length ? (
                Education.map(edu => (
                  <div className='' key={edu._id}>
                    <p className='text-uppercase text-secondary-emphasis'> {edu.University}</p>
                    <p> {edu.course}</p>
                    <p>Grades- {edu.Grade}</p>
                    <p>Year: {edu.year}</p>
                  </div>
                ))
              ) : (
                <p>No education information available.</p>
              )}
          </div>
        </div>
        <div className="oBJ d-flex m-4">
          <div className='bORDER'></div>
          <h5 className='text-center fst-italic ' >SKILLS</h5>
          <div className="detail d-flex">
          {Skill.length ? (
                Skill.map(skill => (
                  <p className='' key={skill._id}>{skill.userSkill}</p>
                ))
              ) : (
                <p>No skills listed.</p>
              )}
          </div>
        </div>
        <div className="oBJ d-flex m-4">
          <div className='bORDER'></div>
          <h5 className='text-center fst-italic ' >PROJECT</h5>
          <div className="detail d-flex">
          {Project.length ? (
                Project.map(proj => (
                  <div  className=''key={proj._id}>
                    <p>{proj.title}</p>
                    <p> {proj.detail}</p>
                  </div>
                ))
              ) : (
                <p>No projects listed.</p>
              )}
          </div>
        </div>
        <div className="oBJ d-flex m-4">
          <div className='bORDER'></div>
          <h5 className='text-center fst-italic' >ACHIEVEMENTS AND AWARDS</h5>
          <div className="detail d-flex">
          <p className=''>{Achievment.achievment || 'No achievements available.'}</p>
              <p>{Achievment.myAchiev || ''}</p>
          </div>
        </div>
        <div className="oBJ d-flex m-4">
          <div className='bORDER'></div>
          <h5 className='text-center fst-italic ' >LANGUAGE</h5>
          <div className="detail d-flex">
          <p className=''>{Language.language || 'No languages listed.'}</p>
          </div>
        </div>
        <div className="oBJ d-flex m-4">
          <div className='bORDER'></div>
          <h5 className='text-center fst-italic ' >ADDITIONAL INFO</h5>
          <div className="detail d-flex">
          <p className=''>{AdditionalInfo.additionalInfo || 'No additional information available.'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Theme2
