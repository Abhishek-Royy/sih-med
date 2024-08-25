import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

import HomePage from "./pages/Homepage"
import Records from "./pages/Records"
import Blogspage from "./pages/Blogs"
import Seetings from "./pages/Settings"
import Authentication from "./pages/Login"
import Footer from './components/Footer'
import Notfound from './pages/Notfound'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<HomePage/>}/>
        <Route path='/records'  element={<Records/>}/>
        <Route path='/blogs'  element={<Blogspage/>}/>
        <Route path='/seetings'  element={<Seetings/>}/>
        <Route path='/auth'  element={<Authentication/>}/>


        <Route path='*'  element={<Notfound/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
