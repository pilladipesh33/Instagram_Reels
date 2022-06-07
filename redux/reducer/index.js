import {combineReducers} from 'redux';
import { LOGOUT_SUCCESS } from '../action/Constant';
import AuthReducer from './AuthReducer';
import { PostReducer } from './PostReducer';



const appReducer = combineReducers({
  auth: AuthReducer,
  posts : PostReducer,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;