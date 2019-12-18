import React from "react"
import Grid from "@material-ui/core/Grid"
import Fade from "react-reveal/Fade"
import styles from "./style.module.scss"

import imageTimeDeposits from "../../../../images/productsAndServices/time-deposits.png"

const TimeDepositsPage = () => {
  return (
    <div id="timeDeposits" className={styles.payroll_wrapper}>
      <div className={`content ${styles.content}`}>
        <Grid container spacing={5}>
          <Grid className={styles.payroll_img} item lg={6} xs={12}>
            <Fade left>
              <img src={imageTimeDeposits} alt="Time Deposits" />
            </Fade>
          </Grid>
          <Grid className={styles.text} item lg={6} xs={12}>
            <Fade right>
              <h1>Time Deposits</h1>
              <p>
                We offer Fixed Term Deposits for Savings Accounts and
                Certificates of Deposit. Features include:
              </p>
              <ul>
                <li>Short-term deposits ranging up to a year</li>
                <li>Longer-term deposits up to 5 years</li>
                <li>Rates: Contact Client Service</li>
                <li>
                  Simple interest can be paid monthly, quarterly or yearly to
                  your demand deposit account
                </li>
              </ul>
            </Fade>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default TimeDepositsPage
