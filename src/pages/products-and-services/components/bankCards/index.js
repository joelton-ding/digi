import React from "react"
import Grid from "@material-ui/core/Grid"
import Fade from "react-reveal/Fade"
import styles from "./style.module.scss"

import imageUnionPay from "../../../../images/productsAndServices/icon-union-pay.svg"

const BankCardsPage = () => {
  return (
    <div id="bankCards" className={styles.bank_cards_wrapper}>
      <div className={`content ${styles.content}`}>
        <Grid container spacing={5}>
          <Grid className={styles.bank_carss_img} item lg={6} xs={12}>
            <Fade left>
              <img src={imageUnionPay} alt="Bank Cards" />
            </Fade>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Fade right>
              <h1>Bank Cards</h1>
              <p>
                UnionPay International (UPI) is a subsidiary of China UnionPay
                focused on the growth and support of UnionPay’s global business.
                In partnership with more than 2000 institutions worldwide,
                UnionPay International has enabled card acceptance in 174
                countries and regions with issuance in 55 countries. UnionPay
                International provides high quality, cost-effective and secure
                cross-border payment services to the world’s largest cardholder
                base and ensures convenient local services to a growing number
                of global UnionPay cardholders and merchants.
              </p>
              <p>
                Digi Bank (via its’ partners) is able to provide reloadable
                Union Pay International cards in $USD. For our Asian clients,
                UnionPay Debit card is your ideal choice, when you travel abroad
                or purchase online from around the world, and at the same time,
                you have a choice to pay with your own funds, directly from your
                own bank accounts.
              </p>
              <p>
                The UnionPay debit card is a great alternative to carrying cash
                or checks. Cardholders can enjoy the convenience and security of
                making purchases with their own money simply by linking your
                bank account to the UnionPay debit card.
              </p>
              <p>
                The UnionPay debit card includes a PIN-based debit card that
                supports functions such as ATM access, POS purchases, Ecommerce,
                PCT and tax refund. UnionPay has the largest PIN-based network
                in the world, so cardholders can be confident of the security of
                their money when using PIN verification with a UnionPay debit
                card.
              </p>
            </Fade>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default BankCardsPage
