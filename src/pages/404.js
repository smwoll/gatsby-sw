import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/SEO"

const NotFound = () => {
  return (
    <Layout>
      <SEO title="404 · Page Not Found" />
      <h1 data-sal="zoom-in" data-sal-delay="100" data-sal-easing="ease">
        Aw, man.
      </h1>
      <p data-sal="zoom-out" data-sal-delay="300" data-sal-easing="ease">
        I'm terribly sorry, I swear this never happens.
      </p>
      <p data-sal="zoom-out" data-sal-delay="300" data-sal-easing="ease">
        <Link to="/">Let's go home.</Link>
      </p>
    </Layout>
  )
}

export default NotFound
