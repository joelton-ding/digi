import React from "react"
import Grid from "@material-ui/core/Grid"
import Fade from "react-reveal/Fade"

import imageFatcaBuilding from "../../../../images/about/fatca-building.png"
import W8FORM from "../../../../misc/FATCA_W8_BEN.pdf"
import W8BENEFORM from "../../../../misc/W8-BEN-E_Form.pdf"
import W9FORM from "../../../../misc/FATCA_W9_Form.pdf"

import styles from "./style.module.scss"

const FATCAPage = () => {
  return (
    <div className={styles.fatca_wrapper}>
      <div className={`content ${styles.content}`}>
        <div className={styles.inner}>
          <Grid id="regulatoryAuthority" container spacing={0}>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Fade left>
                <div className={styles.fatca_img}>
                  <img
                    src={imageFatcaBuilding}
                    alt="Foreign Account Tax Compliance Act (FATCA)"
                  />
                </div>
              </Fade>
            </Grid>
            <Grid item lg={1} md={1} sm={12} xs={12}></Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Fade right>
                <div id="FATCA" className={styles.fatca_content}>
                  <h1>Foreign Account Tax Compliance Act (FATCA)</h1>
                  <p>
                    FATCA was enacted in 2010 by Congress to target
                    non-compliant U.S. taxpayers using foreign accounts. FATCA
                    requires foreign financial institutions (FFIs) to report to
                    the IRS information about financial accounts held by U.S.
                    taxpayers, or by foreign entities in which U.S. taxpayers
                    hold a substantial ownership interest. FFIs are encouraged
                    to either directly register with the IRS to comply with the
                    FATCA regulations (and FFI agreement, if applicable) or
                    comply with the FATCA Intergovernmental Agreements (IGA)
                    treaty as in effect in their jurisdictions. FFIs are
                    required to report the accounts identified to the Inland
                    Revenue Department of the Government of Dominica which will
                    forward this information to the Internal Revenue Service
                    (“IRS”) of the United States.
                  </p>
                  <p>
                    FATCA impacts on all financial and non-financial operating
                    companies receiving any U.S. source income, to include but
                    is not limited to receipts of dividends, royalties, interest
                    etc. There are no records of U.S. Treasury’s commitment to
                    any country of providing special exception from these
                    reporting requirements. All FFIs which keep U.S. person’s
                    accounts are obligated to utilize the following documents:
                  </p>
                  <ul>
                    <li>W-9 or W-8BEN Forms </li>
                    <li>
                      Written explanation regarding U.S. citizenship (in
                      instances of U.S. birth(s))
                    </li>
                    <li>
                      Non-U.S. passport or similar documentation establishing
                      foreign citizenship (in instances of U.S. birth(s))
                    </li>
                    <li>Document establishing non-US status</li>
                  </ul>
                </div>
              </Fade>
            </Grid>
          </Grid>

          <Grid container spacing={0}>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Fade left>
                <div className={styles.person_wrapper}>
                  <h2>WHO ARE U.S. PERSONS?</h2>
                  <p>
                    As per Notice 2011-34 U.S. status can be quantified as
                    follows:
                  </p>
                  <ul>
                    <li>
                      U.S. citizenship or lawful permanent resident (green card)
                      status;
                    </li>
                    <li>A U.S. birthplace;</li>
                    <li>
                      A U.S. residence address or a U.S. correspondence address
                      (including a U.S. P.O. box);
                    </li>
                    <li>
                      Standing instructions to transfer funds to an account
                      maintained in the United States, or directions regularly
                      received from a U.S. address;
                    </li>
                    <li>
                      An “in care of” address or a “hold mail” address that is
                      the sole address with respect to the client; or
                    </li>
                    <li>
                      A power of attorney or signatory authority granted to a
                      person with a U.S. address
                    </li>
                  </ul>
                  <p>
                    To remain compliant with all FATCA’s requirements
                    unconditionally as a FFI guided by FATCA’s regulations, Digi
                    Bank Corporation has registered with the IRS and it has been
                    assigned the Global Intermediary Identification Number
                    (GIIN): FNI99H.99999.SL.212.
                  </p>
                  <p className={styles.note}>
                    For access to the FATCA regulations and administrative
                    guidance related to FATCA and the Commonwealth of Dominica
                    and to learn about taxpayer obligations please visit the
                    Internal Revenue Service FATCA Page.{" "}
                    <a
                      href="https://www.treasury.gov/resource-center/tax-policy/treaties/Pages/FATCA.aspx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.treasury.gov/resource-center/tax-policy/treaties/Pages/FATCA.aspx
                    </a>
                  </p>
                </div>
              </Fade>
            </Grid>
            <Grid item lg={1} md={1} sm={12} xs={12}></Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Fade right>
                <div className={styles.buttonContainer}>
                  <button className={`${styles.button_default} `}>
                    <a
                      href={W8FORM}
                      className="hvr-sweep-to-right"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DOWNLOAD W8-BEN FORM
                    </a>
                  </button>
                  <button className={`${styles.button_default} `}>
                    <a
                      href={W8BENEFORM}
                      className="hvr-sweep-to-right"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DOWNLOAD W8-BEN-E FORM
                    </a>
                  </button>
                  <button className={`${styles.button_default} `}>
                    <a
                      href={W9FORM}
                      className="hvr-sweep-to-right"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DOWNLOAD W9 FORM
                    </a>
                  </button>
                </div>
              </Fade>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default FATCAPage
