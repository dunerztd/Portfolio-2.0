import React from "react"
import Layout from '../components/layout'
import Header from "../components/header"

import iconRuby from '../files/about/ruby.svg'
import iconHtml5 from '../files/about/html5.svg'
import iconCss3 from '../files/about/css3.svg'
import iconGit from '../files/about/git.svg'
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
                <p>Hi, I'm Tom and currently a junior developer studying at Coder Academy. I live in Melbourne, Australia.</p>
                <p>I studied computing straight of high school and psychology a couple of years later.</p>
                <p>I've mainly worked in retail and warehousing.</p>
                <p>My interests include Music, Comedy, Psychology, History and Sport.</p>
                <p>Skills to pay the bills: Ruby, HTML, CSS and Git.</p>
                <div className="icons">
                  <img src={iconRuby} alt="" />
                  <img src={iconHtml5} alt="" />
                  <img src={iconCss3} alt="" />
                  <img src={iconGit} alt="" />
                </div>
                <p>Download my resume: <a href="resume2018.pdf">Here</a></p>
            </div>
              <div className="img-box">
                <img src={photoSelf} alt="" />
              </div>
          </section>
      </body>
    </Layout>
  )
}