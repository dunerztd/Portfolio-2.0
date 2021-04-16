import React from "react"
import Layout from '../components/layout'
import Header from "../components/header"

import iconGH from '../files/contact/github.svg'
import iconLI from '../files/contact/linkedin.svg'

import * as styles from './contact.module.css'


export default function Contact() {

  return (
    <Layout>
      <Header headerText="Contact" />
      <body>
        <div class="container">

          <section class={styles.mainView1}>

              <div className={styles.formBoxTop}>

                <form className={styles.formBox} action="https://formspree.io/mpzlvwjr" method="POST">
                  <h2 class={styles.formHeading}>Send me a Message!</h2>

                  <div className={styles.name}>
                    <label for="name" className={styles.label1}>Name:</label>
                    <input type="text" id="name" name="name" placeholder="Your name" className={styles.input1}/>
                  </div>

                  <div className={styles.email}>
                    <label for="email" className={styles.label1}>Email:</label>
                    <input type="text" id="email" name="email" placeholder="Your email address" className={styles.input1}/>
                  </div>

                  <div className={styles.message}>
                    <label for="message" className={styles.label1}>Message:</label>
                    <textarea className={styles.textarea1} id="message" name="message" placeholder="Write something" />
                  </div>

                  <div className={styles.inputSubmit}>
                    <input type="submit" value="Submit" className={styles.submitButton}/>
                  </div>

                </form>
              </div>

              <section>
                <div class={styles.sMediaLink} >
                  <a href="https://github.com/dunerztd" class={styles.row1}>
                    <img src={iconGH} width="50" height="50" alt="" />
                  </a>
                  <a href="https://www.linkedin.com/in/tom-dunstan-4a76681b0/" class={styles.row1}>
                    <img src={iconLI} width="50" height="50" alt="" />
                  </a>
                </div>
              </section>
          </section>
        </div>
      </body>


    </Layout>
  )
}