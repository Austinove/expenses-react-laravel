/* eslint-disable no-console */
import { all, call, fork, put, takeEvery, select } from "redux-saga/effects";
import { expensesConstants } from "../constants"
import {
    fetchExpensesSuccess
} from "../actions/counterActions";
import { push } from "connected-react-router";
import { API, expenseAPI } from "../api";

function* fetchExpenses() {
    console.log("reached saga");
    try {
        const Items = yield call(API.request, expenseAPI.fetchExpensesApi());
        if (!Items) {
            throw new Error("No list fetched");
        }
        yield put(fetchExpensesSuccess(Items));
    } catch (error) {
        console.log(error);
    }
}

function* makeExpense() { }

function* editExpense() { }

export function* getExpenses() {
    yield takeEvery(expensesConstants.fetch_expenses, fetchExpenses);
}
export function* createExpense() {
    yield takeEvery(expensesConstants.create_expense, makeExpense);
}
export function* editExpenses() {
    yield takeEvery(expensesConstants.edit_expense, editExpense);
}

export default function* rootSaga() {
    yield all([
        fork(getExpenses),
        fork(createExpense),
        fork(editExpenses)
    ]);
}
