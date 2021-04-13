import React from "react"
import Layout from '../components/layout'
import Header from "../components/header"

export default function Blog() {

  document.title = 'Tom Dunstan | Blog'

  return (
    <Layout>
      <Header headerText="Blog" />
      <h2>Terminal Application</h2>
    </Layout>
  )
}