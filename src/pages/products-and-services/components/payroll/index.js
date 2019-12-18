import React from "react"
import Grid from "@material-ui/core/Grid"
import Fade from "react-reveal/Fade"
import styles from "./style.module.scss"

import imagePayroll from "../../../../images/productsAndServices/icon-payroll.svg"

const PayrollPage = () => {
  return (
    <div id="payroll" className={styles.payroll_wrapper}>
      <div className={`content ${styles.content}`}>
        <Grid container spacing={5}>
          <Grid className={styles.payroll_img} item lg={6} xs={12}>
            <Fade left>
              <img src={imagePayroll} alt="Payroll" />
            </Fade>
          </Grid>
          <Grid className={styles.text} item lg={6} xs={12}>
            <Fade right>
              <h1>Payroll</h1>
              <p>
                The payroll program is based on merging a personal account with
                a debit card. A payroll card is a prepaid card onto which an
                employer loads an employee's wages or salary each payday.
                Payroll cards are an alternative to direct deposit or paper
                checks. Users can access their money from an ATM or cashback
                purchase in the same manner as with a traditional debit card.
              </p>
              <p>
                The benefit is that an international payroll program is a much
                more time and cost-effective than doing individual wire
                transfers, issuing checks or sending via western union or other
                payment methods.
              </p>
            </Fade>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default PayrollPage
