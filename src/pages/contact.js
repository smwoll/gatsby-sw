import React from 'react'
import { Link } from 'gatsby'
import SEO from "../components/SEO"
import Layout from '../components/layout'

const ContactPage = () => {
    return (
      <Layout>
        <SEO title="Contact · Skyland Woll" />
        <h1>Contact Me</h1>
        <p>Please email me at <a href="mailto:skylandwoll@gmail.com">skylandwoll@gmail.com</a>.</p>
        
        <p>
          <Link to="/">Home.</Link>
        </p>
      </Layout>
    )
}

export default ContactPage