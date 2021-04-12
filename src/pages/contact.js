import React from "react"
import Header from "../components/header"
import Layout from '../components/layout'

export default function Contact() {

  document.title = 'Tom Dunstan | Contact'

  return (
    <Layout>
      <Header headerText="Contact" />
    </Layout>
  )
}