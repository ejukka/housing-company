import UserTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case UserTypes.SIGN_iN_START:
    case UserTypes.SIGN_OUT_START:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserTypes.SIGN_iN_SUCCESS:
    case UserTypes.USER_IS_LOGGED_IN:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserTypes.SIGN_iN_FAILURE:
    case UserTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        currentUser: null,
        error: action.payload
      };
    case UserTypes.SIGN_OUT_SUCCESS:
    case UserTypes.USER_IS_NOT_LOGGED_IN:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserTypes.CHECK_IS_USER_LOGGED_IN: {
      return {
        ...state,
        currentUser: state.currentUser,
        error: null
      };
    }
    default:
      return state;
  }
};

export default userReducer;
