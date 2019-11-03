import * as actions from '../constants/app';

const initialState = {
  user: null,
  accessToken: null,
  errors: { SignIn: null },
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.APP_SIGN_IN_SUCCESS:
      return { ...state, user: action.user, accessToken: action.accessToken };
    case actions.APP_SIGN_IN_ERROR:
      return { ...state, errors: { SignIn: action.error } };
    case actions.APP_LOG_OUT_REQUEST:
      return initialState;
    default:
      return state;
  }
};

export default AppReducer;
