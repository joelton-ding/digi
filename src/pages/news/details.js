import React from "react"
import styled from "styled-components"
import { find } from "lodash"

import SubBanner from "../../components/subBanner"
import Layout from "../../components/Layout/layout"
import SEO from "../../components/Layout/seo/seo"
import styles from "./style.module.scss"
import imgA1 from "../../images/news/a1.jpg"
import imgA2 from "../../images/news/a2.jpg"
import withLocation from "../../components/common/Hoc"
import { NEWS_BLOCK } from "../../components/common/const"

const NewsDetails = ({ search }) => {
  const data = find(NEWS_BLOCK, { id: Number(search.id) })
  const empty = "-"

  return (
    <Layout>
      <SEO title="News Detail" />
      <SubBanner
        image={data ? (data.id === 1 ? imgA1 : imgA2) : null}
        isLarge
      />
      <div className={`${styles.content} content`}>
        <h1 className={styles.title}>{data ? data.title : empty}</h1>
        <h3 className={styles.date}>{data ? data.date : empty}</h3>
        <NewsParagraph>
          <h4>{data ? data.subTitle : empty}</h4>
          <p>{data ? data.des : empty}</p>
        </NewsParagraph>
      </div>
    </Layout>
  )
}

export default withLocation(NewsDetails)

const NewsParagraph = styled.div`
  h4 {
    font-size: 20px;
    font-weight: 700;
  }
  p {
    font-size: 20px;
    line-height: 24px;
  }
`
