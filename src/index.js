import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import {store} from '../src/actions/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = createRoot(document.getElementById('root')); // Use createRoot

root.render(
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
);


  

// import React from 'react';
// import { createRoot } from 'react-dom';
// import { Provider } from 'react-redux';
// import App from './App';
// import {store} from '../src/actions/store';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const root = createRoot(document.getElementById('root')); 
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//       <ToastContainer />
//     </Provider>
//   </React.StrictMode>
// );
