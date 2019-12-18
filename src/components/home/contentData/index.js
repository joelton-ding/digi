import React from 'react'
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade';

import styles from './style.module.scss'

import RegisterOnlineBanking from '../../../images/register-online-banking.svg'
import LoginSessionForDelegates from '../../../images/login-session-for-delegates.svg'
import AccessToReviewYourCreditCard from '../../../images/access-to-review-your-creditCard.svg'

const ContentData = () => {
  return(
    <div className={styles.home_middle}>
        <div className={styles.inner}>
        <Fade left>
         
          <Link className={`hvr-float-shadow ${styles.hvr_float_shadow}`} to="/">
          <div className={styles.box}>
              
              <img src={RegisterOnlineBanking} alt="Registration Online Banking" />
              <div className={styles.title}>
                Registration<br />Online Banking
              </div>
              </div>
        
          </Link>
     
        </Fade>
        
        <Fade left>
        <Link className={`hvr-float-shadow ${styles.hvr_float_shadow}`} to="/">
          <div className={styles.box}>
            <img src={LoginSessionForDelegates} alt="Login Session for Delegates" />
            <div className={styles.title}>
            Login Session<br />for Delegates
            </div>
            </div>
            </Link>
          </Fade>
        <Fade left>
        <Link className={`hvr-float-shadow ${styles.hvr_float_shadow}`} to="/">
          <div className={styles.box}>
            <img src={AccessToReviewYourCreditCard} alt="Access to review your CreditCard" />
            <div className={styles.title}>
            Access to review<br /> your CreditCard
            </div>
            </div>
            </Link>
          </Fade>
        </div>
      </div>
  )
}

export default ContentData