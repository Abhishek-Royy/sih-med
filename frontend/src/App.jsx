// //  THIS IS A STATIC TIME SET PRELOADER FUNCTION
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Homepage';
import Aboutus from './pages/Aboutus';
import Blogspage from './pages/Blogs';
import Solutions from './pages/Solutions';
import PatientLogin from './pages/PatientLogin';
import HospitalLogin from './pages/HospitalLogin';
import Footer from './components/Footer';
import Notfound from './pages/Notfound';
import EnterOTP from './pages/Otp';
import PatientHomeUi from './pages/PatientHomeUi';
import Preloader from './layout/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/blogs' element={<Blogspage />} />
          <Route path='/solutions' element={<Solutions />} />
          <Route path='/auth/patient-login' element={<PatientLogin />} />
          <Route path='/auth/hospital-login' element={<HospitalLogin />} />
          <Route path='/auth/patient-login/otp' element={<EnterOTP />} />
          <Route path='/patienthomeui-profile' element={<PatientHomeUi />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;



//    THIS IS A DYNAMIC CONTENT LOAD FUNCTION ON THE BASIS OF MY CONTENT LOAD.
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HomePage from './pages/Homepage';
// import Aboutus from './pages/Aboutus';
// import Blogspage from './pages/Blogs';
// import Solutions from './pages/Solutions';
// import PatientLogin from './pages/PatientLogin';
// import HospitalLogin from './pages/HospitalLogin';
// import Footer from './components/Footer';
// import Notfound from './pages/Notfound';
// import EnterOTP from './pages/Otp';
// import PatientHomeUi from './pages/PatientHomeUi';
// import Preloader from './layout/Preloader';

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const handleLoad = () => {
//       setLoading(false);
//     };

//     window.addEventListener('load', handleLoad);


//     return () => {
//       window.removeEventListener('load', handleLoad);
//     };
//   }, []);

//   if (loading) {
//     return <Preloader />;
//   }

//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<HomePage />} />
//           <Route path='/aboutus' element={<Aboutus />} />
//           <Route path='/blogs' element={<Blogspage />} />
//           <Route path='/solutions' element={<Solutions />} />
//           <Route path='/auth/patient-login' element={<PatientLogin />} />
//           <Route path='/auth/hospital-login' element={<HospitalLogin />} />
//           <Route path='/auth/patient-login/otp' element={<EnterOTP />} />
//           <Route path='/patienthomeui-profile' element={<PatientHomeUi />} />
//           <Route path='*' element={<Notfound />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
