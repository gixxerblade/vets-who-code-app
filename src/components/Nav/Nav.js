import { useState, useRef, useEffect } from 'react'
import Link from 'gatsby-link'
import FluidImage from '../FluidImage'
import Toggle from '../Toggle'
import './nav.css'

function Nav() {
  const navRef = useRef()
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [opacity, setOpacity] = useState(0.9)

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => document.removeEventListener('scroll', handleScroll)
  })

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  })

  function handleScroll() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    if (winScroll === 0) {
      setOpacity(0.9)
    }
    if (winScroll > 0) {
      setOpacity(1)
    }
  }

  function handleClickOutside(event) {
    if (!navRef?.current?.contains(event.target)) {
      setIsNavOpen(false)
    }
  }

  return (
    <nav
      ref={navRef}
      id="fixedTopNav"
      className="navbar navbar-fixed-top main-navigation navbar-solid"
      itemScope=""
      itemType="https://schema.org/SiteNavigationElement"
      role="navigation"
      style={{ opacity: opacity }}
    >
      <div className="container-fluid">
        <div className="navbar-header">
          <div
            className="navbar-brand"
            style={{ padding: '5px 15px 5px' }}
            itemScope=""
            itemType="https://schema.org/Organization"
          >
            <span className="sr-only">#VetsWhoCode</span>
            <Link to="/" id="navbar-brand">
              <FluidImage
                fileName="hashflag_white.jpg"
                alt="#VetsWhoCode Logo"
                className="logo_holder"
              />
              <div className="homeLink">VetsWhoCode</div>
            </Link>
          </div>
          <button
            type="button"
            id="hamburger-1"
            onClick={() => setIsNavOpen(!isNavOpen)}
            className={`lg:hidden hamburger ${isNavOpen ? 'is-active' : ''}`}
            aria-expanded={isNavOpen ? 'true' : 'false'}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="sr-only">#VetsWhoCode</span>
          </button>
        </div>
        <div
          className={`lg:flex flex-row justify-between w-full ${isNavOpen ? 'in' : ''}`}
          id="main-nav-collapse"
          aria-expanded={isNavOpen ? 'true' : 'false'}
        >
          <ul
            className="flex justify-between w-full m-1 font-bold uppercase px-6"
            role="menu"
            id="navbar-list"
            onClick={() => setIsNavOpen(false)}
          >
            <li role="menuitem" className="nav">
              <span>
                <Toggle size={30} />
              </span>
            </li>
            <li role="menuitem" className="nav">
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li role="menuitem" className="nav">
              <Link to="/about">
                <span>About</span>
              </Link>
            </li>
            <li role="menuitem" className="nav">
              <Link to="/board">
                <span>Board</span>
              </Link>
            </li>
            <li role="menuitem" className="nav">
              <Link to="/testimonials">
                <span>Testimonials</span>
              </Link>
            </li>
            <li role="menuitem" className="nav">
              <Link to="/syllabus">
                <span>Syllabus</span>
              </Link>
            </li>
            <li role="menuitem" className="nav">
              <Link to="/mentor">
                <span>Mentor</span>
              </Link>
            </li>
            <li role="menuitem" className="nav">
              <Link to="/apply">
                <span>Apply</span>
              </Link>
            </li>
            <li role="menuitem" className="nav">
              <Link to="/contact">
                <span>Contact</span>
              </Link>
            </li>
            <li role="menuitem" className="nav">
              <Link to="/blog">
                <span>Blog</span>
              </Link>
            </li>
            <li role="menuitem" className="donate">
              <Link to="/donate">
                <span>Donate</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
