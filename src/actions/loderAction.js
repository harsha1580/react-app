// loaderActions.js
export const SET_LOADER = 'SEND_OTP_SUCCESSS';

export const setLoader = (isLoading) => {
  return {
    type: SET_LOADER,
    payload: isLoading,
  };
};

export const sendOtp = (mobileNumber) => {
  return { 
    type: 'SEND_OTP_SUCCESSS' ,
    payload: mobileNumber
  }
};

export const verifyOtp = (otp) => {
  return { 
    type: 'VERIFY_OTP_SUCCESS',
    payload: otp 
  }
};

export const logout = () => {
  return { 
    type: 'LOGOUT' 
  };
};

