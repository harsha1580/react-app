import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/SendOtp';
import HomePage from './components/HomePage';
import OTPVerification from './components/VerifyOtp';
import AddProfile from '././components/home/AddProfile';
import ViewProfile from './components/home/ViewProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/add-profile" element={<AddProfile />} />
        <Route path="/view-profile" element={<ViewProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
