import React from "react"
import Layout from '../components/layout'
import Header from "../components/header"

import photoSelf from '../files/about/photo1.png'

import "@fontsource/poppins"
import './about.css'

export default function About() {

  return (
    <Layout>
      <Header headerText="About" />
      <body>
          <section className="main-view1">
            <div className='text1'>
                <h2>Tom Dunstan</h2>
                <p>Hi, I'm Tom. I'm a junior developer having recently graduated from Coder Academy. I live in Melbourne, Australia.</p>
                <p>I studied computing straight of high school and psychology a couple of years later.</p>
                <p>I've mainly worked in retail and warehousing.</p>
                <p>My interests include Music, Comedy, Psychology, History and Sport.</p>
                <p><b>Skills to pay the bills:</b> Javascript, Node JS, Express JS, React, Mongoose, Ruby, Ruby on Rails, HTML, CSS, MongoDB, PostgreSQL, Git/GitHub, Heroku, Amazon S3, Mocha, Chai, Supertest.</p>
                <p>Download my resume: <a href="https://agitated-brown-65fe84.netlify.app/static/ThomasDunstan-Resume-2021.pdf">Here</a></p>
            </div>
              <div className="img-box">
                <img src={photoSelf} alt="" />
              </div>
          </section>
      </body>
    </Layout>
  )
}