// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoader } from '../actions/loderAction';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSendOtp = () => {
    // Simulate API call for mobile number validation
    if (validateMobileNumber()) {
      dispatch(setLoader(true));

      setTimeout(() => {
        dispatch(setLoader(false));
        // Simulate sending OTP to the mobile number
        navigate('/otp-verification', { state: { mobileNumber } });
      }, 2000);
    }
  };

  const validateMobileNumber = () => {
    // Simple validation for a 10-digit mobile number
    if (/^\d{10}$/.test(mobileNumber)) {
      return true;
    } else {
      alert('Invalid Mobile Number');
      return false;
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', backgroundColor: '#f0f0f0', padding: '20px' }}>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        style={{ padding: '10px', margin: '10px' }}
      />
      <button
        onClick={handleSendOtp}
        style={{ padding: '10px', margin: '10px', cursor: 'pointer' }}
      >
        Send OTP
      </button>
    </div>
  );
};

export default LoginPage;

