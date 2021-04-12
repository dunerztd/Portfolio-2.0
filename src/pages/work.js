import React from "react"
import Header from "../components/header"
import Layout from '../components/layout'

export default function Work() {

  document.title = 'Tom Dunstan | Work'

  return (
    <Layout>
      <Header headerText="Work" />
    </Layout>
  )
}