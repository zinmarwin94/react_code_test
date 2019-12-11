import { combineReducers } from 'redux';
import Home from './home'; 

const rootReducer = combineReducers({
  space_list: Home
});

export default rootReducer;
