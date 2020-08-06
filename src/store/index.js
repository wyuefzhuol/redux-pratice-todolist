import { createStore, combineReducers } from 'redux';
import stringReducer from '../reducer/stringReducer';
import loadingReducer from '../reducer/loadingReducer'

const rootReducer = combineReducers({ stringReducer, loadingReducer });

const store = createStore(rootReducer);

export default store;