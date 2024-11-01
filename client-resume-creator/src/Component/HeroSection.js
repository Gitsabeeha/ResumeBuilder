import React from 'react'
import {Link} from 'react-router-dom'
const HeroSection = () => {
  return (
    <div className='HeroContainer'>
      <div   >
    <button type="button" class="btn position-absolute  bottom-0 start-50 translate-middle-x mb-4"><Link to='/ResumeForm' className='text-light nav-link fs-5'>Get Started</Link></button>
      </div>
    </div>
  )
}

export default HeroSection
