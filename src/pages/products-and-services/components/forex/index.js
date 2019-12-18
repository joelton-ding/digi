import React from "react"
import Grid from "@material-ui/core/Grid"
import Fade from "react-reveal/Fade"
import styles from "./style.module.scss"

import imageForexBg from "../../../../images/productsAndServices/forex-bg.png"

const ForexPage = () => {
  return (
    <div
      id="forex"
      className={styles.forex_wrapper}
      style={{ backgroundImage: `url(${imageForexBg})` }}
    >
      <div className={`content ${styles.content}`}>
        <Grid container spacing={5}>
          <Grid item lg={5} xs={12}>
            <Fade left>
              <h1>Forex</h1>
              <p>
                Major currencies can be exchanged from your main account. You
                will be able to access more than 70 currencies, other than the
                main ones (EUR, CGF, GBP, SGC, HKD). You will have to provide us
                with information such as transaction size, frequency, duration
                and the desired outcome. In case of corporate accounts, we would
                need to see supporting documentation as part of our due
                diligence policy.
              </p>
              <p>
                In case the client is more experienced then we can offer
                currency options, spot contract and forward contract.
              </p>
            </Fade>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default ForexPage
