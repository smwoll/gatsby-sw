import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'

export default function Home() {
  return (
    <div className="front">
      <Layout>
        <h1>Hello Gatsby! I'm Sky.</h1>
        <p>What a beautiful world.</p>

        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <p>
          <Link to="/about">Learn a lil more.</Link>
        </p>
        <p>
          <a href="https://html5zombo.com/" target="_blank" rel="noreferrer">
            Go far away.
          </a>
        </p>
        <p>
          Need a guy? <Link to="/contact">Say howdy!</Link>
        </p>
      </Layout>
    </div>
  )
}
