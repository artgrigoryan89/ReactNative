import {ADD_ITEM_FIREBASE, ADD_ITEM, REMOVE_ITEM_FIREBASE, REMOVE_ITEM, GET_DATA, UPDATE_DATA} from '../actions/list';

const INITIAL_STATE = {
    data: {},
    firebaseData: {}
};

const listReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM_FIREBASE:
            return {
                ...state,
            };
        case ADD_ITEM:
            return {
              ...state,
            };
        case REMOVE_ITEM_FIREBASE:
            return {
                ...state,
            };
        case REMOVE_ITEM:
            return {
                ...state,
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
