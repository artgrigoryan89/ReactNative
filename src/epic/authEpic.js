import {from, of, concat} from 'rxjs';
import {ofType} from 'redux-observable';
import {switchMap, mergeMap, catchError} from 'rxjs/operators';
import {LOG_IN, LOG_OUT, CREATE_USER, logInError, logInSuccess, registerError, registerSuccess} from "../actions/auth";
import {hideWaitingModal} from '../actions/waitingModal';
import {FirebaseAuthService} from '../services/FirebaseAuth';

const service = new FirebaseAuthService();

export const createUserEpic = action$ => action$.pipe(
    ofType(CREATE_USER),
    switchMap(({payload}) => from(service.firebaseCreateUser(payload.email, payload.password)).pipe(
        switchMap(response => {
            return  concat(
                of(registerSuccess(response)),
                of(hideWaitingModal())
            );
        }),
        catchError(err => {
            return of(registerError(err.message, err.code))
        })
        )
    )
)

export const userLoginEpic = action$ => action$.pipe(
    ofType(LOG_IN),
    switchMap(({payload}) => from(service.firebaseLogin(payload.email, payload.password)).pipe(
        switchMap(response => {
            return  concat(
                of(logInSuccess(response)),
                of(hideWaitingModal())
            );
        }),
        catchError(err => {
            return of(logInError(err.message, err.code))
        })
        )
    )
)

const userSignOutEpic = action$ => action$.pipe(
    ofType(LOG_OUT),
    mergeMap(action => firebase.auth().signOut())
)




