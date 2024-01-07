// loaderActions.js
export const SET_LOADER = 'SET_LOADER'; // Correct action type

export const setLoader = (isLoading) => ({
  type: SET_LOADER,
  payload: isLoading,
});

export const sendOtp = (mobileNumber) => ({
  type: 'SEND_OTP_SUCCESS', // Correct action type
  payload: mobileNumber,
});

export const verifyOtp = (otp) => ({
  type: 'VERIFY_OTP_SUCCESS',
  payload: otp,
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const addProfile = (profile) => ({
  type: 'ADD_PROFILE',
  payload: profile,
});

export const getAllProfiles = (profiles) => ({
  type: 'GET_ALL_PROFILES',
  payload: profiles,
});




export const SEND_OTP_REQUEST = 'SEND_OTP_REQUEST'; // More descriptive type
export const SEND_OTP_SUCCESS = 'SEND_OTP_SUCCESS';
export const VERIFY_OTP_REQUEST = 'VERIFY_OTP_REQUEST'; // More descriptive type
export const VERIFY_OTP_SUCCESS = 'VERIFY_OTP_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const ADD_PROFILE = 'ADD_PROFILE';
export const GET_ALL_PROFILES = 'GET_ALL_PROFILES';

// ... (rest of the action creators)
