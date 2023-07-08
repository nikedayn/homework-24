import {combineReducers, createStore} from 'redux';
import {notesReducer} from './reducers/notesReducer';

let reducers = combineReducers({
    notesPage: notesReducer
})

let store = createStore(reducers);

export default store;