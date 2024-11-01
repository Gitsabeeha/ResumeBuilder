import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Objective = () => {
  const navigate = useNavigate();
  const [objective, setObjective] = useState('');

  // Retrieve the saved objective from local storage when the component mounts
  useEffect(() => {
    const savedObjective = localStorage.getItem('Objective');
    if (savedObjective) {
      setObjective(savedObjective);
    }
  }, []);

  const handleNavigateToExample = () => {
    navigate('/ObjectiveExample');
  };

  const handleOnChange = (e) => {
    setObjective(e.target.value);
  };
   const clearInput=()=>{
    setObjective(' ')
    localStorage.removeItem('Objective')
   }

   const handlePostObjective=async()=>{
    const userId=sessionStorage.getItem('userId')
    if (!userId) {
      window.alert('User ID not found. Please save personal details first.');
      return;
  }
  const postData = {
    objectiver: objective
}
  const postObjectiveData= await fetch('//localhost:5000/objective',{
    method:"POST",
    headers:{
      "content-type":"application/json",
      "authorization":`Bearer ${userId}`
    },
    body:JSON.stringify(postData)
  }
  
  )
  const res=await postObjectiveData.json()
  if (res) {
    window.alert('objective data saved')
  }
  if (res.success) {
    console.log('objective data also',res.user)
  }
  navigate('/ResumeForm')
  
   }
  return (
    <div className="mt-4 container">
      <form>
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
          OBJECTIVE
        </p>
        <div className="row offset-md-4">
          <div className="col-md-6">
            <textarea
              type="text"
              className="border-primary form-control"
              id="floatingTextarea2"
              style={{ height: "10rem" }}
              placeholder="Enter Objective"
              value={objective}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <button
              type="button"
              className="mt-4 btn btn-primary"
              onClick={handleNavigateToExample}
            >
              Select Objective
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="mx-2 bi bi-bookmarks-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5z" />
                <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1z" />
              </svg>
            </button>
             <button className="btn btn-primary mt-4 ms-4" onClick={clearInput}>clear </button>
            
          </div>
        </div>
      </form>
      <div className="row offset-md-4">
        <div className="col">
          <button className="btn btn-primary mt-4"onClick={handlePostObjective} >Save & Back</button>
        </div>
      </div>
      {/* <Link to='/ResumeForm' className="">Go Back</Link> */}
    </div>
  );
};

export default Objective;
