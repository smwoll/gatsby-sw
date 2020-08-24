import React from "react"

import { Link } from "gatsby"

import topperStyles from './topper.module.scss'

import Navigation from '../components/navigation'

import logo from "../assets/sw-logo-800.jpg"

const Topper = () => {
    return (
      <header className={topperStyles.tiptop}>
        <div className="container flex">
          <Link className={topperStyles.logoLink} to="/">
          <div className={topperStyles.logo}>
            <div className={topperStyles.logoText}>
              <span className={topperStyles.sw}>skyland.dev</span>
            </div>
            
          </div>
        </Link>
        <Navigation />
        </div>
        
      </header>
    )
}

export default Topper