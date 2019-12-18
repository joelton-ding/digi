import React from "react"
import Grid from "@material-ui/core/Grid"

import SubBanner from "../../components/subBanner"
import Layout from "../../components/Layout/layout"
import SEO from "../../components/Layout/seo/seo"
import styles from "./style.module.scss"
import imgA1 from "../../images/news/a1.jpg"
import imgA2 from "../../images/news/a2.jpg"
import NewsBlock from "./components/newsBlock"
import { NEWS_BLOCK } from "../../components/common/const"

const NewsPage = () => {
  return (
    <Layout>
      <SEO title="News" />
      <SubBanner tag="news" color="#14487b" />
      <div className={`${styles.content} content`}>
        <Grid container spacing={3}>
          <Grid item lg={8} xs={12}>
            <NewsBlock isHuge={true} data={NEWS_BLOCK[0]} imgUrl={imgA1} />
          </Grid>

          <Grid item lg={4} xs={12}>
            <Grid container spacing={3}>
              <Grid item lg={12} xs={12}>
                <NewsBlock isHuge={false} data={NEWS_BLOCK[1]} imgUrl={imgA2} />
              </Grid>
              {/* <Grid item lg={12} xs={12}>
                <NewsBlock
                  isHuge={false}
                  data={NEWS_BLOCK[1] ? NEWS_BLOCK[1] : null}
                />
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {NEWS_BLOCK.map((data, index) => {
            return index > 2 ? (
              <Grid key={data.id} item lg={4} xs={12}>
                <NewsBlock isHuge={false} data={data} />
              </Grid>
            ) : null
          })}
        </Grid>
      </div>
    </Layout>
  )
}

export default NewsPage
