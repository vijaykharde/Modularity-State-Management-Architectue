//import initialState from './initialState';
import { IB_CURVE_UPDATE_DATA } from '../constants';

export function updateData(data) {
    return {
        type: IB_CURVE_UPDATE_DATA,
        data: data,
        id: data.id
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case IB_CURVE_UPDATE_DATA:
            if (state.data[action.data.currency]) {
                let newRows = state.data[action.data.currency].map(item => {
                    if (item.id === action.id) {
                        let mid = (action.data.bid + action.data.ask) / 2;
                        return { ...action.data, mid: mid };
                    }
                    else {
                        return item;
                    }
                });

                var obj = state.data;
                obj[action.data.currency] = newRows;
                return {
                    ...state,
                    data: obj
                };
            }
            return {
                ...state
            };
        default:
            return { ...state };
    }
}