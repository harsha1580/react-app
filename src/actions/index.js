// reducers/index.js
import { combineReducers } from 'redux';
import loaderReducer from './loderReducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
});

export default rootReducer;
