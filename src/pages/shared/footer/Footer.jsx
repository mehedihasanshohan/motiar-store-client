import React from 'react'
import { Link } from 'react-router'
import github from '/public/assets/github.png'
import linkedin from '/public/assets/linkedin.png'
import gmail from '/public/assets/gmail.png'
import fb from '/public/assets/facebook.png'

const Footer = () => {
  return (
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <ul className="text-xl text-teal-600 flex justify-center items-center gap-6 font-semibold px-1">
          <li><Link>Services</Link></li>
          <li><Link>Coberage</Link></li>
          <li><Link>About US</Link></li>
          <li><Link>Pricing</Link></li>
          <li><Link>Blog</Link></li>
          <li><Link>Contact</Link></li>
        </ul>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <Link><img className='w-8 h-8' src={fb} alt="" /></Link>
      <Link><img className='w-8 h-8' src={gmail} alt="" /></Link>
      <Link><img className='w-8 h-8' src={github} alt="" /></Link>
      <Link><img className='w-8 h-8' src={linkedin} alt="" /></Link>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className='text-primary font-semibold'>Motiar Store</span></p>
  </aside>
</footer>
  )
}

export default Footer