import UserTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case UserTypes.SIGN_iN_START:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserTypes.SIGN_iN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserTypes.SIGN_iN_FAILURE:
      return {
        ...state,
        currentUser: null,
        error: action.payload
      };
    case UserTypes.CHECK_IS_USER_LOGGED_IN: {
      return state;
    }
    default:
      return state;
  }
};

export default userReducer;
