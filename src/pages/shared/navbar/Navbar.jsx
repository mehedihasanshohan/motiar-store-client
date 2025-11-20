import React from 'react'
import { Link } from 'react-router'
import logo from "/public/seller.png"

const Navbar = () => {
  return (
    <>
      <div className="navbar max-w-7xl mx-auto bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link>Services</Link></li>
        <li><Link>Coberage</Link></li>
        <li><Link>About US</Link></li>
        <li><Link>Pricing</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Contact</Link></li>
      </ul>
    </div>
    <img src={logo} className='w-8 h-8' alt="" />
    <a className="text-amber-500 ml-4 font-bold text-xl">Motiar Store</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="text-xl text-teal-600 flex justify-center items-center gap-6 font-semibold px-1">
      <li><Link>Services</Link></li>
      <li><Link>Coberage</Link></li>
      <li><Link>About US</Link></li>
      <li><Link>Pricing</Link></li>
      <li><Link>Blog</Link></li>
      <li><Link>Contact</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link className='btn btn-accent'>Sign in</Link>
    <Link className='btn btn-info ml-4'>Register</Link>
  </div>
</div>
    </>
  )
}

export default Navbar