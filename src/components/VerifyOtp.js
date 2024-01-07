// OTPVerificationPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { verifyOtp,setLoader } from '../actions/loderAction';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import '../style/Login.css'

const OTPVerificationPage = ({ location }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleVerifyOtp = () => {
    if (validateOtp()) {
      setIsLoading(true);
      dispatch(setLoader(true));

      setTimeout(() => {
        setIsLoading(false);
        dispatch(setLoader(false));
          toast.success('OTP Verified Successfully');
          navigate('/homePage');
        
      }, 2000);
    }
  };

  const validateOtp = () => {
    // Simple validation for a 4-digit OTP
    const isValidOtp= /^\d{4}$/.test(otp)  
    if (isValidOtp && otp === '1234') {
      return true;
    } else {
      toast.error('Invalid OTP');
      return false;
    }
  };

  const mobileNumber = location?.state?.mobileNumber || '';


  return (
    <div  className='container' style={{ textAlign: 'center', marginTop: '50px', backgroundColor: '#f0f0f0', padding: '50px' }}>
      <h1>OTP Verification</h1>
      <p>Enter the OTP sent to mobile{mobileNumber}</p>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        style={{ padding: '10px', margin: '10px' }}
      />
      <button className='button'
        onClick={handleVerifyOtp}
        style={{ padding: '10px', margin: '10px', cursor: 'pointer' }}
        disabled={isLoading} 
      >
        {isLoading ? 'Verifying OTP...' : 'Verify OTP'}
      </button>
    </div>
  );
};

export default OTPVerificationPage;
