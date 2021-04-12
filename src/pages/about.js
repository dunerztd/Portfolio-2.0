import React from "react"
import Header from "../components/header"
import Layout from '../components/layout'

export default function About() {

  document.title = 'Tom Dunstan | About'

  return (
    <Layout>
      <Header headerText="About" />
    </Layout>
  )
}