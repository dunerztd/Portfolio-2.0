import React from "react"
import "./header.css"
import "@fontsource/permanent-marker" 

export default function Header(props) {
  return <div className="nav-heading"><h1>{props.headerText}</h1></div>
}