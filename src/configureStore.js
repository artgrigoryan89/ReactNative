import logger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import {createUserEpic,userLoginEpic} from './epic/authEpic';
import {addListItemEpic, updateListEpic} from './epic/listEpic';
import authReducer from './reducers/auth';
import modalReducer from './reducers/waitingModal';
import listReducer from './reducers/list';

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(
    userLoginEpic,
    createUserEpic,
    addListItemEpic,
    updateListEpic
)

const rootReducer = combineReducers({
    auth: authReducer,
    modal: modalReducer,
    list: listReducer,
});

const configureStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(epicMiddleware, logger)
        );
    epicMiddleware.run(rootEpic);
    return store
};

export default configureStore;
function disabledEventPropagation(e){
  if(e){
    if(e.stopPropagation){
      e.stopPropagation();
    } else if(window.event){
      window.event.cancelBubble = true;
    }
  }
}
