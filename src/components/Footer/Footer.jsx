import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='container bg-black p-5 max-w-screen gap-x-5 grid md:grid-cols-3 gap-y-4 grid-cols-1'>
      <div className='flex flex-col w-[300px]'>
        <h1 className='text-2xl font-primary mb-1 font-bold text-primary'>THE CHEAT SCHOOL</h1>
        <p className='text-white font-teritiary text-xl text-left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aspernatur amet asperiores, nihil libero labore assumenda alias minima similique earum deserunt ex accusantium tenetur at quam nisi impedit suscipit praesentium!
        </p>
      </div>
      <div>
        <h1 className='font-primary text-primary mb-1  text-2xl'>Quick Links</h1>
        <ul className='text-white font-primary'>
            <li className='hover:text-primary transition duration-300'><NavLink to='/'>Home</NavLink></li>
            <li className='hover:text-primary transition duration-300'><NavLink to='/gallery'>Gallery</NavLink></li>
            <li className='hover:text-primary transition duration-300'><NavLink to='/events'>Events</NavLink></li>
            <li className='hover:text-primary transition duration-300'><NavLink to='/blogs'>Blogs</NavLink></li>
            <li className='hover:text-primary transition duration-300'><NavLink to='/contact us'>Contact Us</NavLink></li>
        </ul>
      </div>
      <div>
        <h1 className='font-primary text-2xl  text-primary mb-1 '>Contact Us</h1>
        <p className='text-white font-teritiary text-[15px]'>+91 99895 20942</p>
        <p className='text-white font-teritiary text-[15px]'>thecheatschool@gmail.com</p>
      </div>
    </div>
  )
}

export default Footer
