import React, { useEffect, useState, useRef } from "react"
import { Helmet } from "react-helmet"

// img sharp
import { graphql } from "gatsby"
import Img from "gatsby-image"

// react-spring
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import { Spring, config } from "react-spring/renderprops"

// components
import SEO from "../components/SEO"
import Topper from "../components/topper"
import Footer from "../components/footer"
import "../styles/index.scss"

import "../styles/front.scss"

// images
import cloud from "../assets/cloud1.svg"
import cloudbreak from "../assets/pagebreak-curve.svg"

const IndexPage = props => (
  <div className="front" id="top">
    <SEO title="Home" />
    <Topper />
    <Helmet>
      <html class="front-html" />
    </Helmet>

    <Parallax pages={8}>
      <ParallaxLayer offset={0} speed={0}>
        <div className="cover">
          <div className="stage0"></div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <div className="stage1"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.8} speed={2.4}>
        <div className="sunrise"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.15} speed={0.3}>
        <div className="clouds__2">
          <img src={cloud} alt="cloud" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.4}>
        <div className="text-stage">
          <div className="cover-title">
            <span className="sr-only">Hi, I'm Skyland Woll.</span>
            <div className="svg-box">
              <Spring
                config={{ delay: 500, tension: 60, friction: 68 }}
                from={{ x: 900, y: 900, w: 4, z: "transparent" }}
                to={{ x: 0, y: 900, w: 1, z: "white" }}
              >
                {props => (
                  <svg
                    strokeDashoffset={props.x}
                    strokeDasharray={props.y}
                    fill={props.z}
                    width="60vw"
                    viewBox="0 0 825 147"
                    xmlns="http://www.w3.org/2000/svg"
                    alt="Skyland Woll"
                  >
                    <mask
                      id="path-1-outside-1"
                      maskUnits="userSpaceOnUse"
                      x="0.95694"
                      y="0.109375"
                      width="824"
                      height="147"
                      fill="none"
                    >
                      <rect
                        fill="white"
                        x="0.95694"
                        y="0.109375"
                        width="824"
                        height="147"
                      />
                      <path d="M19.1094 77.6719C19.4375 83.5312 20.8203 88.2891 23.2578 91.9453C27.8984 98.7891 36.0781 102.211 47.7969 102.211C53.0469 102.211 57.8281 101.461 62.1406 99.9609C70.4844 97.0547 74.6563 91.8516 74.6563 84.3516C74.6563 78.7266 72.8984 74.7188 69.3828 72.3281C65.8203 69.9844 60.2422 67.9453 52.6484 66.2109L38.6563 63.0469C29.5156 60.9844 23.0469 58.7109 19.25 56.2266C12.6875 51.9141 9.40626 45.4688 9.40626 36.8906C9.40626 27.6094 12.6172 19.9922 19.0391 14.0391C25.4609 8.08594 34.5547 5.10938 46.3203 5.10938C57.1484 5.10938 66.3359 7.73438 73.8828 12.9844C81.4766 18.1875 85.2734 26.5312 85.2734 38.0156H72.125C71.4219 32.4844 69.9219 28.2422 67.625 25.2891C63.3594 19.8984 56.1172 17.2031 45.8984 17.2031C37.6484 17.2031 31.7188 18.9375 28.1094 22.4062C24.5 25.875 22.6953 29.9062 22.6953 34.5C22.6953 39.5625 24.8047 43.2656 29.0234 45.6094C31.7891 47.1094 38.0469 48.9844 47.7969 51.2344L62.2813 54.5391C69.2656 56.1328 74.6563 58.3125 78.4531 61.0781C85.0156 65.9062 88.2969 72.9141 88.2969 82.1016C88.2969 93.5391 84.125 101.719 75.7813 106.641C67.4844 111.562 57.8281 114.023 46.8125 114.023C33.9688 114.023 23.9141 110.742 16.6484 104.18C9.38282 97.6641 5.82032 88.8281 5.96094 77.6719H19.1094Z" />
                      <path d="M104.047 7.71094H116.211V67.6875L148.695 35.6953H164.867L136.039 63.8906L166.484 111H150.312L126.828 73.0312L116.211 82.7344V111H104.047V7.71094Z" />
                      <path d="M223.367 35.6953H237.359C235.578 40.5234 231.617 51.5391 225.477 68.7422C220.883 81.6797 217.039 92.2266 213.945 100.383C206.633 119.602 201.477 131.32 198.477 135.539C195.477 139.758 190.32 141.867 183.008 141.867C181.227 141.867 179.844 141.797 178.859 141.656C177.922 141.516 176.75 141.258 175.344 140.883V129.352C177.547 129.961 179.141 130.336 180.125 130.477C181.109 130.617 181.977 130.688 182.727 130.688C185.07 130.688 186.781 130.289 187.859 129.492C188.984 128.742 189.922 127.805 190.672 126.68C190.906 126.305 191.75 124.383 193.203 120.914C194.656 117.445 195.711 114.867 196.367 113.18L168.523 35.6953H182.867L203.047 97.0078L223.367 35.6953Z" />
                      <path d="M248.68 7.71094H261.336V111H248.68V7.71094Z" />
                      <path d="M290.094 90.9609C290.094 94.6172 291.43 97.5 294.102 99.6094C296.773 101.719 299.938 102.773 303.594 102.773C308.047 102.773 312.359 101.742 316.531 99.6797C323.562 96.2578 327.078 90.6562 327.078 82.875V72.6797C325.531 73.6641 323.539 74.4844 321.102 75.1406C318.664 75.7969 316.273 76.2656 313.93 76.5469L306.266 77.5312C301.672 78.1406 298.227 79.1016 295.93 80.4141C292.039 82.6172 290.094 86.1328 290.094 90.9609ZM320.75 65.3672C323.656 64.9922 325.602 63.7734 326.586 61.7109C327.148 60.5859 327.43 58.9688 327.43 56.8594C327.43 52.5469 325.883 49.4297 322.789 47.5078C319.742 45.5391 315.359 44.5547 309.641 44.5547C303.031 44.5547 298.344 46.3359 295.578 49.8984C294.031 51.8672 293.023 54.7969 292.555 58.6875H280.742C280.977 49.4062 283.977 42.9609 289.742 39.3516C295.555 35.6953 302.281 33.8672 309.922 33.8672C318.781 33.8672 325.977 35.5547 331.508 38.9297C336.992 42.3047 339.734 47.5547 339.734 54.6797V98.0625C339.734 99.375 339.992 100.43 340.508 101.227C341.07 102.023 342.219 102.422 343.953 102.422C344.516 102.422 345.148 102.398 345.852 102.352C346.555 102.258 347.305 102.141 348.102 102V111.352C346.133 111.914 344.633 112.266 343.602 112.406C342.57 112.547 341.164 112.617 339.383 112.617C335.023 112.617 331.859 111.07 329.891 107.977C328.859 106.336 328.133 104.016 327.711 101.016C325.133 104.391 321.43 107.32 316.602 109.805C311.773 112.289 306.453 113.531 300.641 113.531C293.656 113.531 287.938 111.422 283.484 107.203C279.078 102.938 276.875 97.6172 276.875 91.2422C276.875 84.2578 279.055 78.8438 283.414 75C287.773 71.1562 293.492 68.7891 300.57 67.8984L320.75 65.3672Z" />
                      <path d="M360.547 35.6953H372.57V46.3828C376.133 41.9766 379.906 38.8125 383.891 36.8906C387.875 34.9688 392.305 34.0078 397.18 34.0078C407.867 34.0078 415.086 37.7344 418.836 45.1875C420.898 49.2656 421.93 55.1016 421.93 62.6953V111H409.062V63.5391C409.062 58.9453 408.383 55.2422 407.023 52.4297C404.773 47.7422 400.695 45.3984 394.789 45.3984C391.789 45.3984 389.328 45.7031 387.406 46.3125C383.938 47.3438 380.891 49.4062 378.266 52.5C376.156 54.9844 374.773 57.5625 374.117 60.2344C373.508 62.8594 373.203 66.6328 373.203 71.5547V111H360.547V35.6953Z" />
                      <path d="M448.719 74.2266C448.719 82.2891 450.43 89.0391 453.852 94.4766C457.273 99.9141 462.758 102.633 470.305 102.633C476.164 102.633 480.969 100.125 484.719 95.1094C488.516 90.0469 490.414 82.8047 490.414 73.3828C490.414 63.8672 488.469 56.8359 484.578 52.2891C480.688 47.6953 475.883 45.3984 470.164 45.3984C463.789 45.3984 458.609 47.8359 454.625 52.7109C450.688 57.5859 448.719 64.7578 448.719 74.2266ZM467.773 34.3594C473.539 34.3594 478.367 35.5781 482.258 38.0156C484.508 39.4219 487.062 41.8828 489.922 45.3984V7.35938H502.086V111H490.695V100.523C487.742 105.164 484.25 108.516 480.219 110.578C476.188 112.641 471.57 113.672 466.367 113.672C457.977 113.672 450.711 110.156 444.57 103.125C438.43 96.0469 435.359 86.6484 435.359 74.9297C435.359 63.9609 438.148 54.4688 443.727 46.4531C449.352 38.3906 457.367 34.3594 467.773 34.3594Z" />
                      <path d="M569.445 7.71094L588.922 91.7344L612.266 7.71094H627.453L650.797 91.7344L670.273 7.71094H685.602L658.461 111H643.766L619.93 25.3594L595.953 111H581.258L554.258 7.71094H569.445Z" />
                      <path d="M724.273 102.844C732.664 102.844 738.406 99.6797 741.5 93.3516C744.641 86.9766 746.211 79.8984 746.211 72.1172C746.211 65.0859 745.086 59.3672 742.836 54.9609C739.273 48.0234 733.133 44.5547 724.414 44.5547C716.68 44.5547 711.055 47.5078 707.539 53.4141C704.023 59.3203 702.266 66.4453 702.266 74.7891C702.266 82.8047 704.023 89.4844 707.539 94.8281C711.055 100.172 716.633 102.844 724.273 102.844ZM724.766 33.5156C734.469 33.5156 742.672 36.75 749.375 43.2188C756.078 49.6875 759.43 59.2031 759.43 71.7656C759.43 83.9062 756.477 93.9375 750.57 101.859C744.664 109.781 735.5 113.742 723.078 113.742C712.719 113.742 704.492 110.25 698.398 103.266C692.305 96.2344 689.258 86.8125 689.258 75C689.258 62.3438 692.469 52.2656 698.891 44.7656C705.313 37.2656 713.938 33.5156 724.766 33.5156Z" />
                      <path d="M774.898 7.71094H787.555V111H774.898V7.71094Z" />
                      <path d="M806.961 7.71094H819.617V111H806.961V7.71094Z" />
                    </mask>
                    <path
                      d="M19.1094 77.6719C19.4375 83.5312 20.8203 88.2891 23.2578 91.9453C27.8984 98.7891 36.0781 102.211 47.7969 102.211C53.0469 102.211 57.8281 101.461 62.1406 99.9609C70.4844 97.0547 74.6563 91.8516 74.6563 84.3516C74.6563 78.7266 72.8984 74.7188 69.3828 72.3281C65.8203 69.9844 60.2422 67.9453 52.6484 66.2109L38.6563 63.0469C29.5156 60.9844 23.0469 58.7109 19.25 56.2266C12.6875 51.9141 9.40626 45.4688 9.40626 36.8906C9.40626 27.6094 12.6172 19.9922 19.0391 14.0391C25.4609 8.08594 34.5547 5.10938 46.3203 5.10938C57.1484 5.10938 66.3359 7.73438 73.8828 12.9844C81.4766 18.1875 85.2734 26.5312 85.2734 38.0156H72.125C71.4219 32.4844 69.9219 28.2422 67.625 25.2891C63.3594 19.8984 56.1172 17.2031 45.8984 17.2031C37.6484 17.2031 31.7188 18.9375 28.1094 22.4062C24.5 25.875 22.6953 29.9062 22.6953 34.5C22.6953 39.5625 24.8047 43.2656 29.0234 45.6094C31.7891 47.1094 38.0469 48.9844 47.7969 51.2344L62.2813 54.5391C69.2656 56.1328 74.6563 58.3125 78.4531 61.0781C85.0156 65.9062 88.2969 72.9141 88.2969 82.1016C88.2969 93.5391 84.125 101.719 75.7813 106.641C67.4844 111.562 57.8281 114.023 46.8125 114.023C33.9688 114.023 23.9141 110.742 16.6484 104.18C9.38282 97.6641 5.82032 88.8281 5.96094 77.6719H19.1094Z"
                      stroke="white"
                      strokeWidth={props.w}
                      mask="url(#path-1-outside-1)"
                    />
                    <path
                      d="M104.047 7.71094H116.211V67.6875L148.695 35.6953H164.867L136.039 63.8906L166.484 111H150.312L126.828 73.0312L116.211 82.7344V111H104.047V7.71094Z"
                      stroke="white"
                      strokeWidth={props.w}
                      mask="url(#path-1-outside-1)"
                    />
                    <path
                      d="M223.367 35.6953H237.359C235.578 40.5234 231.617 51.5391 225.477 68.7422C220.883 81.6797 217.039 92.2266 213.945 100.383C206.633 119.602 201.477 131.32 198.477 135.539C195.477 139.758 190.32 141.867 183.008 141.867C181.227 141.867 179.844 141.797 178.859 141.656C177.922 141.516 176.75 141.258 175.344 140.883V129.352C177.547 129.961 179.141 130.336 180.125 130.477C181.109 130.617 181.977 130.688 182.727 130.688C185.07 130.688 186.781 130.289 187.859 129.492C188.984 128.742 189.922 127.805 190.672 126.68C190.906 126.305 191.75 124.383 193.203 120.914C194.656 117.445 195.711 114.867 196.367 113.18L168.523 35.6953H182.867L203.047 97.0078L223.367 35.6953Z"
                      stroke="white"
                      strokeWidth={props.w}
                      mask="url(#path-1-outside-1)"
                    />
                    <path
                      d="M248.68 7.71094H261.336V111H248.68V7.71094Z"
                      stroke="white"
                      strokeWidth={props.w}
                      mask="url(#path-1-outside-1)"
                    />
                    <path
                      d="M290.094 90.9609C290.094 94.6172 291.43 97.5 294.102 99.6094C296.773 101.719 299.938 102.773 303.594 102.773C308.047 102.773 312.359 101.742 316.531 99.6797C323.562 96.2578 327.078 90.6562 327.078 82.875V72.6797C325.531 73.6641 323.539 74.4844 321.102 75.1406C318.664 75.7969 316.273 76.2656 313.93 76.5469L306.266 77.5312C301.672 78.1406 298.227 79.1016 295.93 80.4141C292.039 82.6172 290.094 86.1328 290.094 90.9609ZM320.75 65.3672C323.656 64.9922 325.602 63.7734 326.586 61.7109C327.148 60.5859 327.43 58.9688 327.43 56.8594C327.43 52.5469 325.883 49.4297 322.789 47.5078C319.742 45.5391 315.359 44.5547 309.641 44.5547C303.031 44.5547 298.344 46.3359 295.578 49.8984C294.031 51.8672 293.023 54.7969 292.555 58.6875H280.742C280.977 49.4062 283.977 42.9609 289.742 39.3516C295.555 35.6953 302.281 33.8672 309.922 33.8672C318.781 33.8672 325.977 35.5547 331.508 38.9297C336.992 42.3047 339.734 47.5547 339.734 54.6797V98.0625C339.734 99.375 339.992 100.43 340.508 101.227C341.07 102.023 342.219 102.422 343.953 102.422C344.516 102.422 345.148 102.398 345.852 102.352C346.555 102.258 347.305 102.141 348.102 102V111.352C346.133 111.914 344.633 112.266 343.602 112.406C342.57 112.547 341.164 112.617 339.383 112.617C335.023 112.617 331.859 111.07 329.891 107.977C328.859 106.336 328.133 104.016 327.711 101.016C325.133 104.391 321.43 107.32 316.602 109.805C311.773 112.289 306.453 113.531 300.641 113.531C293.656 113.531 287.938 111.422 283.484 107.203C279.078 102.938 276.875 97.6172 276.875 91.2422C276.875 84.2578 279.055 78.8438 283.414 75C287.773 71.1562 293.492 68.7891 300.57 67.8984L320.75 65.3672Z"
                      stroke="white"
                      strokeWidth={props.w}
                      mask="url(#path-1-outside-1)"
                    />
                    <path
                      d="M360.547 35.6953H372.57V46.3828C376.133 41.9766 379.906 38.8125 383.891 36.8906C387.875 34.9688 392.305 34.0078 397.18 34.0078C407.867 34.0078 415.086 37.7344 418.836 45.1875C420.898 49.2656 421.93 55.1016 421.93 62.6953V111H409.062V63.5391C409.062 58.9453 408.383 55.2422 407.023 52.4297C404.773 47.7422 400.695 45.3984 394.789 45.3984C391.789 45.3984 389.328 45.7031 387.406 46.3125C383.938 47.3438 380.891 49.4062 378.266 52.5C376.156 54.9844 374.773 57.5625 374.117 60.2344C373.508 62.8594 373.203 66.6328 373.203 71.5547V111H360.547V35.6953Z"
                      stroke="white"
                      strokeWidth={props.w}
                      mask="url(#path-1-outside-1)"
                    />
                    <path
                      d="M448.719 74.2266C448.719 82.2891 450.43 89.0391 453.852 94.4766C457.273 99.9141 462.758 102.633 470.305 102.633C476.164 102.633 480.969 100.125 484.719 95.1094C488.516 90.0469 490.414 82.8047 490.414 73.3828C490.414 63.8672 488.469 56.8359 484.578 52.2891C480.688 47.6953 475.883 45.3984 470.164 45.3984C463.789 45.3984 458.609 47.8359 454.625 52.7109C450.688 57.5859 448.719 64.7578 448.719 74.2266ZM467.773 34.3594C473.539 34.3594 478.367 35.5781 482.258 38.0156C484.508 39.4219 487.062 41.8828 489.922 45.3984V7.35938H502.086V111H490.695V100.523C487.742 105.164 484.25 108.516 480.219 110.578C476.188 112.641 471.57 113.672 466.367 113.672C457.977 113.672 450.711 110.156 444.57 103.125C438.43 96.0469 435.359 86.6484 435.359 74.9297C435.359 63.9609 438.148 54.4688 443.727 46.4531C449.352 38.3906 457.367 34.3594 467.773 34.3594Z"
                      stroke="white"
                      strokeWidth={props.w}
                      mask="url(#path-1-outside-1)"
                    />
                    <path
                      d="M569.445 7.71094L588.922 91.7344L612.266 7.71094H627.453L650.797 91.7344L670.273 7.71094H685.602L658.461 111H643.766L619.93 25.3594L595.953 111H581.258L554.258 7.71094H569.445Z"
                      stroke="white"
                      strokeWidth={props.w}
                      mask="url(#path-1-outside-1)"
                    />
                    <path
                      d="M724.273 102.844C732.664 102.844 738.406 99.6797 741.5 93.3516C744.641 86.9766 746.211 79.8984 746.211 72.1172C746.211 65.0859 745.086 59.3672 742.836 54.9609C739.273 48.0234 733.133 44.5547 724.414 44.5547C716.68 44.5547 711.055 47.5078 707.539 53.4141C704.023 59.3203 702.266 66.4453 702.266 74.7891C702.266 82.8047 704.023 89.4844 707.539 94.8281C711.055 100.172 716.633 102.844 724.273 102.844ZM724.766 33.5156C734.469 33.5156 742.672 36.75 749.375 43.2188C756.078 49.6875 759.43 59.2031 759.43 71.7656C759.43 83.9062 756.477 93.9375 750.57 101.859C744.664 109.781 735.5 113.742 723.078 113.742C712.719 113.742 704.492 110.25 698.398 103.266C692.305 96.2344 689.258 86.8125 689.258 75C689.258 62.3438 692.469 52.2656 698.891 44.7656C705.313 37.2656 713.938 33.5156 724.766 33.5156Z"
                      stroke="white"
                      strokeWidth={props.w}
                      mask="url(#path-1-outside-1)"
                    />
                    <path
                      d="M774.898 7.71094H787.555V111H774.898V7.71094Z"
                      stroke="white"
                      strokeWidth={props.w}
                      mask="url(#path-1-outside-1)"
                    />
                    <path
                      d="M806.961 7.71094H819.617V111H806.961V7.71094Z"
                      stroke="white"
                      strokeWidth={props.w}
                      mask="url(#path-1-outside-1)"
                    />
                  </svg>
                )}
              </Spring>
            </div>
            <Spring
              config={{ delay: 1800, tension: 60, friction: 68 }}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            >
              {props => (
                <div style={props}>
                  <p className="lead-text">Let's use the web for good.</p>
                  <p className="intro">
                    I'm a web developer ready to build your next world-changing
                    website.
                  </p>
                </div>
              )}
            </Spring>
            <Spring
              config={{ delay: 3000, tension: 60, friction: 68 }}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            >
              {props => (
                <div style={props}>
                  <div className="cta-box">
                    <a
                      className="cta btn"
                      href="mailto:skylandwoll@gmail.com"
                      rel="noreferrer"
                    >
                      <svg
                        className="email"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        height="23"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                      <span>Contact me</span>
                    </a>
                  </div>
                </div>
              )}
            </Spring>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.7} speed={2.2}>
        <div className="clouds__1">
          <img src={cloud} alt="cloud" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1.1} speed={0.1}>
        <div className="main-backdrop"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.1}>
        <div className="main-backdrop"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.8} speed={0.1} style={{ pointerEvents: "none" }}>
        <div className="cloud-break">
          <img src={cloudbreak} alt="decorative cloud page break" />
          <div></div>
        </div>
      </ParallaxLayer>
      {/* begin blob backgrounds */}
      <ParallaxLayer
        offset={3.9}
        speed={0}
        style={{ opacity: ".2", marginLeft: "50%" }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#f1ca5b"
            d="M36,-56C44,-43.8,46,-29.7,52.8,-15.6C59.5,-1.5,71,12.7,70.1,25.1C69.2,37.4,55.9,48,42.2,55.7C28.4,63.5,14.2,68.3,0.4,67.7C-13.4,67.2,-26.8,61.2,-39.1,53.1C-51.5,44.9,-62.9,34.5,-70.5,20.7C-78.1,6.8,-81.9,-10.5,-78.9,-27.4C-75.9,-44.4,-66,-60.8,-51.8,-71C-37.5,-81.1,-18.7,-84.9,-2.4,-81.7C14,-78.4,28,-68.2,36,-56Z"
            transform="translate(100 100)"
          />
        </svg>
      </ParallaxLayer>
      <ParallaxLayer
        offset={4.9}
        speed={0}
        style={{ opacity: ".15", marginLeft: "-30%" }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#1c2543"
            d="M36,-56C44,-43.8,46,-29.7,52.8,-15.6C59.5,-1.5,71,12.7,70.1,25.1C69.2,37.4,55.9,48,42.2,55.7C28.4,63.5,14.2,68.3,0.4,67.7C-13.4,67.2,-26.8,61.2,-39.1,53.1C-51.5,44.9,-62.9,34.5,-70.5,20.7C-78.1,6.8,-81.9,-10.5,-78.9,-27.4C-75.9,-44.4,-66,-60.8,-51.8,-71C-37.5,-81.1,-18.7,-84.9,-2.4,-81.7C14,-78.4,28,-68.2,36,-56Z"
            transform="translate(100 100)"
          />
        </svg>
      </ParallaxLayer>

      <ParallaxLayer
        offset={5.9}
        speed={0}
        style={{ opacity: ".2", marginLeft: "50%" }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#69b9f9"
            d="M38.8,-46.9C53.8,-42.4,72.1,-35.9,74.6,-25C77,-14.1,63.6,1.1,55.6,15.7C47.6,30.3,44.9,44.2,36.6,57.2C28.2,70.1,14.1,82,-0.9,83.3C-15.9,84.5,-31.8,75,-45.5,63.8C-59.2,52.6,-70.8,39.7,-77.2,24.1C-83.7,8.5,-85.1,-9.8,-77.3,-22.4C-69.5,-35.1,-52.6,-42,-38.1,-46.7C-23.7,-51.4,-11.9,-53.8,0,-53.8C11.9,-53.8,23.7,-51.4,38.8,-46.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </ParallaxLayer>
      {/* end blob backgrounds */}
      <ParallaxLayer offset={1} speed={0.1}>
        <main role="main">
          <div className="container">
            <p className="intro">
              I realized the storytelling power of the web when I launched my
              first WordPress website with my Peace Corps counterpart in 2015.
              Since then, I’ve built enterprise Drupal sites and WordPress
              campaign sites from large to small.
            </p>
          </div>
        </main>
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={0.2}
        factor={0.5}
        className="section-header"
      >
        <h2>Technology</h2>
      </ParallaxLayer>

      <ParallaxLayer offset={2.5} speed={0.2}>
        <section className="technology">
          <div className="container">
            <div className="wordpress">
              <div className="backdrop">
                <svg
                  viewBox="0 0 200 200"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#6387FC"
                    d="M50.8,-28.5C63.3,-7.8,69.1,17.7,59.5,36.2C49.9,54.7,24.9,66.2,-0.8,66.6C-26.6,67.1,-53.2,56.6,-66.6,35.9C-80.1,15.2,-80.4,-15.7,-67.1,-37C-53.8,-58.2,-26.9,-69.9,-3.8,-67.6C19.2,-65.4,38.4,-49.3,50.8,-28.5Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>
              <div className="inner">
                <div className="logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    width="100%"
                    version="1.0"
                    viewBox="0 0 5.5555557 5.5555555"
                  >
                    <g transform="matrix(1.0755 0 0 1.0755 -3.5103 -1.6684)">
                      <path
                        d="m5.8465 1.9131c0.57932 0 1.1068 0.222 1.5022 0.58547-0.1938-0.0052-0.3872 0.11-0.3952 0.3738-0.0163 0.5333 0.6377 0.6469 0.2853 1.7196l-0.2915 0.8873-0.7939-2.3386c-0.0123-0.0362 0.002-0.0568 0.0465-0.0568h0.22445c0.011665 0 0.021201-0.00996 0.021201-0.022158v-0.13294c0-0.012193-0.00956-0.022657-0.021201-0.022153-0.42505 0.018587-0.8476 0.018713-1.2676 0-0.0117-0.0005-0.0212 0.01-0.0212 0.0222v0.13294c0 0.012185 0.00954 0.022158 0.021201 0.022158h0.22568c0.050201 0 0.064256 0.016728 0.076091 0.049087l0.3262 0.8921-0.4907 1.4817-0.8066-2.3758c-0.01-0.0298 0.0021-0.0471 0.0308-0.0471h0.25715c0.011661 0 0.021197-0.00996 0.021197-0.022158v-0.13294c0-0.012193-0.00957-0.022764-0.021197-0.022153-0.2698 0.014331-0.54063 0.017213-0.79291 0.019803 0.39589-0.60984 1.0828-1.0134 1.8639-1.0134l-0.0000029-0.0000062zm1.9532 1.1633c0.17065 0.31441 0.26755 0.67464 0.26755 1.0574 0 0.84005-0.46675 1.5712-1.1549 1.9486l0.6926-1.9617c0.1073-0.3036 0.2069-0.7139 0.1947-1.0443h-0.000004zm-1.2097 3.1504c-0.2325 0.0827-0.4827 0.1278-0.7435 0.1278-0.2247 0-0.4415-0.0335-0.6459-0.0955l0.68415-1.9606 0.70524 1.9284v-1e-7zm-1.6938-0.0854c-0.75101-0.35617-1.2705-1.1213-1.2705-2.0075 0-0.32852 0.071465-0.64038 0.19955-0.92096l1.071 2.9285 0.000003-0.000003zm0.95023-4.4367c1.3413 0 2.4291 1.0878 2.4291 2.4291s-1.0878 2.4291-2.4291 2.4291-2.4291-1.0878-2.4291-2.4291 1.0878-2.4291 2.4291-2.4291zm0-0.15354c1.4261 0 2.5827 1.1566 2.5827 2.5827s-1.1566 2.5827-2.5827 2.5827-2.5827-1.1566-2.5827-2.5827 1.1566-2.5827 2.5827-2.5827z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
                <h4 className="brandname">WordPress</h4>
                <p className="description">
                  Perfect for ease of use and scalability.
                </p>
              </div>
            </div>
            <div className="drupal">
              <div className="backdrop">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#6387FC"
                    d="M43.3,-30.2C59.3,-14.4,77.7,3.7,76.1,19.9C74.4,36.1,52.7,50.2,31.9,56.5C11.1,62.8,-8.8,61.2,-25.1,53C-41.5,44.8,-54.2,30.1,-60.3,11.4C-66.4,-7.2,-65.8,-29.6,-54.7,-44.3C-43.5,-59,-21.8,-65.9,-4.1,-62.6C13.6,-59.4,27.3,-46,43.3,-30.2Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>
              <div className="inner">
                <div className="logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="80px"
                    viewBox="0 0 186.52541 243.71308"
                  >
                    <title>Drupal Logo</title>
                    <g id="Livello_2" data-name="Livello 2">
                      <g id="Livello_1-2" data-name="Livello 1">
                        <path
                          d="M131.64024,51.90954C114.49124,34.76866,98.12945,18.42858,93.26,0,88.39024,18.42858,72.02583,34.76866,54.8797,51.90954,29.16037,77.61263,0,106.7432,0,150.434a93.26271,93.26271,0,1,0,186.52541,0c0-43.688-29.158-72.8214-54.88517-98.52449M39.63956,172.16578c-5.71847-.19418-26.82308-36.57089,12.32937-75.303l25.90873,28.30088a2.21467,2.21467,0,0,1-.173,3.30485c-6.18245,6.34085-32.53369,32.7658-35.809,41.90292-.676,1.886-1.66339,1.81463-2.25619,1.79436M93.26283,220.1092a32.07521,32.07521,0,0,1-32.07544-32.07543A33.42322,33.42322,0,0,1,69.1821,166.8471c5.7836-7.07224,24.07643-26.96358,24.07643-26.96358s18.01279,20.18332,24.03326,26.89607a31.36794,31.36794,0,0,1,8.04647,21.25418A32.07551,32.07551,0,0,1,93.26283,220.1092m61.3923-52.015c-.69131,1.51192-2.25954,4.036-4.37617,4.113-3.77288.13741-4.176-1.79579-6.96465-5.92291-6.12235-9.06007-59.55167-64.89991-69.54517-75.69925-8.79026-9.49851-1.23783-16.195,2.26549-19.70431C80.42989,66.47768,93.25949,53.656,93.25949,53.656s38.25479,36.29607,54.19029,61.09626,10.44364,46.26024,7.20535,53.342"
                          fill="white"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <h4>Drupal</h4>
                <p className="description">
                  Perfect for complex sites with lots of content.
                </p>
              </div>
            </div>
            <div className="gatsby">
              <div className="backdrop">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#6387FC"
                    d="M51.5,-38.6C65.4,-23.5,74.6,-2.2,71.5,18.3C68.4,38.7,52.9,58.3,33.4,66.7C13.9,75,-9.8,72.2,-31.7,62.8C-53.7,53.4,-74,37.5,-80.6,16.2C-87.3,-5.1,-80.2,-31.8,-64.5,-47.2C-48.8,-62.7,-24.4,-66.9,-2.8,-64.7C18.7,-62.4,37.5,-53.6,51.5,-38.6Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>
              <div className="inner">
                <div className="logo">
                  <svg
                    width="100%"
                    viewBox="0 0 521 521"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M260.5 0C117.225 0 0 117.225 0 260.5C0 403.775 117.225 521 260.5 521C403.775 521 521 403.775 521 260.5C521 117.225 403.775 0 260.5 0ZM115.364 405.636C76.2893 366.561 55.8214 314.461 55.8214 264.221L258.639 465.179C206.539 463.318 154.439 444.711 115.364 405.636ZM305.157 459.596L61.4036 215.843C81.8714 124.668 163.743 55.8214 260.5 55.8214C329.346 55.8214 388.889 89.3143 426.104 139.554L398.193 163.743C366.561 120.946 316.321 93.0357 260.5 93.0357C187.932 93.0357 126.529 139.554 102.339 204.679L316.321 418.661C370.282 400.054 411.218 353.536 424.243 297.714H334.929V260.5H465.179C465.179 357.257 396.332 439.129 305.157 459.596Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h4>Gatsby</h4>
                <p className="description">
                  Blazing fast and perfect for the future.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="tools">
            <div>
              <h3>Code</h3>
              <ul>
                <li>HTML</li>
                <li>CSS and SASS (SCSS)</li>
                <li>jQuery</li>
                <li>PHP/Twig Templating</li>
              </ul>
            </div>

            <div>
              <h3>Tools</h3>
              <ul>
                <li>Atom</li>
                <li>VSCode</li>
                <li>Git</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div>
              <h3>Design</h3>
              <ul>
                <li>Photoshop</li>
                <li>Figma</li>
                <li>XD</li>
              </ul>
            </div>
          </div>
        </section>
      </ParallaxLayer>
      <ParallaxLayer
        offset={3.5}
        speed={0.2}
        factor={0.5}
        className="section-header"
      >
        <h2>Recent Projects</h2>
      </ParallaxLayer>
      <ParallaxLayer offset={4} speed={1}>
        <div className="project-photos desktop">
          <div className="desktop-preview">
            <Img
              fluid={props.data.algross.childImageSharp.fluid}
              alt="Screenshot of Dr Al Gross for US Senate website"
            />
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={4} speed={2} style={{ marginTop: "-10%" }}>
        <div className="project-photos desktop">
          <div className="mobile-preview">
            <Img
              fluid={props.data.algrossmobile.childImageSharp.fluid}
              alt="Screenshot of Dr Al Gross for US Senate website"
            />
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0.2}>
        <section className="recent-work">
          <div className="container">
            <div className="project algross">
              <div className="project-text">
                <h3>Dr. Al Gross for US Senate</h3>
                <div className="project-photos mobile">
                  <Img
                    fluid={props.data.algross.childImageSharp.fluid}
                    alt="Screenshot of Dr Al Gross for US Senate website"
                  />
                </div>

                <ul>
                  <li>
                    Provided full-service WordPress site development and custom
                    theming based upon client-provided mockups
                  </li>
                  <li>
                    Responsive design for cross-device compatibility using
                    Bootstrap 4 framework
                  </li>
                  <li>Parallax mountainscape and custom animations</li>
                  <li>
                    Named one of the best campaign websites of 2020 by{" "}
                    <a
                      href="https://poliengine.com/blog/best-political-campaign-websites"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PoliEngine
                    </a>
                  </li>
                </ul>
                <p>
                  <a
                    href="https://dralgrossak.com/"
                    className="btn"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Visit Website
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </ParallaxLayer>
      <ParallaxLayer offset={5} speed={1}>
        <div className="project-photos desktop">
          <div className="desktop-preview">
            <Img
              fluid={props.data.fireside.childImageSharp.fluid}
              alt="Screenshot of Fireside Campaigns website"
            />
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={5} speed={2} style={{ marginTop: "-10%" }}>
        <div className="project-photos desktop">
          <div className="mobile-preview">
            <Img
              fluid={props.data.firesidemobile.childImageSharp.fluid}
              alt="Screenshot of Fireside Campaigns website"
            />
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={5} speed={0.2}>
        <section className="recent-work">
          <div className="container">
            <div className="project fireside">
              <div className="project-text">
                <h3>Fireside Campaigns</h3>
                <div className="project-photos mobile">
                  <Img
                    fluid={props.data.fireside.childImageSharp.fluid}
                    alt="Screenshot of Fireside Campaigns website"
                  />
                </div>

                <ul>
                  <li>
                    Designed and developed from client logo and branding package
                  </li>
                  <li>Responsive design with Bootstrap 4</li>
                  <li>Scroll effects with jQuery and Animate on Scroll</li>
                </ul>
                <p>
                  <a
                    href="https://firesidecampaigns.com/"
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </ParallaxLayer>
      <ParallaxLayer offset={6} speed={1}>
        <div className="project-photos desktop">
          <div className="desktop-preview">
            <Img
              fluid={props.data.votercare.childImageSharp.fluid}
              alt="Screenshot of VoterCare website"
            />
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={6} speed={2} style={{ marginTop: "-10%" }}>
        <div className="project-photos desktop">
          <div className="mobile-preview">
            <Img
              fluid={props.data.votercaremobile.childImageSharp.fluid}
              alt="Screenshot of VoterCare website"
            />
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={6} speed={0.2}>
        <section className="recent-work">
          <div className="container">
            <div className="project votercare">
              <div className="project-text">
                <h3>VoterCare</h3>
                <div className="project-photos mobile">
                  <Img
                    fluid={props.data.votercare.childImageSharp.fluid}
                    alt="Screenshot of VoterCare website"
                  />
                </div>
                <ul>
                  <li>
                    Custom WordPress development based upon client-provided
                    designs
                  </li>
                  <li>Created logo animations and scroll animations</li>
                  <li>
                    Content feeds with convenient, consistent custom fields
                  </li>
                  <li>Custom sign up form</li>
                </ul>
                <p>
                  <a
                    href="https://votercare.org/"
                    className="btn"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Visit Website
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </ParallaxLayer>

      <ParallaxLayer offset={7} speed={0.5}>
        <Footer />
      </ParallaxLayer>
    </Parallax>
  </div>
)

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    algross: file(relativePath: { eq: "algross.jpg" }) {
      ...fluidImage
    }
    algrossmobile: file(relativePath: { eq: "algross-mobile.jpg" }) {
      ...fluidImage
    }
    fireside: file(relativePath: { eq: "fireside.jpg" }) {
      ...fluidImage
    }
    firesidemobile: file(relativePath: { eq: "fireside-mobile.jpg" }) {
      ...fluidImage
    }
    votercare: file(relativePath: { eq: "votercare.jpg" }) {
      ...fluidImage
    }
    votercaremobile: file(relativePath: { eq: "votercare-mobile.jpg" }) {
      ...fluidImage
    }
  }
`
