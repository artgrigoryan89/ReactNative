import {
  LOG_IN,
  LOG_IN_FB,
  LOG_OUT,
  CREATE_USER,
  LOG_IN_ERROR,
  LOG_IN_SUCCESS,
  REGISTER_SUCCESS
} from "../actions/auth";

const initialState = {
    user: null,
    visible: false
};

const authReducer = (state = initialState, action) => {
  const { payload, type } = action;
    switch (type) {
        case LOG_IN:
            return {
                ...state,
              errorMessage: ""
            };
        case LOG_IN_ERROR:
          return {
              ...state,
            errorMessage: payload.message,
            errorCode: payload.code,
          };
      case LOG_IN_SUCCESS:
        return {
          ...state,
          user: payload
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          user: payload
        };
        case LOG_IN_FB:
            return {
                ...state,
            };
        case LOG_OUT:
            return {
                ...state,
            };
        case CREATE_USER:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default authReducer;
