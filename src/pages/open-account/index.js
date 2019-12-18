import React from 'react'
import SubBanner from '../../components/subBanner'
import Layout from '../../components/Layout/layout'
import SEO from '../../components/Layout/seo/seo'

import RegisterPage from './component/register'
import TabsPage from './component/tabs'

import imageRegisterBg from '../../images/openAccont/register-bg.png'

const OpenAccountPage = () => { 
  return (
    <Layout>
      <SEO title="Register" />
      <SubBanner tag='register' image={imageRegisterBg} />
      <RegisterPage />
      <TabsPage />
    </Layout>
  )
}

export default OpenAccountPage