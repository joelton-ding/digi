import React from 'react'
import Grid from '@material-ui/core/Grid'
import Fade from 'react-reveal/Fade'

import imagesThumbPic1 from '../../../../images/news-thumbnail-pic1.png'
import imagesThumbPic2 from '../../../../images/news-thumbnail-pic2.png'
import imagesThumbPic3 from '../../../../images/news-thumbnail-pic3.png'

import styles from './style.module.scss'

const NewsPage = () => { 
  return (
    <div id="news" className={styles.news_wrapper}>
      <div className={`content ${styles.content}`}>
        <div className={styles.inner}>
        <h1>News</h1>
          <Grid container spacing={5}>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Fade left>
                <div className={styles.news_content}>
                  <img src={imagesThumbPic1} alt="Thumb Images" />
                  <h2>Welcome to the New Age of Software: A Q&amp;A with Software Analyst Gregg Moskowitz</h2>
                  <p className={styles.date}>13 Sep 2019</p>
                </div>
              </Fade>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Fade left>
                <div className={styles.news_content}>
                  <img src={imagesThumbPic2} alt="Thumb Images" />
                  <h2>REITS are on the Rise, What’s the Outlook?</h2>
                  <p className={styles.date}>10 Aug 2019</p>
                </div>
              </Fade>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Fade left>
                <div className={styles.news_content}>
                  <img src={imagesThumbPic3} alt="Thumb Images" />
                  <h2>The Future of Banking is Here, But Have People Noticed? - A Q&A with Thomas McCrohan</h2>
                  <p className={styles.date}>1 Jul 2019</p>
                </div>
              </Fade>
          </Grid>
          </Grid>
          </div>
        </div>
  </div>
  )
}

export default NewsPage