import {combineReducers} from 'redux';
import {AuthReducer} from './authReducer';
import {ProfileReducer} from './profileReducer';
import {ErrorReducer} from './errorReducer';

export const rootReducer = combineReducers({
  AUTH_REDUCER: AuthReducer,
  PROFILE_REDUCER: ProfileReducer,
  ERROR_REDUCER: ErrorReducer,
});
