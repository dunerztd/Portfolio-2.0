import React from "react"

import "@fontsource/permanent-marker" 
import "./header.css"

export default function Header(props) {
  return <div className="nav-heading"><h1>{props.headerText}</h1></div>
}