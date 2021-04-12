import React from "react"
import Layout from '../components/layout'

import homeImage from '../files/home/background1.jpg'

import "@fontsource/permanent-marker"
import './index.css'



export default function App() {

  return (
    <Layout>
      <div className="main-view">
          <div className="background-image">
            <img src={homeImage}  alt="" />
          </div>
          <div className="text">
            <h1>Tom Dunstan | Web Developer</h1>
          </div>
      </div>
    </Layout>
  )
}