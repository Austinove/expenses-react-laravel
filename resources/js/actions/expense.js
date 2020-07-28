import { expensesConstants } from "../constants";
//Fetching
export const fetchExpensesRequest = () => {
    return {
        type: expensesConstants.fetch_expenses
    };
};
export const fetchExpensesSuccess = Expences => {
    return {
        type: expensesConstants.fetch_expenses_success,
        Expences
    };
};
export const fetchExpensesFail = () => {
    return {
        type: expensesConstants.fetch_expenses_fail,
    };
};

//create
export const create_expense = () => {
    return {
        type: expensesConstants.create_expense
    };
};
export const createExpensesSuccess = Expenses => {
    return {
        type: expensesConstants.create_expense_success,
        Expenses
    };
};
export const createExpensesFail = () => {
    return {
        type: expensesConstants.create_expenses_fail,
    };
};

//edit
export const editExpense = () => {
    return {
        type: expensesConstants.edit_expense
    };
};
export const editExpensesSuccess = Expenses => {
    return {
        type: expensesConstants.edit_expense_success,
        Expences
    };
};
export const editExpensesFail = () => {
    return {
        type: expensesConstants.edit_expenses_fail,
    };
};

//delete
export const deleteExpense = () => {
    return {
        type: expensesConstants.delete_expense
    };
};
export const deleteExpensesSuccess = Expenses => {
    return {
        type: expensesConstants.delete_expense_success,
        Expenses
    };
};
export const deleteExpensesFail = () => {
    return {
        type: expensesConstants.delete_expenses_fail,
    };
};

//accept
export const acceptExpense = () => {
    return {
        type: expensesConstants.accept_expense
    };
};
export const acceptExpensesSuccess = Expenses => {
    return {
        type: expensesConstants.accept_expense_success,
        Expenses
    };
};
export const acceptExpensesFail = () => {
    return {
        type: expensesConstants.accept_expenses_fail,
    };
};

//decline
export const declineExpense = () => {
    return {
        type: expensesConstants.decline_expense
    };
};
export const declineExpensesSuccess = Expenses => {
    return {
        type: expensesConstants.decline_expense_success,
        Expenses
    };
};
export const declineExpensesFail = () => {
    return {
        type: expensesConstants.decline_expenses_fail,
    };
};