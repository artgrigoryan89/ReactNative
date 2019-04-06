export const ADD_ITEM_FIREBASE = 'ADD_ITEM_FIREBASE';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM_FIREBASE = 'REMOVE_ITEM_FIREBASE';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_DATA = 'UPDATE_DATA';
export const GET_DATA = 'GET_DATA';

export function addListItem(item) {
    return {
        type: ADD_ITEM_FIREBASE,
        payload: item
    };
}

export function addItem(item) {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

export function removeListItem(id) {
    return {
        type: REMOVE_ITEM_FIREBASE,
        payload: id
    }
}

export function removeItem(id) {
    return {
        type: REMOVE_ITEM,
        payload: id
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



