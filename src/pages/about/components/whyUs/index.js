import React from "react"
import Grid from "@material-ui/core/Grid"
import Fade from "react-reveal/Fade"
import styles from "./style.module.scss"

import imageWhyUs from "../../../../images/why-us.svg"
import imageVision from "../../../../images/vision.svg"

const WhyUsPage = () => {
  return (
    <div>
      <div className={`content ${styles.content}`}>
        <Grid container spacing={5}>
          <Grid item lg={6} xs={12}>
            <Fade left>
              <h1>Why Us?</h1>
              <p>
                Digi Bank (DB) was established in Dominica to address the
                growing needs of international clients and companies wanting to
                expand their footprint from East to West. The foundation of the
                bank is to provide security, trust and exceptional service
                combined with the latest technology.
              </p>
              <p>
                DB is the first western bank tailored to the Asian market in
                search of an international bank. Offering up-to-date solutions
                in their own language and time zone, we add our personal touch
                so our clients can trust us as we add value to their lives.
              </p>
              <p className={styles.text_big}>
                The focus of Digi Bank is to capitalize on opportunities within
                the Asian Market. Based on the expansion of the market, Digi
                Bank makes banking in Dominica a prime option for Asian
                territories.
              </p>
              <p>
                DB is a digitally advanced bank that empowers its’ clients to
                have control of their funds wherever they are. We assist Asian
                clients to manage their funds in a secure, private overseas
                territory.
              </p>
            </Fade>
          </Grid>
          <Grid className={styles.about_img} item lg={6} xs={12}>
            <Fade right>
              <img src={imageWhyUs} alt="Why Us?" />
            </Fade>
          </Grid>
        </Grid>
      </div>

      <div className={`content ${styles.content}`}>
        <Grid container spacing={5}>
          <Grid className={styles.about_img} item lg={6} xs={12}>
            <Fade left>
              <img src={imageVision} alt="Vision" />
            </Fade>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Fade right>
              <h1>Vision</h1>
              <p className={styles.sub_text}>
                To provide Banking Beyond Borders for our clients using
                technology, flexibility, innovation and paying attention to each
                individual’s personal financial needs.
              </p>
              <h1>Mission</h1>
              <p className={styles.sub_text}>
                To provide exceptional international financial services for
                clients who are seeking to make use of an international bank
                that allows them to conduct banking world-wide. To deliver this
                service through a strong relationship based on trust,
                operational excellence and meeting the needs of our clients with
                high-quality service.
              </p>
            </Fade>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default WhyUsPage
