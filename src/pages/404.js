import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const NotFound = () => {
  return (
    <Layout>
      <h1>Aw, man.</h1>
      <p>I'm terribly sorry, I swear this never happens.</p>
      <p><Link to="/">Let's go home.</Link></p>
    </Layout>
  )
}

export default NotFound
