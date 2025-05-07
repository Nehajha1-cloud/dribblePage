import React from 'react'
import Header from './Header.jsx'
import ManufacturingPage from './ManufacturingPage.jsx'
import ManufacturingServices from './ManufacturingServices.jsx'
import PricingPlans from './PricingPlans.jsx'
import IntegrationPage from './IntegrationPage.jsx'
import Footer from './Footer.jsx'

const App = () => {
  return (
    <div>
      <Header />
      <ManufacturingPage />
      <ManufacturingServices />
      <PricingPlans />
      <IntegrationPage />
      <Footer />
    </div>
  )
}

export default App

