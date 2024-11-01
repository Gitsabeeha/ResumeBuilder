import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const ObjectiveExample = () => {
  const navigate=useNavigate()
  const [selectedObjective, setSelectedObjective] = useState('');
  
  const objectives = [
    "Seeking an entry-level position in [Industry] where I can utilize my [specific skills or education] to contribute to the success of the company.",
    "Eager to apply my skills and expertise in [specific technology or area] to a challenging IT role where I can contribute to system improvements and organizational success.",
   "With a strong background in IT infrastructure management and optimization, I am seeking a role as an IT specialist where I can leverage my skills to enhance system performance and efficiency.",
   "I am seeking a position in a well-established company where I can leverage my skills and experience in software engineering to help develop innovative solutions.",
   "I am looking for a challenging role in a forward-thinking company where I can apply my diverse skill set in programming, project management, and teamwork to drive business success.",

"Aspiring to work in a dynamic organization that provides opportunities for growth and career advancement, where I can utilize my technical skills and enthusiasm to contribute to the company's success.",

"A motivated and detail-oriented graduate looking to start a career in software development, where I can apply my skills in coding, debugging, and system analysis.",

"As a recent graduate with a degree in Computer Science, I am eager to start my career in the software industry, where I can learn and grow as a developer.",

"With over 5 years of experience in IT support and network administration, I am seeking a challenging role at ABC Tech where I can utilize my expertise to ensure smooth and secure IT operations.",

"As a seasoned professional with 8 years of experience in project management and software development, I am looking for a mid-level position where I can lead teams and drive project success.",

"With extensive experience in cybersecurity and a strong background in leadership, I am seeking a role as a cybersecurity manager where I can safeguard company data and lead a team of professionals.",

"With a successful career in marketing, I am seeking to transition into the tech industry as a data analyst, where I can apply my analytical skills and passion for data-driven solutions.",
  ];

  const handleSelectedObjective = (index) => {
    const objective = objectives[index];
    setSelectedObjective(objective);
    localStorage.setItem('Objective', objective);
    navigate('/Objective')
  };

  return (
    <div className='d-flex justify-content-center mt-3'>
      <div className="card d-flex" style={{ width: '60%' }}>
        <h3 className='text-center'>Select Objective</h3>
        <ul className="list-group list-group-flush">
          {objectives.map((objective, index) => (
            <li key={index} className="list-group-item">
              {objective}
              <button 
                type="button" 
                className="btn btn-primary btn-sm float-end mt-4" 
                onClick={() => handleSelectedObjective(index)}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* {selectedObjective && (
        <div className="alert alert-success mt-3">
          Selected Objective: {selectedObjective}
        </div>
      )} */}
    </div>
  );
};

export default ObjectiveExample;
