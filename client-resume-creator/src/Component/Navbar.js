import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div >
      
      <nav class=" Nav-Custom navbar navbar-expand-lg  ">
  <div class="container-fluid">
    <a class="navbar-brand text-light fw-bold" href="/">Resume Builder</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link text-light " aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Rate Us</a>
        </li>

       
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
