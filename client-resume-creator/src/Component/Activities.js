import React, { useState } from "react";
import {Link}from 'react-router-dom'

const Activities = () => {
  const[detail,setDetail]=useState('')
  const HandleOnChange=(e)=>{
    setDetail(e.target.value)
  }
  return (
    <div className="container mt-4">
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
      ACTIVITIES
      </p>
      <div className="row offset-md-4">
        <div className="col-md-6">
          <input
            type="text"
            class="mt-4 form-control border border-primary"
            placeholder="Details"
            value={detail}
            onChange={HandleOnChange}
            aria-label="Full name"
            style={{ height: "4rem" }}
          />
        </div>
        <div>
          <button type="button" class="  mt-4 btn btn-primary">
            Add+
          </button>
        </div>
      </div>
      <Link  to='/ResumeForm'className="" >go back</Link>
    </div>
  );
};

export default Activities;
