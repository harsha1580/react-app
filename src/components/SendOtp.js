// LoginPage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sendOtp, setLoader } from '../actions/loderAction'; // Assuming setLoader is an action
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import '../style/Login.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mobileNumber, setMobileNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOtp = async () => {
    // Simulate API call for mobile number validation
    if (validateMobileNumber()) {
      setIsLoading(true); // Show loader
      dispatch(setLoader(true)); // Show loader

      try {
        await dispatch(sendOtp(true)); // Simulate sending OTP to the mobile number

        setTimeout(() => {
          setIsLoading(false); // Hide loader
          dispatch(setLoader(false)); // Hide loader
          sessionStorage.setItem("LoggedIn", true);
          navigate('/otp-verification', { state: { mobileNumber, otp: '1234' } });
        }, 2000);
      } catch (error) {
        setIsLoading(false); // Hide loader in case of an error
        dispatch(setLoader(false)); // Hide loader in case of an error
        console.error('Error sending OTP:', error);
        toast.error('Error sending OTP. Please try again.'); // Display an error message
      }
    }
  };

  const validateMobileNumber = () => {
    // Simple validation for a 10-digit mobile number
    const isValidMobile = /^\d{10}$/.test(mobileNumber);
    if (isValidMobile || mobileNumber === '9926452835') {
      toast.success('Send OTP on mobile');
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
       disabled={isLoading} // Disable the button while loading
      >
        {isLoading ? 'Sending OTP...' : 'Send OTP'}
      </button>
    </div>
  );
};

export default LoginPage;

