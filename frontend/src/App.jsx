// //  THIS IS A STATIC TIME SET PRELOADER FUNCTION
// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import HomePage from "./pages/Homepage";
// import Aboutus from "./pages/Aboutus";
// import Blogspage from "./pages/Blogs";
// import Solutions from "./pages/Solutions";
// import PatientLogin from "./pages/PatientLogin";
// import HospitalLogin from "./pages/HospitalLogin";
// import Footer from "./components/Footer";
// import Notfound from "./pages/Notfound";
// import EnterOTP from "./pages/Otp";
// import PatientHomeUi from "./pages/PatientHomeUi";
// import Preloader from "./layout/Preloader";

// // hospital side
// import Sidebar from "./hospitalSide/common/Sidebar";
// import HospitalApp from "./hospitalSide/common/HospitalApp";
// import Opd from "./hospitalSide/common/pages/Opd";
// import BedManagement from "./hospitalSide/common/pages/BedManagement";
// import DepartmentManagement from "./hospitalSide/common/pages/DepartmentManagement";
// import DoctorSchedule from "./hospitalSide/common/pages/DoctorSchedule";
// import DoctorSummery from "./hospitalSide/common/pages/DoctorSummery";
// import InventoryManagement from "./hospitalSide/common/pages/InventoryManagement";
// import PatientManagement from "./hospitalSide/common/pages/PatientManagement";
// import PharmacyManagement from "./hospitalSide/common/pages/PharmacyManagement";
// import Test from "./hospitalSide/common/pages/Test";

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2500);

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return <Preloader />;
//   }

//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/aboutus" element={<Aboutus />} />
//           <Route path="/blogs" element={<Blogspage />} />
//           <Route path="/solutions" element={<Solutions />} />
//           <Route path="/auth/patient-login" element={<PatientLogin />} />
//           <Route path="/auth/hospital-login" element={<HospitalLogin />} />
//           <Route path="/auth/patient-login/otp" element={<EnterOTP />} />
//           <Route path="/patienthomeui-profile" element={<PatientHomeUi />} />

//           {/* HOSPITAL SIDE */}
//           <Sidebar/>
//           <Route path="/hospital-app-side" element={<HospitalApp />} />
//           <Route
//             path="/hospital-app-side/bed-management"
//             element={<BedManagement />}
//           />
//           <Route path="/hospital-app-side/test" element={<Test />} />
//           <Route path="/hospital-app-side/opd" element={<Opd />} />
//           <Route
//             path="/hospital-app-side/doctor-schedule"
//             element={<DoctorSchedule />}
//           />
//           <Route
//             path="/hospital-app-side/department-management"
//             element={<DepartmentManagement />}
//           />
//           <Route
//             path="/hospital-app-side/doctor-summery"
//             element={<DoctorSummery />}
//           />
//           <Route
//             path="/hospital-app-side/inventory-management"
//             element={<InventoryManagement />}
//           />
//           <Route
//             path="/hospital-app-side/patient-management"
//             element={<PatientManagement />}
//           />
//           <Route
//             path="/hospital-app-side/pharmacy-management"
//             element={<PharmacyManagement />}
//           />

//           <Route path="*" element={<Notfound />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
import Blogspage from "./pages/Blogs";
import Solutions from "./pages/Solutions";
import PatientLogin from "./pages/PatientLogin";
import HospitalLogin from "./pages/HospitalLogin";
import Footer from "./components/Footer";
import Notfound from "./pages/Notfound";
import EnterOTP from "./pages/Otp";
import PatientHomeUi from "./pages/PatientHomeUi";
import Preloader from "./layout/Preloader";

// hospital side
import Sidebar from "./hospitalSide/common/Sidebar";
import HospitalApp from "./hospitalSide/common/HospitalApp";
import Opd from "./hospitalSide/common/pages/Opd";
import BedManagement from "./hospitalSide/common/pages/BedManagement";
import DepartmentManagement from "./hospitalSide/common/pages/DepartmentManagement";
import DoctorSchedule from "./hospitalSide/common/pages/DoctorSchedule";
import DoctorSummery from "./hospitalSide/common/pages/DoctorSummery";
import InventoryManagement from "./hospitalSide/common/pages/InventoryManagement";
import PatientManagement from "./hospitalSide/common/pages/PatientManagement";
import Test from "./hospitalSide/common/pages/Test";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const location = useLocation(); // Get the current location

  // Check if the current path is under '/hospital-app-side'
  const isHospitalSide = location.pathname.startsWith("/hospital-app-side");

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      {/* Show Navbar only when not in hospital side pages */}
      {!isHospitalSide && <Navbar />}
      <div className="app-container flex min-h-screen">
        {/* Show Sidebar only on hospital side pages */}
        {isHospitalSide && <Sidebar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/blogs" element={<Blogspage />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/auth/patient-login" element={<PatientLogin />} />
          <Route path="/auth/hospital-login" element={<HospitalLogin />} />
          <Route path="/auth/patient-login/otp" element={<EnterOTP />} />
          <Route path="/patienthomeui-profile" element={<PatientHomeUi />} />

          {/* HOSPITAL SIDE */}
          <Route path="/hospital-app-side" element={<HospitalApp />} />
          <Route
            path="/hospital-app-side/bed-management"
            element={<BedManagement />}
          />
          <Route path="/hospital-app-side/test" element={<Test />} />
          <Route path="/hospital-app-side/opd" element={<Opd />} />
          <Route
            path="/hospital-app-side/doctor-schedule"
            element={<DoctorSchedule />}
          />
          <Route
            path="/hospital-app-side/department-management"
            element={<DepartmentManagement />}
          />
          <Route
            path="/hospital-app-side/doctor-summery"
            element={<DoctorSummery />}
          />
          <Route
            path="/hospital-app-side/inventory-management"
            element={<InventoryManagement />}
          />
          <Route
            path="/hospital-app-side/patient-management"
            element={<PatientManagement />}
          />

          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
      {/* Show Footer only when not in hospital side pages */}
      {!isHospitalSide && <Footer />}
    </>
  );
}

function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default RootApp;
