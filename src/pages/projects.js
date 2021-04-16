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
          <span className={styles.titleFirstLetter}>{props.forthLetter}</span>
            {props.forthWord}
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

      <div className={styles.imageAndText}>
        <div className={styles.image}>
          <img src={props.image} alt="" />
        </div>
        
        <div className={styles.imageText}>
          <p>
            {props.descriptionP1}
          </p><br />
          <p>
            {props.descriptionP2}
          </p><br />
          <p>
            {props.descriptionP3}
          </p>
          <br /><p>
            {props.descriptionP4}
          </p>
        </div>
      </div>

    </div>
  }

  return (
    <Layout>
      <Header headerText="Projects" />
      <body>
          <div className={styles.mainView}>
          <Box
            firstLetter="K"
            firstWord="eys "
            secondWord="to "
            thirdWord="the "
            forthLetter="C"
            forthWord="hords"
            github="https://github.com/dunerztd/Chords_and_Keys"
            deployed=""
            tech="Ruby"
            descriptionP1="A terminal app written in plain Ruby."
            
            descriptionP2="This app was built to solve a personal problem. As a self taught guitarist for many years, I had very little understanding of music theory. This would go towards my understanding of scales, chords and especially the relationship between chords and keys."
            
            descriptionP3="From the main menu, the user can search for either a key or chord. But primary function is searching for a key based on one or multiple chords entered. All the keys containing searched chords will be returned to the user."
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
            descriptionP1="A two-sided marketplace connecting guitar teachers with students looking to learn the guitar in a specific style and to conduct the lesson over a webcam."
            
            descriptionP2="Finding a guitar teacher can be difficult when starting out or for when you have a particular style/skill in mind. With people in isolation due to COVID-19 in mind, many people are fulfilling a long held wish to learn a musical instrument and are reaching for a guitar."
            descriptionP3="As we are unable to be in close contact, the app will give students the ability to purchase lessons blocks and set up lessons over a webcam. This has the advantage of location not being a problem plus opening up the potential to find students/teachers anywhere in the globe."
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
            tech="Javascript, MongoDB, Express JS, React, Node JS, Mongoose, HTML, CSS, Netlify, Heroku, Amazon S3, API"
            descriptionP1="Melbourne's public art displayed on an interactive map."
            descriptionP2="Utilizing Google maps API, the entirety of Melbourne's public art is plotted on a map with clickable pins. When clicked, each pin displays the artist, title, date, description and image of the artwork. Each artwork can be found by text using the search function."
            descriptionP3="Through an admin login, artworks can be created, edited and deleted."
            descriptionP4="This project was completed as part of a two person group."
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
            descriptionP1="Using a Shares API, find out the current value and profit/loss on shares bought up to 20 years ago."
            descriptionP2="For those times when you ummed and ahhrred about buying shares and always wondered what they would be worth today. Not to be used when having a bad day..."
            descriptionP3="This project was completed as part of a two person group."
            image={sharefomoScrnsht}
          />
          </div>
      </body>
    </Layout>
  )
}
