// import React, { useEffect } from 'react';
// import '../../style/ViewProfile.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllProfiles } from '../../actions/loderAction';

// const ViewProfile = () => {
//   const userProfiles = useSelector((state) => state.loader.profiles) || []; // Use empty array as a fallback
//   const dispatch = useDispatch();
//   // console.log('Data is stored in Redux:', userProfiles);
//   if (userProfiles.length > 0) {
//     // Data is present in Redux
//     console.log('Data is stored in Redux:', userProfiles);
//   } else {
//     // Data is not present in Redux
//     console.log('Data is not stored in Redux');
//   }

//   useEffect(() => {
//     dispatch(getAllProfiles(userProfiles));
//   }, [dispatch]);

//   return (
//     <div>
//       <h2 style={{ textAlign: 'center' }}>View Profile</h2>
//       {userProfiles?.length > 0 ? ( // Use optional chaining here
//         <table className="profile-table">
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {userProfiles.map((userProfile, index) => (
//               <tr key={index}>
//                 <td>{userProfile.firstName}</td>
//                 <td>{userProfile.lastName}</td>
//                 <td>{userProfile.email}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No profiles available</p>
//       )}
//     </div>
//   );
// };

// export default ViewProfile;




import React, { useEffect } from 'react';
import '../../style/ViewProfile.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProfiles } from '../../actions/loderAction';

const ViewProfile = () => {
  const userProfiles = useSelector((state) => state.loader.profiles) || []; // Use empty array as a fallback
  //  const dispatch=useDispatch()
  //   useEffect(() => {
  //   dispatch(getAllProfiles(userProfiles));
  // }, [dispatch]);
return (
    <div>
      <h2 style={{ textAlign: 'center' }}>View Profile</h2>
      {userProfiles.length === 0 ? ( 
       <p>No profiles available</p>
      ) : (
        <table className="profile-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {userProfiles.map((userProfile, index) => (
              <tr key={index}>
                <td>{userProfile.firstName}</td>
                <td>{userProfile.lastName}</td>
                <td>{userProfile.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewProfile;










