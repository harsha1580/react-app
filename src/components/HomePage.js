import React, { useEffect } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import AddProfile from '../components/home/AddProfile';
import ViewProfile from '../components/home/ViewProfile';
import '../style/AddProfile.css'
import { logout } from '../actions/loderAction';
import { useDispatch } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('LoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
    }
  });

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.removeItem('LoggedIn');
    navigate('/login');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      <header style={{ background: '#333', color: '#fff', padding: '10px', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
        <h2 style={{ flex: '1' }}>Welcome to Your Dashboard</h2>
        <button style={{ padding: '8px', cursor: 'pointer', marginLeft: 'auto' }} onClick={handleLogout}>Logout</button>
      </header>

      
      <aside style={{ width: '200px', background: '#f4f4f4', padding: '10px' }}>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li style={{ margin: '5px', cursor: 'pointer' }}>
            <Link to="/add-profile">Add Profile</Link>
          </li>
          <li style={{ margin: '5px', cursor: 'pointer' }}>
            <Link to="/view-profile">View Profile</Link>
          </li>
        </ul>
      </aside>

      
      <main style={{ flex: '1', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Routes>
          <Route path="/add-profile" element={<AddProfile />} />
          <Route path="/view-profile" element={<ViewProfile />} />
        </Routes>
      </main>

      
      <footer style={{ background: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
        <p>© React App 2024</p>
      </footer>
    </div>
  );
};

export default HomePage;
