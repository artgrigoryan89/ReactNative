import {ADD_ITEM_FIREBASE, ADD_ITEM_REDUX, REMOVE_ITEM_FIREBASE, REMOVE_ITEM_REDUX, CHANGE_BASE, GET_DATA, UPDATE_DATA} from '../actions/list';

const INITIAL_STATE = {
    data: [],
    firebaseData: {},
    isFirebase: false,
};

const listReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM_FIREBASE:
            return {
                ...state,
            };
      case ADD_ITEM_REDUX:
            return {
              ...state,
              data: action.payload
            };
        case REMOVE_ITEM_FIREBASE:
            return {
                ...state,
            };
        case REMOVE_ITEM_REDUX:
          const list = state.data.filter(elem => elem !== action.payload);
            return {
                ...state,
              data: list
            };
        case CHANGE_BASE:
            return {
              ...state,
              isFirebase: action.payload
          };
        case GET_DATA:
            return {
                ...state,
            };
        case UPDATE_DATA:
            return {
                ...state,
              firebaseData: action.payload
            };
        default:
            return state;
    }
}

export default listReducer;
