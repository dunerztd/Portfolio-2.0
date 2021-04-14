import React from "react"
import Layout from '../components/layout'
import Header from "../components/header"

import termRubyScrnsht from '../files/work/app_scrnshot_1.png'  

import * as styles from './projects.module.css'

export default function Work() {

  return (
    <Layout>
      <Header headerText="Projects" />
      <body>
       

          <div className={styles.mainView}>


              <div className={styles.box}>
                <div className={styles.boxHeading}>
                  <h1 className={styles.title}>
                    <span className={styles.titleFirstLetter}>T</span>erminal <span className={styles.titleFirstLetter}>A</span>pp</h1>

                    <p><a href="https://github.com/dunerztd/Chords_and_Keys">
                      <span className={styles.github}>GitHub</span>
                    </a> |   
                      <a href="https://github.com/dunerztd/Chords_and_Keys">
                    <span className={styles.github}> Deployed Site</span>
                    </a></p>
                    <p><span className={styles.tech}>Tech: </span>Ruby</p>
                </div>
                <div className={styles.image}>
                  <img src={termRubyScrnsht} alt="" />
                </div>
                <div className={styles.imageText}>
                  <p>This is the Terminal App I worked on at Coder Academy. It is called 'Keys to the Chords'. It allows the user to search for minor/major keys and chords. You can search by one or more chords to find which keys they inhabit.</p>
                </div>
              </div>




          </div>

      </body>
    </Layout>
  )
}
