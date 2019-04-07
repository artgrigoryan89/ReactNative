export const ADD_ITEM_FIREBASE = 'ADD_ITEM_FIREBASE';
export const ADD_ITEM_REDUX = 'ADD_ITEM_REDUX';
export const REMOVE_ITEM_FIREBASE = 'REMOVE_ITEM_FIREBASE';
export const REMOVE_ITEM_REDUX = 'REMOVE_ITEM_REDUX';
export const CHANGE_BASE ='CHANGE_BASE';
export const UPDATE_DATA = 'UPDATE_DATA';
export const GET_DATA = 'GET_DATA';

export function addListItem(item) {
    return {
        type: ADD_ITEM_FIREBASE,
        payload: item
    };
}

export function addItemRedux(item) {
    return {
        type: ADD_ITEM_REDUX,
        payload: item
    }
}

export function removeListItem(id) {
    return {
        type: REMOVE_ITEM_FIREBASE,
        payload: id
    }
}

export function removeItemRedux(id) {
    return {
        type: REMOVE_ITEM_REDUX,
        payload: id
    }
}

export function changeBase(val) {
    return {
        type: CHANGE_BASE,
        payload: val
    }
}

export function getData() {
    return {
      type: GET_DATA
    }
}

export function updateData(data) {
    return {
        type: UPDATE_DATA,
        payload: data
    }
}



