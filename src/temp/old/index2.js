import React from "react"
import Header from '../components/header'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default function Home() {

  return (
    <Layout>     
      <Header headerText='Hello, World!' />
      <Link to="/contact/">Contact</Link><br />
      <Link to="/about/">About</Link>
    </Layout>
  )
}
