import React from 'react'
import SubBanner from '../../components/subBanner'
import Layout from '../../components/Layout/layout'
import SEO from '../../components/Layout/seo/seo'

import FormApplicationPage from './component/formApplication/index'


import imagePersonalAccountApplication from '../../images/personalAccountApp/personal-account-application-bg.png'


const PersonalAccountApplicationPage = () => {
  return(
    <Layout>
      <SEO title="Personal Account Application" />
      <SubBanner tag='personal-account-application' image={imagePersonalAccountApplication} />
      <FormApplicationPage />
    </Layout>
  )
}

export default PersonalAccountApplicationPage