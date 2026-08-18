import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-8 bg-cyan-900'>
     <h2 className='text-xl font-bold'>Vighnesh Chiluka</h2>
     <div className='flex gap-10'>
        <Link to='./' className='text-lg font-medium'>Home</Link>
        <Link to='./about' className='text-lg font-medium'>About</Link>
        <Link to='./courses' className='text-lg font-medium'>Courses</Link>
        <Link to='./product' className='text-lg font-medium'>Product</Link>
        <Link to='./contact' className='text-lg font-medium'>Contact</Link>
     </div>
    </div>
  )
}

export default Navbar
