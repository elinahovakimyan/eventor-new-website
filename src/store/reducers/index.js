import { combineReducers } from 'redux';

import AppReducer from './app';

export const combinedReducers = combineReducers({
  app: AppReducer,
});
