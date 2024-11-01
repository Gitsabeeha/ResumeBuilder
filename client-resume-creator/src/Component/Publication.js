import React, { useState } from "react";
import {Link}from 'react-router-dom'
const Publication = () => {
  const[title,setTitle]=useState('')
  const[description,setDescription]=useState('')
  const HandleOnChange=(e)=>{
    setDescription(e.target.value)
    setTitle(e.target.value)
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
        PUBLICATION
      </p>
      <div className="row gap-3 offset-md-4">
        <div class=" col-md-6">
          <input
            type="text"
            class="  border-primary form-control"
            id="floatingTextarea2"
            placeholder="Title"
            value={title}
            onChange={HandleOnChange}
          ></input>
        </div>
        <div class=" mt-3 col-md-6">
          <input
            type="text"
            class="  border-primary form-control"
            placeholder="Description"
            value={description}
            onChange={HandleOnChange}
            id="floatingTextarea2"
            style={{ height: "7rem" }}
          ></input>
        </div>
        <div>
          <button type="button" class="  btn btn-primary">
            Add+
          </button>
        </div>
      </div>
      <Link  to='/ResumeForm'className="" >go back</Link>
    </div>
  );
};

export default Publication;
