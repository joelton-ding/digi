import React from "react"
// import Fade from "react-reveal/Fade"

import Loadable from "@loadable/component"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import styles from "./style.module.scss"
import "./style.module.scss"
import "../../../node_modules/owl.carousel/dist/assets/owl.carousel.css"
import "../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css"
import "../../../node_modules/owl.carousel/docs/assets/css/animate.css"

const OwlCarousel = Loadable(() => import("react-owl-carousel"))

const BannerSlider = ({ title, nav }) => {
  const processedImages = useStaticQuery(graphql`
    query {
      backgrounds: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const imgList = [
    "banners/homepage-banner2.png",
    "banners/homepage-banner3.png",
    "banners/homepage-banner4.png",
    "banners/homepage-banner5.png",
    "banners/homepage-banner6.png",
  ]

  return (
    <>
      <OwlWrapper>
        <OwlCarousel
          className="owl-theme"
          // dots={false}
          items={1}
          lazyLoad={true}
          autoplay={true}
          animateOut="fadeOut"
          animateIn="fadeIn"
          mouseDrag={false}
          // dotsContainer="halo-dot-theme"
          loop
        >
          {processedImages.backgrounds.nodes.map(res => {
            return imgList.map((get, index) => {
              return res.relativePath === get ? (
                <div
                  key={index}
                  style={{
                    width: "100vw",
                    height: "90vh",
                  }}
                >
                  <Img
                    fluid={res.childImageSharp.fluid}
                    style={{
                      position: "absolute",
                      zIndex: -10,
                      width: "100%",
                      height: "100%",
                      margin: 0,
                      padding: "none",
                      left: 0,
                      top: 0,
                      backgroundSize: "cover",
                    }}
                  />
                  <div className={styles.container}>
                    <div className={styles.main_banner}>
                      <div className={styles.inner}>
                        <div className={styles.detail_wrapper}>
                          <div className={styles.inner}>
                            {/* <Fade left> */}
                            <h1>{title ? title : ""}</h1>
                            {/* </Fade> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            })
          })}
        </OwlCarousel>
      </OwlWrapper>
    </>
  )
}

export { BannerSlider }

const OwlWrapper = styled.div`
  .owl-theme > .owl-dots {
    position: absolute;
    bottom: 7%;
    left: 0;
    right: 0;

    .owl-dot {
      width: 20px;
      height: 20px;
      border: 3px solid white;
      border-radius: 30px;
      margin: 0 5px;

      span {
        width: 10px;
        height: 10px;
        margin: 2px 2px;
        background: transparent;
      }
      &.active > span {
        background: white;
      }
    }
  }
`
