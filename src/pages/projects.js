import React from "react"
import Layout from '../components/layout'
import Header from "../components/header"

import termRubyScrnsht from '../files/projects/app_scrnshot_1.png'  

import * as styles from './projects.module.css'

export default function Work() {

  const Box = (props) => {

    return <div className={styles.box}>
    
      <div className={styles.boxHeading}>
        <h1 className={styles.title}>
          <span className={styles.titleFirstLetter}>{props.firstLetter}</span>
            {props.firstWord}
          <span className={styles.titleFirstLetter}>{props.secondLetter}</span>
            {props.secondWord}
        </h1>

        <p>
          <a href={props.github}>
            <span className={styles.github}>GitHub</span>
          </a>
          <span> | </span>
          <a href={props.deployed}>
            <span className={styles.github}> Deployed Site</span>
          </a>
        </p>

        <p>
          <span className={styles.tech}>Tech: </span>
            {props.tech}
        </p>
      </div>

      <div className={styles.image}>
        <img src={termRubyScrnsht} alt="" />
      </div>
      <div className={styles.imageText}>
        <p>
          {props.description}
        </p>
      </div>

    </div>
  }

  return (
    <Layout>
      <Header headerText="Projects" />
      <body>
          <div className={styles.mainView}>
          <Box
            firstLetter="T"
            firstWord="erminal "
            secondLetter="A"
            secondWord="pp"
            github="https://github.com/dunerztd/Chords_and_Keys"
            deployed="https://github.com/dunerztd/Chords_and_Keys"
            tech="Ruby"
            description="This is the Terminal App I worked on at Coder Academy. It is called 'Keys to the Chords'. It allows the user to search for minor/major keys and chords. You can search by one or more chords to find which keys they inhabit."
          />
          </div>
      </body>
    </Layout>
  )
}
