import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact Page</h1>
            <p>Ask me something.</p>
            <p>You can ask me anything here.</p>
            <p><Link to="/">Or go home.</Link></p>
        </Layout>
        
    )
}

export default ContactPage