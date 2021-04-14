import React from "react"
import Layout from '../components/layout'
import Header from "../components/header"

import termRubyScrnsht from '../files/work/app_scrnshot_1.png'
import portfolioScrnsht from '../files/work/portfolio_scrnsht.png'

import * as styles from './work.module.css'

export default function Work() {

  return (
    <Layout>
      <Header headerText="Work" />
      <body>
        <div className="container">          

          <div className={styles.mainView}>
            <section className={styles.gridBox}>

              <div className={styles.box}>
                <div className={styles.image}>
                  <img src={termRubyScrnsht} alt="" />
                </div>
                <div className={styles.imageText}>
                  <h2>Terminal Application</h2>
                  <p>This is the Terminal App I worked on at Coder Academy. It is called 'Keys to the Chords'. It allows the user to search for minor/major keys and chords. You can search by one or more chords to find which keys they inhabit.</p>
                  <a href="https://github.com/dunerztd/Chords_and_Keys">GitHub</a>
                </div>
              </div>

              <div className={styles.box}>
                <div className={styles.image}>
                  <img src={portfolioScrnsht} alt="" />
                </div>
                <div className={styles.imageText}>
                  <h2>Portfolio Website</h2>
                  <p>The website you are currently on! This portfolio contains a home page with pages for contact, a blog, my portfolio of work and biography.</p>
                  <a href="https://github.com/dunerztd/portfolio-project">GitHub</a>
                </div>
              </div>

            </section>
          </div>
        </div>
      </body>
    </Layout>
  )
}
