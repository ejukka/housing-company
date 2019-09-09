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
        currentUser: null,
        error: null
      };
    case UserTypes.SIGN_iN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
