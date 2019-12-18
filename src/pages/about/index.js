import React from "react"
import SubBanner from "../../components/subBanner"
import Layout from "../../components/Layout/layout"
import SEO from "../../components/Layout/seo/seo"

import WhyUsPage from "./components/whyUs"
import AboutDominicaPage from "./components/aboutDominica"
import SecurityPage from "./components/security"
import FATCAPage from "./components/FATCA"
import AMLPage from "./components/AML"
// import NewsPage from "./components/news"
// import VideoPage from './components/video'

import imageAbout from "../../images/about.png"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About Us" />
      <SubBanner tag="about" image={imageAbout} />
      <WhyUsPage />
      <AboutDominicaPage />
      <SecurityPage />
      <FATCAPage />
      <AMLPage />
      {/* <NewsPage /> */}
      {/* <VideoPage /> */}
    </Layout>
  )
}

export default AboutPage
