import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App'
import './i18nextConf'
import './styles/_index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <CssBaseline />
    <App />
  </>
)