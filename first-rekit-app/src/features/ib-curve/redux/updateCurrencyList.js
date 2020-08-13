import initialState from './initialState';
import { IB_CURVE_UPDATE_CURRENCY_LIST } from './constants';

export function updateCurrencyList(currList) {
    return {
        type: IB_CURVE_UPDATE_CURRENCY_LIST,
        currList: currList
    };
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case IB_CURVE_UPDATE_CURRENCY_LIST:
            return {
                ...state,
                currList: action.currList
            };
        default:
            return { ...state };
    }
}