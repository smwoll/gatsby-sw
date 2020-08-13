import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <Header headerText="About Gatsby" />
      <Header headerText="It's pretty cool" /> {/* highlight-line */}
      <p>Such wow. Very React. Very Power.</p>
      <p><Link to="/contact">Very Link.</Link></p>
    </Layout>
    
  )
}
