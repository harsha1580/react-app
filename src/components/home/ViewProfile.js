// components/home/ViewProfile.js
import React, { useEffect, useState } from 'react';
import '../../style/ViewProfile.css';

const ViewProfile = () => {
  const [userProfiles, setUserProfiles] = useState([]);

  useEffect(() => {
    // Fetch all profile data from localStorage
    const storedData = JSON.parse(localStorage.getItem('userData'));
    // Set all profiles to state
    if (storedData && storedData.length > 0) {
      setUserProfiles(storedData);
    }
  }, []);

  const handleEdit = (index) => {
    // Implement the logic for editing a user profile here
    console.log('Edit profile at index:', index);
  };

  const handleDelete = (index) => {
    // Implement the logic for deleting a user profile here
    console.log('Delete profile at index:', index);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>View Profile</h2>
      {userProfiles.length > 0 ? (
        <table className="profile-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userProfiles.map((userProfile, index) => (
              <tr key={index}>
                <td>{userProfile.firstName}</td>
                <td>{userProfile.lastName}</td>
                <td>{userProfile.email}</td>
                <td>
                  <button className='button' onClick={() => handleEdit(index)}>Edit</button>
                  <button className='button' onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No profiles available</p>
      )}
    </div>
  );
};

export default ViewProfile;
