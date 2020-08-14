import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'

import '../styles/front.scss'

import cloud from '../assets/cloud1.svg'

export default function Home() {
  return (
    <div className="front">
      <Layout>
        <div className="cover edge--bottom--reverse">
          <div className="stage">
            <div className="cover-title">
            <h1>Skyland Woll</h1>
            <p className="lead-text">Let's use the web for good.</p>
            <p><Link className="cta" to="/contact">Contact me</Link></p>
            <div className="clouds__1">
              <img src={cloud} alt="cloud" />

            </div>
          </div>
          </div>
          

        </div>
        <div className="container">
          
        <p>Echo echo echo.</p>

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
        </div>
        
      </Layout>
    </div>
  )
}
