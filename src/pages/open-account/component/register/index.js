import React from 'react'
import Fade from 'react-reveal/Fade'
import styles from './style.module.scss'

const RegisterPage = () => { 
  return (
    <Fade left>
      <div className={`content ${styles.content}`}>
        <h2>In order to open an account in Digi Bank we are requesting that you fill out the application form. Once you have filled out the form, you will be required to email the form and documentation to us. The original notarized documentation has to be submitted to the office via courier.</h2>
        <h2>Shall you have any question please feel free to contact us.</h2>
      </div>
    </Fade>
  )
}

export default RegisterPage