import React from 'react'
import { Link } from 'gatsby'
import SEO from "../components/SEO"
import Layout from '../components/layout'

const HowPage = () => {
    return (
      <Layout>
        <SEO title="How I Made This · Skyland Woll" />
        <h1 data-sal="slide-down" data-sal-delay="0" data-sal-easing="ease">
          How I made this website
        </h1>
        <blockquote
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          "If I have seen further, it is by standing upon the shoulders of
          giants."
          <footer>
            <a
              href="https://en.wikipedia.org/wiki/Standing_on_the_shoulders_of_giants"
              target="_blank"
              rel="noreferrer noopener"
            >
              —Isaac Newton
            </a>
          </footer>
        </blockquote>
        <p data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
          Here I will attempt to say thank you to all those developers who were
          generous enough with their time and upon whose shoulders I stand. I
          will list the resources, blogs, and videos that helped inspire me as I
          worked to create my portfolio website. This list is a work in
          progress, and I will continue to update it.
        </p>
        <ul data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease">
          <li>
            <a
              href="https://1linelayouts.glitch.me/"
              target="_blank"
              rel="noreferrer noopener"
            >
              This brilliant demo of 1-line layouts with flex and grid.
            </a>
          </li>
          <li>
            <a
              href="https://www.blobmaker.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              A beautiful baby blob maker.
            </a>
          </li>
          <li>
            <a
              href="https://tobiasahlin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Lots of inspiration and a few tips from the gorgeous portfolio of
              Tobias Ahlin.
            </a>
          </li>
          <li>
            <a
              href="https://www.bourbon.io/"
              target="_blank"
              rel="noreferrer noopener"
            >
              A dash of bourbon.
            </a>
          </li>
          <li>
            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              A whole lotta Gatsby.
            </a>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=8t0vNu2fCCM&t=11s"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  The Great Gatsby Bootcamp
                </a>
              </li>
              <li>
                <a
                  href="https://www.gatsbyjs.com/tutorial/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Gatsby Tutorial
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="https://www.react-spring.io/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Springs!
            </a>
          </li>
          <li>
            <a
              href="https://css-tricks.com/a-complete-guide-to-calc-in-css/"
              target="_blank"
              rel="noreferrer noopener"
            >
              CSS Tricks of course.
            </a>
          </li>
        </ul>
      </Layout>
    )
}

export default HowPage