import React from "react"
import Layout from '../components/layout'
import Header from "../components/header"

import iconFB from '../files/contact/facebook.svg'
import iconGH from '../files/contact/github.svg'
import iconIG from '../files/contact/instagram.svg'
import iconLI from '../files/contact/linkedin.svg'
import iconTW from '../files/contact/twitter.svg'

import * as styles from './contact.module.css'


export default function Contact() {

  return (
    <Layout>
      <Header headerText="Contact" />
      <body>
        <div class="container">

          <section class={styles.mainView1}>

              <section class={styles.formBox}>
                <form action="https://formspree.io/mpzlvwjr" method="POST">
                  <h2 class={styles.formHeading}>Send me a Message!</h2>
                  <label for="name">Name:</label>
                  <input type="text" id="name" name="name" placeholder="Your name" />

                  <label for="email" class="form-email-label">Email:</label>
                  <input type="text" id="email" name="email" placeholder="Your email address" />

                  <label for="message">Message:</label>
                  <textarea id="message" name="message" placeholder="Write something"></textarea>

                  <input type="submit" value="Submit" />
                </form>
              </section>

              <section>
                <div class={styles.sMediaLink} >
                  <a href="https://github.com/dunerztd" class={styles.row1}>
                    <img src={iconGH} width="50" height="50" alt="" />
                  </a>
                  <a href="https://www.linkedin.com/in/tom-dunstan-4a76681b0/" class={styles.row1}>
                    <img src={iconLI} width="50" height="50" alt="" />
                  </a>
                  <a href="#instagram" class={styles.row2}>
                    <img src={iconIG} width="50" height="50" alt="" />
                  </a>
                  <a href="#facebook" class={styles.row2}>
                    <img src={iconFB} width="50" height="50" alt="" />
                  </a>
                  <a href="#twitter" class={styles.row3}>
                    <img src={iconTW} width="50" height="50" alt="" />
                  </a>
                </div>
              </section>
          </section>
        </div>
      </body>


    </Layout>
  )
}