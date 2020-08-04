import { createStore, combineReducers } from 'redux';
import stringReducer from '../reducer/stringReducer';

const rootReducer = combineReducers({
    stringReducer
});

const store = createStore(rootReducer);

export default store;