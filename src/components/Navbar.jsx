import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">

        {/* LOGO */}
        <a href="#hero" className="logo">
          Pratyush Ranjan
        </a>

        {/* NAVIGATION LINKS */}
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* RESUME & CONTACT BUTTONS */}
        <div className="nav-actions">

          {/* MY RESUME */}
          <a
            href="https://drive.google.com/file/d/1oPOC-FeebWmsYlklPoU2qphwx72QzJNd/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn resume-btn group"
          >
            <div className="inner">
              <span>My Resume</span>
            </div>
          </a>

          {/* CONTACT ME */}
          <a
            href="#contact"
            className="contact-btn group"
          >
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>

        </div>

      </div>
    </header>
  )
}

export default Navbar
