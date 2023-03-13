import { legacy_createStore as createStore, combineReducers } from 'redux'
import userReducer from './Reducers/userReducer';
import cartReducer from './Reducers/cartReducer';

const store = createStore(combineReducers({userReducer, cartReducer}));


export default store