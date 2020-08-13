import React from "react"

import { Link } from "gatsby"

import topperStyles from './topper.module.scss'

import logo from "../assets/sw-logo-800.jpg"

const Topper = () => {
    return (
      <header className={topperStyles.tiptop}>
        <Link className={topperStyles.logoLink} to="/">
          <div className={topperStyles.logo}>
            <div className={topperStyles.logoText}>
              <span className={topperStyles.sw}>skyland.dev</span>
            </div>
            <img
              src={logo}
              alt="Logo background image showing lightning striking distant mountains"
              className="img-fluid"
            />
          </div>
        </Link>
        <nav>
          <ul className={topperStyles.navList}>
            <li>
              <Link
                className="nav-item"
                activeClassName={topperStyles.active}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                activeClassName={topperStyles.active}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                activeClassName={topperStyles.active}
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                activeClassName={topperStyles.active}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Topper