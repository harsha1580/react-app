// OTPVerificationPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoader } from '../actions/loderAction';

const OTPVerificationPage = ({ location }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState('');

  const handleVerifyOtp = () => {
    // Simulate API call for OTP verification
    if (validateOtp()) {
      dispatch(setLoader(true));

      setTimeout(() => {
        dispatch(setLoader(false));
        alert('OTP Verified Successfully');
        navigate('/home');
      }, 2000);
    }
  };

  const validateOtp = () => {
    // Simple validation for a 4-digit OTP
    if (/^\d{4}$/.test(otp)) {
      return true;
    } else {
      alert('Invalid OTP');
      return false;
    }
  };

  const mobileNumber = location?.state?.mobileNumber || '';


  return (
    <div style={{ textAlign: 'center', marginTop: '50px', backgroundColor: '#f0f0f0', padding: '20px' }}>
      <h1>OTP Verification</h1>
      <p>Enter the OTP sent to {mobileNumber}</p>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        style={{ padding: '10px', margin: '10px' }}
      />
      <button
        onClick={handleVerifyOtp}
        style={{ padding: '10px', margin: '10px', cursor: 'pointer' }}
      >
        Verify OTP
      </button>
    </div>
  );
};

export default OTPVerificationPage;
