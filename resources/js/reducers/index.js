import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { authReducer } from "./auth";
import { expensesReducer } from "./expenses";

export default history => combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    expenses: expensesReducer,
});