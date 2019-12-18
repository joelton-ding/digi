import React from 'react'
import Fade from 'react-reveal/Fade'

import styles from './style.module.scss'

const SecurityPage = () => { 
  return (
    <div id="security" className={styles.security}>
      <div className={`content ${styles.content}`}>
        <Fade left>
          <h1>Security</h1>
          <p>The Financial Service Unit of the Commonwealth of Dominica is the main financial regulator in the Island of Dominica. It is one of the most stringent financial authorities in the Caribbean and is quickly becoming a major participant in the offshore regulatory framework. The Financial Services Unit (FSU) of the Ministry of Finance is responsible for the supervision of banking and insurance activities, and for the facilitation and supervision of the offshore and international business activities in Dominica.</p>
          <p>In 2011, the FSU under section 7 of the Money Laundering Prevention Act. No. 8, became the Money Laundering Supervisory Authority and aims to ensure that every financial institution conducts a risk assessment, whereby policies, procedures and controls can be developed as to prevent/mitigate the ML/TF risks identified.</p>
          <p>Confidence and stability in the financial sector is critical for the development of the overall economy. This is of even greater importance in today's turbulent economic times and the role of the FSU, therefore, becomes even more significant.<br /><br /></p>
          <h1>Regulatory Authority</h1>
          <p>According to the objectives of the FSU as spelled out by the Section 4 of the FSU’s Act, 18 of 2008 (PDF 83.14KB) those objectives include:</p>
            <ul className={styles.regulatory_list}>
              <li>Maintain the public’s confidence in the financial system;</li>
              <li>Facilitate the deterrence of financial crimes;</li>
              <li>Supervise financial services licensees in accordance with legislation, regulations and codes;</li>
              <li>Ensure periodic evaluation of the legislative and regulatory framework in accordance with developments in the financial services sector;</li>
              <li>Promote best practices, mutual assistance and exchange of information by maintaining contact and forging relations with foreign regulatory authorities, international associations of regulatory authority bodies or groups relevant to its functions; and</li>
              <li>Facilitate the development of the financial services sector.</li>
            </ul>
        </Fade>
      </div>
    </div>
  )
}

export default SecurityPage