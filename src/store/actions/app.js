import * as actions from '../constants/app';

export const signIn = (user) => ({
  type: actions.APP_SIGN_IN_REQUEST,
  user,
});

export const logOut = () => ({
  type: actions.APP_LOG_OUT_REQUEST,
});
