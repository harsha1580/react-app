// loaderReducer.js
import { SET_LOADER } from './loderAction';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_OTP_SUCCESS':
    case 'VERIFY_OTP_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        isLoading: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
      };  
    default:
      return state;
  }
};

export default loaderReducer;
