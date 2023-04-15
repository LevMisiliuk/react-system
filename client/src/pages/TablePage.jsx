import React from 'react'
import Header from 'components/header/Header'
import MainTable from 'components/mainTable/MainTable'

function TablePage() {
  return (
    <>
      <Header />
      <div className="container">
        <MainTable />
      </div>
    </>
  )
}

export default TablePage