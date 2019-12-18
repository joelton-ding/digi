import React from 'react'
// import { Link } from 'gatsby'
// import { ArrowRight } from 'react-feather'
import Fade from 'react-reveal/Fade'

import styles from './style.module.scss'

const HomeBanner = () => {
  return(
    <div className={styles.main_banner}>
      <div className={styles.inner}>
        <div className={styles.detail_wrapper}>
          <div className={styles.inner}>
            <Fade left>
              <h1>Always 
              With You, 
              Wherever 
              You Go!</h1>
              {/* <p className={styles.text_output}>
                “Enjoy an easy and rewarding banking experience” 
                We offering personalized and timely service focused on building lasting relationships to help customers reach their financial goals.</p>
              <button className="hvr-sweep-to-right"><Link to="/"><ArrowRight /> Get Started Today</Link></button> */}
              </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner