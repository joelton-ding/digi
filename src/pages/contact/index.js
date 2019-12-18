import React from 'react'
import Grid from '@material-ui/core/Grid'
import SubBanner from '../../components/subBanner/'
import Layout from '../../components/Layout/layout'
import SEO from '../../components/Layout/seo/seo'
import TopDescPage from './components/topDesc'
import ContactInfoPage from './components/contactInfo'
import ContactFormPage from './components/contactForm'

// import TestFormPage from './components/testForm'
import styles from './style.module.scss'

import imageContact from '../../images/contact/contact-bg.png'

const ContactPage = () => { 
  // getUser = (e) => { 
  //   e.preventDefault()
  //   const user = e.target.elements.username.value
  //   console.log('user========', user)
  // }

    return(
      <Layout>
        <SEO title="Contact Us" />
        <SubBanner tag='contact' image={imageContact} />
        {/* <TestFormPage getUser={this.getUser} /> */}
        <TopDescPage />
        <div className={`${styles.content} content`}>
          <Grid className={styles.contact_wrapper} container spacing={3}>
            <Grid item lg={6} xs={12}>
              <ContactFormPage />
            </Grid>
            <Grid item lg={1} xs={12}></Grid>
            <Grid item lg={5} xs={12}>
              <ContactInfoPage />
            </Grid>
          </Grid>
        </div>
      </Layout>
    )
}

// const ContactPage = () => {

//   getUser = (e) => { 
//     e.preventDefault()
//     const user = e.target.elements.username.value
//     console.log('user========', user)
//   }

//   return(
//     <Layout>
//       <SEO title="Contact Us" />
//       <SubBanner tag='contact' image={imageContact} />
//       <TestFormPage getUser={this.getUser} />
//       <TopDescPage />
//       <div className={`${styles.content} content`}>
//         <Grid className={styles.contact_wrapper} container spacing={3}>
//           <Grid item lg={6} xs={12}>
//             <ContactFormPage />
//           </Grid>
//           <Grid item lg={1} xs={12}></Grid>
//           <Grid item lg={5} xs={12}>
//             <ContactInfoPage />
//           </Grid>
//         </Grid>
//       </div>
//     </Layout>
//   )
// }

export default ContactPage