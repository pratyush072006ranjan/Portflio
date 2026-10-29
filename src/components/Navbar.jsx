import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const Navbar = () => {

    const [scrolled,setScrolled]=useState(false)
    
    useEffect(()=>{
        const handleScroll=()=>{
            const isScrolled=window.scrollY>10
            setScrolled(true)
        }
        window.addEventListener('scroll',handleScroll)
        return ()=> window.removeEventListener('scroll',handleScroll)
    },[])

  return (
    <header className={`navbar ${scrolled ? 'scrolled':'not-scrolled'}`}>
        <div className='inner'>
            <a href="#hero" className='logo'>Pratyush Ranjan</a>
            <nav className='desktop translate-x-15'>
                <ul>
                    {navLinks.map(({link,name})=>(
                        <li key={name} className='group'>
                            <a href={link}>
                                <span>{name}</span>
                                <span className='underline'></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <a href="https://drive.google.com/file/d/1oPOC-FeebWmsYlklPoU2qphwx72QzJNd/view?usp=drive_link" 
               className="contact-btn group relative left-55">
                <div className="inner bg-blue-500 text-white-50">
                    <span>My Resume</span>
                </div>
            </a>
            <a href="#contact" className='contact-btn group'>
                <div className='inner'>
                    <span>Contact me</span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default Navbar
