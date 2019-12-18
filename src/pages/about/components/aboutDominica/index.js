import React from "react"
import Grid from "@material-ui/core/Grid"
import Fade from "react-reveal/Fade"

import styles from "./style.module.scss"

import imageAboutDominica from "../../../../images/about_dominica.png"

const AboutDominicaPage = () => {
  return (
    <div
      className={styles.about_dominica}
      style={{ backgroundImage: `url(${imageAboutDominica})` }}
    >
      <div id="aboutDominica" className={`content ${styles.content}`}>
        <Grid container spacing={5}>
          <Grid item lg={6} xs={12}>
            <Fade left>
              <h1>About Dominica</h1>
              <p>
                Dominica is a parliamentary democracy within the Commonwealth of
                Nations. The capital is Roseau. The Dominica economy, once
                overly-dependent on agricultural products, has diversified to
                include small industry, geothermal energy production, tourism, a
                leading economic citizenship by investment program in the world
                and offshore investing. The Government has, over a period of
                nearly two decades, established a number of incentives for
                investors.
              </p>
              <p>
                In recent years, the Commonwealth of Dominica has become a major
                international financial centre. The largest sectors are
                "offshore banking, payment processing companies, and general
                corporate activities". Regulation and supervision of the
                financial services industry is the responsibility of the
                Financial Service Unit of the Commonwealth of Dominica (FSU)
                under the supervision of the Ministry of Finance.
              </p>
              <p>
                Digi Bank Corporation will function and be guided by strict
                compliance of the FSU in Dominica and of the European and
                International laws, because of the use of the US Dollar and the
                Euros compatible with all related US and European countries. We
                incorporate guidelines from the US Patriot Act in conjunction
                with local legislations as outlined in the Offshore Banking Act
                for the Commonwealth of Dominica.
              </p>
            </Fade>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default AboutDominicaPage
