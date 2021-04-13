import React from "react"
import Layout from '../components/layout'
import Header from "../components/header"


export default function Contact() {

  document.title = 'Tom Dunstan | Contact'

  return (
    <Layout>
      <Header headerText="Contact" />
    </Layout>
  )
}