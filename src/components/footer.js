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
            >
              <svg
                viewBox="0 0 48 48"
                height="3em"
                width="3em"
                alt="Email Letter Icon"
              >
                <path d="M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 8L24 26 8 16v-4l16 10 16-10v4z" />
              </svg>
              <span className="sr-only">Email me</span>
            </a>
            <a
              href="https://www.linkedin.com/in/skylandwoll/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <svg
                viewBox="0 0 1024 1024"
                height="3em"
                width="3em"
                alt="LinkedIn Icon"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/therealskyland"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter"
            >
              <svg
                viewBox="0 0 1024 1024"
                height="3em"
                width="3em"
                alt="Twitter Icon"
              >
                <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://github.com/smwoll"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120.78 117.79"
                alt="GitHub Icon"
                width="2.5em"
                height="2.5em"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      class="cls-1"
                      d="M60.39,0A60.39,60.39,0,0,0,41.3,117.69c3,.56,4.12-1.31,4.12-2.91,0-1.44-.05-6.19-.08-11.24C28.54,107.19,25,96.42,25,96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67,6.07.43,9.26,6.22,9.26,6.22,5.39,9.23,14.13,6.57,17.57,5,.55-3.9,2.11-6.56,3.84-8.07C36,85.55,21.85,80.37,21.85,57.23A23.35,23.35,0,0,1,28.08,41c-.63-1.52-2.7-7.66.58-16,0,0,5.07-1.62,16.61,6.19a57.36,57.36,0,0,1,30.25,0C87,23.42,92.11,25,92.11,25c3.28,8.32,1.22,14.46.59,16a23.34,23.34,0,0,1,6.21,16.21c0,23.2-14.12,28.3-27.57,29.8,2.16,1.87,4.09,5.55,4.09,11.18,0,8.08-.06,14.59-.06,16.57,0,1.61,1.08,3.49,4.14,2.9A60.39,60.39,0,0,0,60.39,0Z"
                    />
                    <path
                      class="cls-2"
                      d="M22.87,86.7c-.13.3-.6.39-1,.19s-.69-.61-.55-.91.61-.39,1-.19.69.61.54.91Z"
                    />
                    <path
                      class="cls-2"
                      d="M25.32,89.43c-.29.27-.85.14-1.24-.28a.92.92,0,0,1-.17-1.25c.3-.27.84-.14,1.24.28s.47,1,.17,1.25Z"
                    />
                    <path
                      class="cls-2"
                      d="M27.7,92.91c-.37.26-1,0-1.35-.52s-.37-1.18,0-1.44,1,0,1.35.51.37,1.19,0,1.45Z"
                    />
                    <path
                      class="cls-2"
                      d="M31,96.27A1.13,1.13,0,0,1,29.41,96c-.53-.49-.68-1.18-.34-1.54s1-.27,1.56.23.68,1.18.33,1.54Z"
                    />
                    <path
                      class="cls-2"
                      d="M35.46,98.22c-.15.47-.82.69-1.51.49s-1.13-.76-1-1.24.82-.7,1.51-.49,1.13.76,1,1.24Z"
                    />
                    <path
                      class="cls-2"
                      d="M40.4,98.58c0,.5-.56.91-1.28.92s-1.3-.38-1.31-.88.56-.91,1.29-.92,1.3.39,1.3.88Z"
                    />
                    <path
                      class="cls-2"
                      d="M45,97.8c.09.49-.41,1-1.12,1.12s-1.35-.17-1.44-.66.42-1,1.12-1.12,1.35.17,1.44.66Z"
                    />
                  </g>
                </g>
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
          </div>
          <p>Skyland Woll © 2020</p>
          <p>
            <svg viewBox="0 0 24 24" fill="white" height="1em" width="1em">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10.13 15.842l-.788 2.94-1.931-.518.787-2.939a10.988 10.988 0 01-3.237-1.872l-2.153 2.154-1.415-1.415 2.154-2.153a10.957 10.957 0 01-2.371-5.07l.9-.165A16.923 16.923 0 0012 10c3.704 0 7.131-1.185 9.924-3.196l.9.164a10.957 10.957 0 01-2.37 5.071l2.153 2.153-1.415 1.415-2.153-2.154a10.988 10.988 0 01-3.237 1.872l.787 2.94-1.931.517-.788-2.94a11.072 11.072 0 01-3.74 0z" />
            </svg>
            &nbsp; No tracking here!
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
