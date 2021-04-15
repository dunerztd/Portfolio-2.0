import React from "react"
import { Link } from 'gatsby'

import "@fontsource/poppins"
import "./layout.css"


const Navbar = () => (
  <nav>
    <div className="nav-logo">
      <div className="nav-logo-text">
        <Link to="/">TJD</Link>
      </div>
    </div>
    <div className="links">
      <Link to="/projects/">Projects</Link>
      <Link to="/about/">About</Link>
      <Link to="/contact/">Contact</Link>
    </div>
  </nav>
)

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}