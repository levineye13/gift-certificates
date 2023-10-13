import { combineReducers } from 'redux';
import { formReducer } from './form';
import { certificateReducer } from './certificate';

export const rootReducer = combineReducers({
  form: formReducer,
  certificate: certificateReducer,
});
