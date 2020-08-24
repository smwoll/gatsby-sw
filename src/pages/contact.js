import React from 'react'
import { Link } from 'gatsby'
import SEO from "../components/SEO"
import Layout from '../components/layout'

const ContactPage = () => {
    return (
      <Layout>
        <SEO title="Contact · Skyland Woll" />
        <h1>Contact Page</h1>
        <p>Ask me something.</p>
        <p>You can ask me anything here.</p>
        <p>
          <Link to="/">Or go home.</Link>
        </p>
      </Layout>
    )
}

export default ContactPage