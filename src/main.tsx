import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'

const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Router>
      <App />
    </Router>


)
