import React from 'react'
import Header from 'components/header/Header'
import StepsPolicy from 'components/steps/StepsPolicy'

function StepsPage() {
  return (
    <>
      <Header />
      <div className="container-steps">
        <StepsPolicy />
      </div>
    </>
  )
}

export default StepsPage