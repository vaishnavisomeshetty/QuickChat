import { combineReducers } from "redux";
import chatReducer from './currentChat'
import SelectChat from './selectChat'
const allReducers  = combineReducers({chatReducer,SelectChat})
export default allReducers