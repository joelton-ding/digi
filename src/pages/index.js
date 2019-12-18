import React from "react"

import { BannerSlider } from "../components/common/slider"
// import ContentData from '../components/home/contentData'

import Layout from "../components/Layout/layout"
import SEO from "../components/Layout/seo/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BannerSlider title={"Always With You, Wherever You Go!"} nav />
    {/* <ContentData /> */}
  </Layout>
)

export default IndexPage
