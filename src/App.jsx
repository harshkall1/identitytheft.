import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Assistant from './pages/Assistant'
import Header from './components/Header'
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom'
import ReportIdentityTheft from './pages/Report'
import FraudulentLoanForm from './pages/Form'
import FraudForm from './pages/Form2'
import PersonalInfoForm from './pages/Form2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Assistant />} />
          <Route path="/report" element={<ReportIdentityTheft />} />
          <Route path="/report-form" element={<FraudulentLoanForm />} />
          <Route path="/report-form-2" element={<PersonalInfoForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
