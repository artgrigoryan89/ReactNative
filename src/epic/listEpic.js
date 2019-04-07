import {from, of, concat} from 'rxjs';
import {switchMap, map, ignoreElements, catchError} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import firebase from 'react-native-firebase';
import {NoteService} from '../services/NoteService';
import {ADD_ITEM_FIREBASE, REMOVE_ITEM_FIREBASE, addItem, updateData, getData, UPDATE_DATA, GET_DATA} from '../actions/list';
import { hideWaitingModal} from "../actions/waitingModal";
import {registerError} from '../actions/auth';

const uId = firebase.auth().currentUser.uid;
const service = new NoteService(uId);

export const updateListEpic = action$ => action$.pipe(
    ofType(GET_DATA),
    switchMap(() => from(service.getData()).pipe(
        switchMap((response) => {
            console.log(response);
            return of(updateData(response.val()))
        }),
        catchError( err => {
            return of(registerError(err.message, err.code))
        })
    ))
)

export const addListItemEpic = action$ => action$.pipe(
    ofType(ADD_ITEM_FIREBASE),
    switchMap(({payload}) => from(service.add(payload)).pipe(
             switchMap((response) => {
                 console.log(response);
                 return of(getData())
             }),
             catchError(err => {
                 return of(registerError(err.message, err.code))
             })
             )
        )
)



