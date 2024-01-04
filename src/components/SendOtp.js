// LoginPage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sendOtp } from '../actions/loderAction';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import '../style/Login.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSendOtp = () => {
    // Simulate API call for mobile number validation
    if (validateMobileNumber()) {
      dispatch(sendOtp(true));

      setTimeout(() => {
        dispatch(sendOtp(false));
        sessionStorage.setItem("LoggedIn",true)
        // Simulate sending OTP to the mobile number
        navigate('/otp-verification', { state: { mobileNumber, otp: '1234' } });
      }, 2000);
    }
  };

  const validateMobileNumber = () => {
    // Simple validation for a 10-digit mobile number
    const isValidMobile = /^\d{10}$/.test(mobileNumber);
    if (isValidMobile || mobileNumber === '9926452835') {
      toast.success('send otp on mobile');
      return true;
    } else {
      toast.error('Invalid Mobile Number'); // Use toast to display an error message
      return false;
    }
  };
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('LoggedIn');
    if (isLoggedIn) {
      navigate('/otp-verification');
    }
  }, [navigate]);

  return (
    <div className="container" style={{ textAlign: 'center', marginTop: '50px', backgroundColor: '#f0f0f0', padding: '60px' }}>
      <h1 className="h1">Login </h1>
      <p>Enter the mobile number</p>
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        className="input"
        style={{ padding: '10px', margin: '5px' }}
      />
      <button
        onClick={handleSendOtp}
        className="button"
        style={{ padding: '8px', margin: '15px', cursor: 'pointer' }}
      >
        Send OTP
      </button>
    </div>
  );
};

export default LoginPage;
