import React from 'react'
import girl from '../../Component/Asset/girl.jpg'

const Theme2 = () => {
  return (
    <div>
      <div className="container d-flex">
        <div className="left-sideboxtem2 ">
        <img src={girl} style={{width:'100px',height:'100px', borderRadius:'50px',marginLeft:'7rem',marginTop:'1rem'}}alt="" />
<div className="contact">
    <h4 className='text-center text-light mt-3' >CONTACT</h4>
    <hr className='text-light'style={{marginLeft:'5rem',marginTop:'-0.5rem'}}></hr>
    <p className='text-center text-light'>Phone : <br/>99789789686</p>
    <p className='text-center text-light'>email : <br/>example@gmai.com</p>
    <p className='text-center text-light'>Address : <br/>kbmf,mb,xcmbl</p>
</div>
<div className="contact">
    <h4 className='text-center text-light mt-3' >EDUCATTON</h4>
    <hr className='text-light'style={{marginLeft:'5rem',marginTop:'-0.5rem'}}></hr>
    <p className='text-center text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ipsam!</p>
    
</div>
<div className="contact">
    <h4 className='text-center text-light mt-3' >SKILL</h4>
    <hr className='text-light'style={{marginLeft:'5rem',marginTop:'-0.5rem'}}></hr>
    <p className='text-center text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ipsam!</p>
    
</div>

         </div>
        <div className="right-sideboxtem2">
        <h2 className='mt-3 m-auto ms-2' style={{marginLeft:'6rem'}}>SANDRA BARNES</h2>
        <p className='ms-3 fs-5'>develpoer</p>
        <p className='ms-2'>objective: Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat molestias blanditiis aut rem enim quibusdam aspernatur ipsum expedita consequuntur pariatur.</p>
      <hr className='ms-2'></hr>
        </div>
      </div>
    </div>
  )
}

export default Theme2
