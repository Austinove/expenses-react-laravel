import { all } from "redux-saga/effects";
import { authSaga } from "./auth";
import { expensesSaga } from "./expenses";
export default function* rootSaga(getState) {
    yield all([]);
    authSaga(),
    expensesSaga(),
}