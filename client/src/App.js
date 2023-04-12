import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TablePage from 'pages/TablePage'
import StepsPage from 'pages/StepsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TablePage />} />
        <Route path="/steps" element={<StepsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App