export const LOG_IN = 'LOG_IN';
export const LOG_IN_ERROR = 'LOG_IN_ERROR';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FB = 'LOG_IN_FB';
export const LOG_IN_GOOGLE = 'LOG_IN_GOOGLE';
export const LOG_OUT = 'LOG_OUT';
export const CREATE_USER = 'CREATE_USER';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS ='REGISTER_SUCCESS';

export const createUser = (user) => {
    return {
        type: CREATE_USER,
        payload: user
    };
};

export const logIn = (user) => {
    return {
        type: LOG_IN,
        payload: user
    };
};

export const logInError = (message, code) => {
  return {
    type: LOG_IN_ERROR,
    payload: {
      message,
      code
    }
  };
};

export const logInSuccess = (user) => {
  return {
    type: LOG_IN_SUCCESS,
    payload: user
  }
}


export const registerError = (message, code) => {
  return {
    type: REGISTER_ERROR,
    payload: {
      message,
      code
    }
  };
};

export const registerSuccess = (user) => {
  return {
    type: REGISTER_SUCCESS,
    payload: user
  }
}


export const logInWithFb = () => {
    return {
        type: LOG_IN_FB
    }
}

export const loginWithGoogle = () => {
  return {
      type: LOG_IN_GOOGLE
  }
}

export const logOut = () => {
    return {
        type: LOG_OUT
    };
};
