import React from 'react'
import {Link} from 'react-router-dom'

const ExampleTemplate = () => {
  return (
    <div className='text-light mt-4'>
    <Link to='/Theme1' className='text-light bg-success fs-4 ms-4'> Theme 1</Link>
    <Link to='/Theme2' className='text-light bg-success fs-4 ms-4'> Theme 2</Link>
    <Link to='/Theme1' className='text-light bg-success fs-4 ms-4'> Theme 3</Link>
    <Link to='/Theme1' className='text-light bg-success fs-4 ms-4'> Theme 4</Link>
    <Link to='/Theme1' className='text-light bg-success fs-4 ms-4'> Theme 5</Link>
    <Link to='/Theme1' className='text-light bg-success fs-4 ms-4'> Theme 6</Link>
    <Link to='/Theme1' className='text-light bg-success fs-4 ms-4'> Theme 7</Link>
    <Link to='/Theme1' className='text-light bg-success fs-4 ms-4'> Theme 8</Link>
    <Link to='/Theme1' className='text-light bg-success fs-4 ms-4'> Theme 9</Link>
    <Link to='/Theme1' className='text-light bg-success fs-4 ms-4'> Theme 10</Link>
    </div>
  )
}

export default ExampleTemplate
