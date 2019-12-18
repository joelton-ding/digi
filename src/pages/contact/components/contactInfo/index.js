import React from "react"
import { Mail, MapPin, Phone } from "react-feather"
import Fade from "react-reveal/Fade"
import MapPage from "../map"

import styles from "./style.module.scss"

const ContactInfoPage = () => {
  return (
    <Fade right>
      <div className={styles.contact_info}>
        <h2>Otherwise feel free to contact us using any of the below:</h2>
        <dl className={styles.contact_list}>
          <dt>
            <Phone />
          </dt>
          <dd>+767-448-6518</dd>
          <dt>
            <Mail />
          </dt>
          <dd>
            <a href="mailto:info@dgbanking.com">info@dgbanking.com</a>
          </dd>
          <dt>
            <MapPin />
          </dt>
          <dd className={styles.address}>
            Digi Bank Corporation #36 Cork Street, <br />
            2nd Floor, P. O. Box 1293, Roseau, Dominica
            <br />
            (In case you are sending a courier please omit the P.O.Box)
          </dd>
        </dl>
        <div className={styles.map}>
          <MapPage />
        </div>
      </div>
    </Fade>
  )
}

export default ContactInfoPage
