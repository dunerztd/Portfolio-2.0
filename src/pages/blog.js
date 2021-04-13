import React from "react"
import Layout from '../components/layout'
import Header from "../components/header"

import lifeOfBrian from '../files/blog/lifeofbrian2.jpg'

import * as styles from './blog.module.css'

export default function Blog() {

  return (
    <Layout>
      <Header headerText="Blog" />
      <body>
        <div class={styles.container}>

          <section class={styles.mainView}>

            <div class={styles.linksContainer}>
              <h2>Recent Posts</h2>
                <ul class={styles.recentPosts}>
                  <li class={styles.recentEntry}>
                    <a href="#entry-1" class={styles.recentEntryName}>Conjugate the verb!</a>
                    <div class={styles.recentEntryDate}>31/03/2020</div>
                  </li>
                  <li class={styles.recentEntry}>
                    <a href="#entry-2" class={styles.recentEntryName}>Everyone loves latin!</a>
                    <div class={styles.recentEntryDate}>31/03/2020</div>
                  </li>
                  <li class={styles.recentEntry}>
                    <a href="#entry-3" class={styles.recentEntryName}>What have the Romans ever done for us?</a>
                    <div class={styles.recentEntryDate}>31/03/2020</div>
                  </li>
                  <li class={styles.recentEntry}>
                    <a href="#entry-4" class={styles.recentEntryName}>Learn a dead language??</a>
                    <div class={styles.recentEntryDate}>31/03/2020</div>
                  </li>
                  <li class={styles.recentEntry}>
                    <a href="#entry-5" class={styles.recentEntryName}>I'm moving to the Vatican City!</a>
                    <div class={styles.recentEntryDate}>31/03/2020</div>
                  </li>
                </ul>
            </div>

            
            <div class={styles.photoContainer}>

              <div class={styles.box} id="entry-1">
                <div class={styles.imgBox}>
                  <img src={lifeOfBrian} />
                </div>
                <div class={styles.details}>
                  <div class={styles.content}>
                    <h3>Conjugate the verb!</h3>
                    <h5>31/03/20</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti obcaecati, quas voluptatibus adipisci corporis sit id provident animi quod dolorem hic nostrum mollitia voluptates reiciendis? Accusantium consectetur ut veniam aspernatur?</p>
                  </div>
                </div>
              </div>

              <div class={styles.box} id="entry-2">
                <div class={styles.imgBox}>
                  <img src={lifeOfBrian} />
                </div>
                <div class={styles.details}>
                  <div class={styles.content}>
                    <h3>Everyone loves latin!</h3>
                    <h5>31/03/20</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti obcaecati, quas voluptatibus adipisci corporis sit id provident animi quod dolorem hic nostrum mollitia voluptates reiciendis? Accusantium consectetur ut veniam aspernatur?</p>
                  </div>
                </div>
              </div>

              <div class={styles.box} id="entry-3">
                <div class={styles.imgBox}>
                  <img src={lifeOfBrian} />
                </div>
                <div class={styles.details}>
                  <div class={styles.content}>
                    <h3>What have the Romans ever done for us?</h3>
                    <h5>31/03/20</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti obcaecati, quas voluptatibus adipisci corporis sit id provident animi quod dolorem hic nostrum mollitia voluptates reiciendis? Accusantium consectetur ut veniam aspernatur?</p>
                  </div>
                </div>
              </div>

              <div class={styles.box} id="entry-4">
                <div class={styles.imgBox}>
                  <img src={lifeOfBrian} />
                </div>
                <div class={styles.details}>
                  <div class={styles.content}>
                    <h3>Learn a dead language??</h3>
                    <h5>31/03/20</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti obcaecati, quas voluptatibus adipisci corporis sit id provident animi quod dolorem hic nostrum mollitia voluptates reiciendis? Accusantium consectetur ut veniam aspernatur?</p>
                  </div>
                </div>
              </div>

              <div class={styles.box} id="entry-5">
                <div class={styles.imgBox}>
                  <img src={lifeOfBrian} />
                </div>
                <div class={styles.details}>
                  <div class={styles.content}>
                    <h3>Moving to the Vatican City!</h3>
                    <h5>31/03/20</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti obcaecati, quas voluptatibus adipisci corporis sit id provident animi quod dolorem hic nostrum mollitia voluptates reiciendis? Accusantium consectetur ut veniam aspernatur?</p>
                  </div>
                </div>
              </div>
            
            </div>

          </section>
        </div>
      </body>
    </Layout>
  )
}