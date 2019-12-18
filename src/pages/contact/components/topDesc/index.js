import React from "react"
import Fade from "react-reveal/Fade"
import styles from "./style.module.scss"

const TopDescPage = () => {
  return (
    <div className={`content ${styles.content}`}>
      <Fade left>
        <h1>
          You can always reach us. Please leave us a message using the below
          contact form.
        </h1>
      </Fade>
    </div>
  )
}

export default TopDescPage
