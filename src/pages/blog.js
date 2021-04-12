import React from "react"
import Header from "../components/header"
import Layout from '../components/layout'

export default function Blog() {

  document.title = 'Tom Dunstan | Blog'

  return (
    <Layout>
      <Header headerText="Blog" />
      <h2>Terminal Application</h2>
    </Layout>
  )
}