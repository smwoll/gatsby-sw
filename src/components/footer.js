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
                <Link to="/how">How I Made This</Link>
              </li>
            </ul>

            <div className="social">
              <a
                href="mailto:skylandwoll@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="email"
                title="email me"
              >
                <svg viewBox="0 0 48 48" height="3em" width="3em">
                  <path d="M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 8L24 26 8 16v-4l16 10 16-10v4z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/skylandwoll/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
                title="LinkedIn"
              >
                <svg viewBox="0 0 1024 1024" height="3em" width="3em">
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/skylandwoll/"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter"
                title="Twitter"
              >
                <svg viewBox="0 0 1024 1024" height="3em" width="3em">
                  <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
                </svg>
              </a>
            </div>
            <p>Skyland Woll © 2020</p>
            <p>
              <svg viewBox="0 0 24 24" fill="white" height="1em" width="1em">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10.13 15.842l-.788 2.94-1.931-.518.787-2.939a10.988 10.988 0 01-3.237-1.872l-2.153 2.154-1.415-1.415 2.154-2.153a10.957 10.957 0 01-2.371-5.07l.9-.165A16.923 16.923 0 0012 10c3.704 0 7.131-1.185 9.924-3.196l.9.164a10.957 10.957 0 01-2.37 5.071l2.153 2.153-1.415 1.415-2.153-2.154a10.988 10.988 0 01-3.237 1.872l.787 2.94-1.931.517-.788-2.94a11.072 11.072 0 01-3.74 0z" />
              </svg>
              No tracking here!
            </p>
          </div>
        </div>
      </footer>
    )
}

export default Footer