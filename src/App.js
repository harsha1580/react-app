// App.js
import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import LoginPage from './components/SendOtp';
import HomePage from './components/HomePage';
import OTPVerificationPage from './components/VerifyOtp';

const App = () => {
  return (
    <Router>
       <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/otp-verification" element={<OTPVerificationPage />} />
        <Route path="/home" element={<HomePage/>} />
        </Routes>
    </Router>
  );
};

export default App;
