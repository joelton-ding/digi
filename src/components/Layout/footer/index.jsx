import React from "react"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Fade from "react-reveal/Fade"
import { ChevronUp } from "react-feather"
import FooterLogo from "../../../images/footer-logo.svg"
import ScrollUp from "react-scroll-up"

import styles from "./style.module.scss"

const Footer = () => {
  return (
    <footer>
      <ScrollUp className={styles.back_to_top} showUnder={160}>
        <span className={styles.back_to_top}>
          <ChevronUp size={50} />
        </span>
      </ScrollUp>
      <div className={styles.component_footer}>
        <div className={styles.main_footer}>
          <Grid container spacing={6}>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Fade>
                <div className={styles.footer_logo}>
                  <div>
                    <img src={FooterLogo} alt="Logo" />
                  </div>
                  <div className={styles.note_text}>
                    <div>DIGIBANK</div>
                    The first western bank tailored to clients in the Asian
                    market, offering a value-added, personal touch to overseas
                    fund management.
                  </div>
                </div>
              </Fade>
            </Grid>
            <Grid
              className={styles.footer_menu_1}
              item
              lg={1}
              md={1}
              sm={1}
              xs={12}
            ></Grid>
            <Grid
              className={styles.footer_menu_2}
              item
              lg={3}
              md={3}
              sm={4}
              xs={12}
            >
              <Fade>
                <div>
                  <ul className={styles.footer_menu}>
                    <li>
                      <Link activeClassName="active" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link activeClassName="active" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClassName="active"
                        to="/products-and-services"
                      >
                        Product &amp; Services
                      </Link>
                    </li>
                    <li>
                      <Link activeClassName="active" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </Fade>
            </Grid>
            <Grid
              className={styles.footer_menu_3}
              item
              lg={1}
              md={1}
              sm={1}
              xs={12}
            ></Grid>
            <Grid
              className={styles.footer_menu_4}
              item
              lg={3}
              md={3}
              sm={3}
              xs={12}
            >
              <Fade>
                <div>
                  <ul className={styles.footer_menu}>
                    <li>
                      <Link to="/open-account">Open Account</Link>
                    </li>
                    {/* <li><Link to="/login">Login</Link></li> */}
                  </ul>
                </div>
              </Fade>
            </Grid>
          </Grid>

          <Grid className={styles.copyright_content} container spacing={6}>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Fade>
                <div className={styles.copyright}>
                  Copyright 2019 DigiBank | All Right Reserved
                </div>
              </Fade>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Fade>
                <div>
                  <ul className={styles.disclaimer}>
                    <li>Disclaimer</li>
                    <li>|</li>
                    <li>Privacy Policy</li>
                    <li>|</li>
                    <li>Security</li>
                    <li>|</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </Fade>
            </Grid>
          </Grid>
        </div>
      </div>
    </footer>
  )
}
export default Footer
