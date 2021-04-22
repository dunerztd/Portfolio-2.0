import React from "react"
import Layout from '../components/layout'

import homeImage from '../files/home/background1.jpg'
import homeImageSmall from '../files/home/background1_small.jpg'

import "@fontsource/permanent-marker"
import './index.css'



export default function App() {

  return (
    <Layout>
      <div className="main-view">
          <div className="background-image">
            <img src={homeImage}  alt="" class="homeImage" />
            <img src={homeImageSmall}  alt="" class="homeImageSmall" />
          </div>
          <div className="text">
            <h1>Tom Dunstan | </h1>
            <h1>Web Developer</h1>
          </div>
      </div>
    </Layout>
  )
}