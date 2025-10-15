import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import CloudConsulting from './pages/CloudConsulting.jsx'
import Cybersecurity from './pages/Cybersecurity.jsx'
import Salesforce from './pages/Salesforce.jsx'
import BusinessApplications from './pages/BusinessApplications.jsx'
import HumanCapital from './pages/HumanCapital.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cloud-consulting" element={<CloudConsulting />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/salesforce" element={<Salesforce />} />
        <Route path="/business-applications" element={<BusinessApplications />} />
        <Route path="/human-capital" element={<HumanCapital />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
