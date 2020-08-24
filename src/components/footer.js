import React from "react"
import { Link } from "gatsby"

const Footer = () => {
    return (
      <footer className="site-footer">
        <div className="footer-pad"></div>
        <div className="footer-content">
          <div className="container">
            <h4 className="footer-title">
              <Link to="/">skyland.dev</Link>
            </h4>
            <ul className="footer-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <p>Created by Sky, © 2020</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer