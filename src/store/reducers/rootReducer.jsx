import authReducer from './mock/authReducer';
import testFormValid from './mock/formValidationReducers';
import searchFlightReducer from './searchFlightsReducer';
import weatherReducer from './weatherReducer';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    auth:authReducer,
    testvalid:testFormValid,
    searchFlightReducer:searchFlightReducer,
    weatherReducer:weatherReducer,
})


export default rootReducer;