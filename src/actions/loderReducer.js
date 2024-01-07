import {
  SET_LOADER,
  SEND_OTP_SUCCESS,
  VERIFY_OTP_SUCCESS,
  LOGOUT,
  ADD_PROFILE,
  GET_ALL_PROFILES,
} from "./loderAction";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  profiles: [],
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SEND_OTP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,

      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    case ADD_PROFILE:
      return {
        ...state,
        profiles: [...state.profiles, action.payload],
      };
    case GET_ALL_PROFILES:
      return {
        ...state,
        profiles: action.payload,
      };
    default:
      return state;
  }
};

export default loaderReducer;
