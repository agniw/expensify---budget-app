import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
//REMOVE_EXPENSE
//EDIT_EXPENSE

//SET_FILTER_TEXT
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE


const addExpense = ({description = '', note = '', amount = 0, createdAt = 0}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': 
            return [...state, action.expense];
        case 'REMOVE_EXPENSE': 
            return state.filter((item) => item.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {...expense, ...action.updates}
                } else {
                    return expense;
                }
            })
        default: return state;
    }
}

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER': 
            return {
                ...state, text: action.text
            };
        case 'SORT_BY_DATE': 
            return {
                ...state, sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state, sortBy: 'amount'
            };
        case 'SET_START_DATE':
            return {
                ...state, startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state, endDate: action.endDate
            }
        default: return state;
    }
}

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
};

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', note: 'Finally', amount: 230, createdAt: 10 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Cat', note: 'Bender', amount: 130, createdAt: 20 }));

// store.dispatch(removeExpense({id: expenseOne.expense.id}))

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 350}));

// store.dispatch(setTextFilter('Cat'));

store.dispatch(sortByAmount());

// store.dispatch(setStartDate(10));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(20));

const demoState = {
    expenses: [
        {
            id: 'tesss',
            description: 'rent march',
            note: 'test note',
            amount: 34000,
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount', //data or amount
        startDate: undefined,
        endDate: undefined
    }
};
