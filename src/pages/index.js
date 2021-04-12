import React from "react"
import Layout from '../components/layout'
import './index.css'
import "@fontsource/permanent-marker"
import homeImage from '../images/background1.jpg'

export default function App() {


  return (
    <Layout>
      <section className="main-view">
        <div className="background-image">
          <img src={homeImage} />
        </div>
        <div className="text">
          <h1>Tom Dunstan | Web Developer</h1>
        </div>
      </section>
    </Layout>
  )
}