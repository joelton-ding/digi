import React from "react"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Fade from "react-reveal/Fade"

import styles from "./style.module.scss"

import imageUsdEurCurrency from "../../../../images/productsAndServices/usd-eur-currency.png"
import imageIconPersonal from "../../../../images/productsAndServices/icon-personal-bg.png"
import imageIconCorporate from "../../../../images/productsAndServices/icon-corporate-bg.png"

const MulticurrencyAccountsPage = () => {
  return (
    <div id="multicurrencyAccounts" className={`content ${styles.content}`}>
      <Fade left>
        <h2>
          The products and services we offer our clients are designed to work
          internationally. Please follow the below links to obtain more
          information about each service, if you have any questions please
          contact us.
        </h2>
      </Fade>
      <div className={styles.multicurrency_content}>
        <Grid container spacing={5}>
          <Grid item lg={8} xs={12}>
            <Fade left>
              <h1>Multicurrency Accounts</h1>
              <p>
                We offer Personal and Corporate accounts in two main currencies
                $USD and EUR. All accounts can be accessed through a secure
                on-line core banking system from any web browser or mobile
                phone. Through the on-line bank clients will be able to:
              </p>
              <ul className={styles.account_list}>
                <li>
                  <span /> View available balances in different currencies
                </li>
                <li>
                  <span /> Review incoming wire transfers accredited to the
                  account
                </li>
                <li>
                  <span /> Initiate a swift wire transfer to any other
                  institution in the world that has a swift code
                </li>
                <li>
                  <span /> Receive transfers from internal transfers from other
                  accounts held in DB
                </li>
                <li>
                  <span /> Transfer funds among different accounts
                </li>
              </ul>
              <p>
                For the fees associated with the accounts and required
                documentation please follow the links
              </p>
            </Fade>
          </Grid>
          <Grid className={styles.currency_img} item lg={4} xs={12}>
            <Fade right>
              <img src={imageUsdEurCurrency} alt="USD EUR Currency" />
            </Fade>
          </Grid>
        </Grid>
      </div>
      <div className={styles.person_content}>
        <Grid container spacing={5}>
          <Grid item lg={6} xs={12}>
            <Fade left>
              <div
                className={`personal ${styles.inner}`}
                style={{
                  backgroundImage: `url(${imageIconPersonal})`,
                  backgroundPosition: "0 center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h1>Personal</h1>
                <p>
                  A personal account can receive wire transfers, initiate
                  outgoing wires and request a bank card.
                </p>
                <p>
                  <Link to="/open-account#account">
                    Please click here to see the requirements to open the
                    account.
                  </Link>
                </p>
              </div>
            </Fade>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Fade right>
              <div
                className={`personal ${styles.inner}`}
                style={{
                  backgroundImage: `url(${imageIconCorporate})`,
                  backgroundPosition: "0 center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h1>Corporate</h1>
                <p>
                  A corporate account can receive wire transfers, initiate
                  outgoing wires and request a bank card.
                </p>
                <p>
                  <Link to="/open-account#account">
                    Please click here to see the requirements to open the
                    account.
                  </Link>
                </p>
              </div>
            </Fade>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default MulticurrencyAccountsPage
