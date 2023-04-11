import React from 'react'
import Header from 'components/header/Header'
import Sidebar from 'components/sidebar/Sidebar'
import MainTable from 'components/mainTable/MainTable'

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="container">
        <MainTable />
      </div>
    </>
  )
}

export default App