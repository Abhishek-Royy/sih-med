// import React, { useState } from 'react';
// import QRCode from "qrcode.react"

// const QRCodeGenerator = () => {
//   const [patientData, setPatientData] = useState({
//     name: '',
//     age: '',
//     gender: '',
//     address: '',
//     contact: '',
//     aadhaarId: '',
//     healthCardNumber: '',

//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPatientData({ ...patientData, [name]: value });
//   };

//   return (
//     <div>
//       <h2>Generate QR Code for Patient Data</h2>
//       <form>
//         <input type="text" name="name" placeholder="Name" onChange={handleChange} />
//         <input type="number" name="age" placeholder="Age" onChange={handleChange} />
//         <input type="text" name="gender" placeholder="Gender" onChange={handleChange} />
//         <input type="text" name="address" placeholder="Address" onChange={handleChange} />
//         <input type="text" name="contact" placeholder="Contact" onChange={handleChange} />
//         <input type="text" name="aadhaarId" placeholder="Aadhaar ID" onChange={handleChange} />
//         <input type="text" name="healthCardNumber" placeholder="Health Card Number" onChange={handleChange} />

//       </form>
//       <QRCode value={JSON.stringify(patientData)} size={256} />
//     </div>
//   );
// };

// export default QRCodeGenerator;

import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QrCode = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    gender: '',
    address: '',
    contact: '',
    aadhaarId: '',
    healthCardNumber: '',
  });

  const [showQRCode, setShowQRCode] = useState(false); // State to manage QR code display
  const [error, setError] = useState(''); // State to manage error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
    setError(''); // Clear error when input is changed
  };

  const handleGenerateQRCode = (e) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (Object.values(patientData).some(value => value === '')) {
      setError('Please fill all fields before generating the QR code.');
      return;
    }

    setShowQRCode(true); // Show QR code
  };

  return (
    <div>
      <h2>Generate QR Code for Patient Data</h2>
      <form onSubmit={handleGenerateQRCode}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={patientData.name}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          value={patientData.age}
          required
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          onChange={handleChange}
          value={patientData.gender}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          value={patientData.address}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          onChange={handleChange}
          value={patientData.contact}
          required
        />
        <input
          type="text"
          name="aadhaarId"
          placeholder="Aadhaar ID"
          onChange={handleChange}
          value={patientData.aadhaarId}
          required
        />
        <input
          type="text"
          name="healthCardNumber"
          placeholder="Health Card Number"
          onChange={handleChange}
          value={patientData.healthCardNumber}
          required
        />
        <button type="submit">Generate QR Code</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {showQRCode && (
        <div style={{ marginTop: '20px' }}>
          <QRCode value={JSON.stringify(patientData)} size={256} />
        </div>
      )}
    </div>
  );
};

export default QrCode;
