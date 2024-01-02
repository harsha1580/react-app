// loaderActions.js
export const SET_LOADER = 'SET_LOADER';

export const setLoader = (isLoading) => {
  return {
    type: SET_LOADER,
    payload: isLoading,
  };
};
