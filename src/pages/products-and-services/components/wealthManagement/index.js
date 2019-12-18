import React from "react"
import Grid from "@material-ui/core/Grid"
import Fade from "react-reveal/Fade"
import styles from "./style.module.scss"

import imageWealthManagement from "../../../../images/productsAndServices/handshake.png"

const WealthManagementPage = () => {
  return (
    <div id="wealthManagement" className={styles.bank_cards_wrapper}>
      <div className={`content ${styles.content}`}>
        <Grid container spacing={5}>
          <Grid item lg={6} xs={12}>
            <Fade left>
              <h1>Wealth Management</h1>
              <p>
                We offer solutions that are customized for each client as they
                pursue the protection of their assets and while growing their
                earnings. Our process is to outline a way forward for your
                journey.
              </p>

              <p>
                The options to choose from are many and they are tailored to
                your specific plan.
              </p>
              <ul>
                <li>Private banking including your person concierge</li>
                <li>
                  Investment vehicles chosen for your specific plan (i.e.
                  brokerage accounts)
                </li>
                <li>Asset management to include portfolio management</li>
                <li>Estate planning</li>
                <li>Financial planning</li>
                <li>Tax planning</li>
                <li>Insurance</li>
              </ul>
            </Fade>
          </Grid>
          <Grid className={styles.wealth_img} item lg={6} xs={12}>
            <Fade right>
              <img src={imageWealthManagement} alt="Wealth Management" />
            </Fade>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default WealthManagementPage
