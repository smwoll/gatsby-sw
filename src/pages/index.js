import React from "react"
import { Link } from "gatsby"

import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"

import Layout from '../components/layout'
import Topper from "../components/topper"
import Footer from "../components/footer"
import "../styles/index.scss"

import '../styles/front.scss'

import cloud from '../assets/cloud1.svg'

export default function Home() {
  return (
    <div className="front" id="top">
      <Parallax pages={3}>
        <Topper />
        <ParallaxLayer offset={0} speed={0}>
          <div className="cover edge--bottom--reverse">
            <div className="stage0"></div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="stage1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={.3}>
          <div className="clouds__2">
            <img src={cloud} alt="cloud" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.2}>
          <div className="text-stage">
            <div className="cover-title">
              <h1>Skyland Woll</h1>
              <p className="lead-text">Let's use the web for good.</p>
              <p>
                <Link className="cta" to="/contact">
                  Contact me
                </Link>
              </p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.7} speed={2}>
          <div className="clouds__1">
            <img src={cloud} alt="cloud" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8}>
          <div className="container">
            <p>Echo echo echo.</p>

            <img src="https://source.unsplash.com/random/400x200" alt="" />
            <p>
              <Link to="/about">Learn a lil more.</Link>
            </p>
            <p>
              <a
                href="https://html5zombo.com/"
                target="_blank"
                rel="noreferrer"
              >
                Go far away.
              </a>
            </p>
            <p>
              Need a guy? <Link to="/contact">Say howdy!</Link>
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />
        <ParallaxLayer offset={2} speed={0.8}>
          <div className="container">
            <p>Echo echo echo.</p>
            <p>
              <Link to="/about">Learn a lil more.</Link>
            </p>
            <p>
              <a
                href="https://html5zombo.com/"
                target="_blank"
                rel="noreferrer"
              >
                Go far away.
              </a>
            </p>
            <p>
              Need a guy? <Link to="/contact">Say howdy!</Link>
            </p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
