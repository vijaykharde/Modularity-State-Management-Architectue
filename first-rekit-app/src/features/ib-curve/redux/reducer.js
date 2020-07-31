import initialState from './initialState';
import { reducer as getCurrencyDataReducer } from './getCurrencyData';
import { reducer as updateDataReducer } from './updateData';
import { reducer as updateCurrencyListReducer } from './updateCurrencyList';
import { reducer as updateRealTimeDataReducer } from './updateRealTimeData';

const reducers = [
    getCurrencyDataReducer,
    updateDataReducer,
    updateCurrencyListReducer,
    updateRealTimeDataReducer
];

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        default:
            newState = state;
            break;
    }

    return reducers.reduce((s, r) => r(s, action), newState);
}