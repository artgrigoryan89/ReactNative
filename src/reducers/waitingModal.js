import {SHOW_WAITING_MODAL, HIDE_WAITING_MODAL} from '../actions/waitingModal';

const INITIAL_STATE = {
    isModalVisible: false
};

const modalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_WAITING_MODAL:
            return {
                ...state,
                isModalVisible: true
            };
        case HIDE_WAITING_MODAL:
            return {
                ...state,
                isModalVisible: false
            };
        default:
            return state;
    }
}

export default modalReducer;