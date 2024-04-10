import React from 'react'
import ReactDOM from 'react-dom/client'
import Size from './Size'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Size />} />
        <Route path="/app(/:x)(/:y)" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
