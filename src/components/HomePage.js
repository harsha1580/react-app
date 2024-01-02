// HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ background: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
        <h2>Welcome to Your Dashboard</h2>
        <button style={{ padding: '8px', cursor: 'pointer' }}>Logout</button>
      </header>

      {/* Sidebar */}
      <aside style={{ width: '200px', background: '#f4f4f4', padding: '10px' }}>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li style={{ margin: '5px', cursor: 'pointer' }}>View Profile</li>
          <li style={{ margin: '5px', cursor: 'pointer' }}>Add Profile</li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: '1', padding: '20px' }}>
        <h3>Main Content Area</h3>
        {/* You can add components like ViewProfile and AddProfile here */}
      </main>

      {/* Footer (optional) */}
      <footer style={{ background: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
        <p>© 2024 Your App Name</p>
      </footer>
    </div>
  );
};

export default HomePage;
