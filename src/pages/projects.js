import React from "react"
import Layout from '../components/layout'
import Header from "../components/header"

import termRubyScrnsht from '../files/projects/app_scrnshot_1.png'
import mamScrnsht from '../files/projects/MAM_scrnsht_small.jpg'
import rorScrnsht from '../files/projects/Ror_scrnsht_small.jpg'
import sharefomoScrnsht from '../files/projects/sharefomo_scrnsht_small.jpg'

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
          <span className={styles.titleFirstLetter}>{props.thirdLetter}</span>
            {props.thirdWord}
        </h1>

        <p className={props.projectLinks}>
          <a href={props.github}>
            <span className={styles.github}>GitHub</span>
          </a>
          <span> | </span>
          <a href={props.deployed}>
            <span className={styles.github}> Deployed Site</span>
          </a>
        </p>

        <p className={styles.tech}>
          <span className={styles.techColour}>Tech: </span>
            {props.tech}
        </p>
      </div>

      <div className={styles.image}>
        <img src={props.image} alt="" />
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
            deployed=""
            tech="Ruby"
            description="This is the Terminal App I worked on at Coder Academy. It is called 'Keys to the Chords'. It allows the user to search for minor/major keys and chords. You can search by one or more chords to find which keys they inhabit."
            image={termRubyScrnsht}
          />
          <Box
            firstLetter="G"
            firstWord="uitar "
            secondLetter="L"
            secondWord="essons"
            github="https://github.com/dunerztd/marketplace_app"
            deployed="https://marketplaceapp-guitar.herokuapp.com/"
            tech="Ruby, Ruby on Rails, HTML, CSS, Bootstrap, PostgreSQL, Heroku, Amazon S3"
            description="<p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
            
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>"
            image={rorScrnsht}
          />
          <Box
            firstLetter="M"
            firstWord="elbourne "
            secondLetter="A"
            secondWord="rt "
            thirdLetter="M"
            thirdWord="ap"
            github="https://github.com/MAM-MERN"
            deployed="https://mam-mern.netlify.app/"
            tech="Javascript, MongoDB, Express JS, React, Node JS, Mongoose, HTML, CSS, Netlify, Heroku, Amazon S3"
            description="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
            image={mamScrnsht}
          />
          <Box
            firstLetter="S"
            firstWord="hare "
            secondLetter="F"
            secondWord="OMO"
            github="https://github.com/dunerztd/share-fomo"
            deployed="https://objective-meninsky-35165e.netlify.app/"
            tech="Javascript, HTML, CSS, Bootstrap, API"
            description="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
            image={sharefomoScrnsht}
          />
          </div>
      </body>
    </Layout>
  )
}
