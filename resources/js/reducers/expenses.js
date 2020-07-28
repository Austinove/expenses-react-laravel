import { expensesConstants } from "../constants";
const initialState = {
    Loading: false,
    Expenses: ""
};
export function expensesReducer(state = initialState, action) {
    switch (action.type) {
        case expensesConstants.fetch_expenses:
            return {
                ...state,
                Loading: true,
            }
        case expensesConstants.fetch_expenses_success:
            return {
                ...state,
                Expenses: action.Expenses,
                Loading: false,
            }
        case expensesConstants.fetch_expenses_fail:
            return {
                ...state,
                Loading: false,
            }

        case expensesConstants.create_expenses:
            return {
                ...state,
                Loading: true,
            }
        case expensesConstants.create_expenses_success:
            return {
                ...state,
                Expenses: action.Expenses,
                Loading: false,
            }
        case expensesConstants.create_expenses_fail:
            return {
                ...state,
                Loading: false,
            }

        case expensesConstants.edit_expenses:
            return {
                ...state,
                Loading: true,
            }
        case expensesConstants.edit_expenses_success:
            return {
                ...state,
                Expenses: action.Expenses,
                Loading: false,
            }
        case expensesConstants.edit_expenses_fail:
            return {
                ...state,
                Loading: false,
            }

        case expensesConstants.delete_expenses:
            return {
                ...state,
                Loading: true,
            }
        case expensesConstants.delete_expenses_success:
            return {
                ...state,
                Expenses: action.Expenses,
                Loading: false,
            }
        case expensesConstants.delete_expenses_fail:
            return {
                ...state,
                Loading: false,
            }

        case expensesConstants.accept_expenses:
            return {
                ...state,
                Loading: true,
            }
        case expensesConstants.accept_expenses_success:
            return {
                ...state,
                Expenses: action.Expenses,
                Loading: false,
            }
        case expensesConstants.accept_expenses_fail:
            return {
                ...state,
                Loading: false,
            }

        case expensesConstants.decline_expenses:
            return {
                ...state,
                Loading: true,
            }
        case expensesConstants.decline_expenses_success:
            return {
                ...state,
                Expenses: action.Expenses,
                Loading: false,
            }
        case expensesConstants.decline_expenses_fail:
            return {
                ...state,
                Loading: false,
            }

        default:
            return state;
    }
}