import React from 'react'
import Header from 'components/header/Header'
import Sidebar from 'components/sidebar/Sidebar'
import StepsPolicy from 'components/steps/StepsPolicy'

function StepsPage() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="container">
        <StepsPolicy />
      </div>
    </>
  )
}

export default StepsPage