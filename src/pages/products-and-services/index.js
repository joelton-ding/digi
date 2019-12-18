import React from "react"
import SubBanner from "../../components/subBanner"
import Layout from "../../components/Layout/layout"
import SEO from "../../components/Layout/seo/seo"

import MulticurrencyAccountsPage from "./components/multicurrencyAccounts"
import BankCardsPage from "./components/bankCards"
import ForexPage from "./components/forex"
import PayrollPage from "./components/payroll"
import WealthManagementPage from "./components/wealthManagement"
import TimeDepositsPage from "./components/timeDeposits"

import imageProductAndServices from "../../images/productAndServices.png"

const ProductsAndServicesPage = () => {
  return (
    <Layout>
      <SEO title="Product &amp; Services" />
      <SubBanner tag="products-and-services" image={imageProductAndServices} />
      <MulticurrencyAccountsPage />
      <BankCardsPage />
      <ForexPage />
      <PayrollPage />
      <WealthManagementPage />
      <TimeDepositsPage />
    </Layout>
  )
}

export default ProductsAndServicesPage
