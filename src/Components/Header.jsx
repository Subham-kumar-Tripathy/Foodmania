import React, { useState } from 'react'
import { LOGO_URL } from './urlhub'
import { Link } from 'react-router';
import { useSelector } from 'react-redux';


const Header = () => {
  const[logbtn,setbtn]=useState("Login");


  const cartitems=useSelector((store)=> store.cart.items)

  return (
    <div className='flex justify-between shadow-lg bg-pink-800 text-white items-center'>
      <div className=' flex'>
        <img className='w-20 h-20 pl-3' src={LOGO_URL} alt='logo'/>
        <h1 className="text-4xl font-extrabold text-white tracking-wide shadow-md mt-5">Food <span className="text-yellow-300">Mania</span>
      </h1>
      </div>

      <div className='flex items-center '>
        <ul className='flex p-4 m-4 items-center'>
            <li className='px-4 font-bold'><Link to="/">Home</Link></li>
            <li className='px-4 font-bold'><Link to="/About">About</Link></li>
            <li className='absolute right-9 top-4  font-semibold text-sm'>({cartitems.length})</li>
            <li className="font-sans">
              <Link to="/sign-in">
                <span className="ml-2 font-bold">Sign-In</span>
              </Link>
            </li>
            <li className='px-4 font-bold relative'><Link to="/Cart"><img className='w-8 h-6' src='grocery-store.png'/></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
