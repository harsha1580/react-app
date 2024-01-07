import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/SendOtp';
import HomePage from './components/HomePage';
import OTPVerification from './components/VerifyOtp';
import AddProfile from '././components/home/AddProfile';
import ViewProfile from './components/home/ViewProfile';
import AuthGuard from './components/AuthRoute';
import { Navigate } from 'react-router-dom';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/*" element={<Login />} />
//         <Route path="/otp-verification" element={<OTPVerification />} />
//         <Route path="/homePage" element={<HomePage />} />
//         <Route path="/add-profile" element={<AddProfile />} />
//         <Route path="/view-profile" element={<ViewProfile />} />
        
//       </Routes>
//     </Router>
//   );
// };

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/otp-verification"
          element={<AuthGuard><OTPVerification /></AuthGuard>}
        />
        <Route
          path="/homePage"
          element={<AuthGuard><HomePage /></AuthGuard>}
        />
        <Route
          path="/add-profile"
          element={<AuthGuard><AddProfile /></AuthGuard>}
        />
        <Route
          path="/view-profile"
          element={<AuthGuard><ViewProfile /></AuthGuard>}
        />
        <Route path="/*" element={<Navigate to="/login" replace />} /> 
      </Routes>
    </Router>
  );
};

export default App;




