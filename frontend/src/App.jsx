import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

import HomePage from "./pages/Homepage"
import Aboutus from "./pages/Aboutus"
import Blogspage from "./pages/Blogs"
import Solutions from "./pages/Solutions"
import PatientLogin from './pages/PatientLogin'
import HospitalLogin from './pages/HospitalLogin'
import Footer from './components/Footer'
import Notfound from './pages/Notfound'
import EnterOTP from './pages/Otp'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<HomePage/>}/>
        <Route path='/aboutus'  element={<Aboutus/>}/>
        <Route path='/blogs'  element={<Blogspage/>}/>
        <Route path='/solutions'  element={<Solutions/>}/>
        <Route path='/auth/patient-login'  element={<PatientLogin/>}/>
        <Route path='/auth/hospital-login'  element={<HospitalLogin/>}/>


        <Route path='/auth/patient-login/otp'  element={<EnterOTP/>}/>
        


        <Route path='*'  element={<Notfound/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
