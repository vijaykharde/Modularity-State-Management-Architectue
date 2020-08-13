import initialState from './initialState';
import { IB_CURVE_UPDATE_REAL_TIME_DATA } from './constants';
export function updateRealTimeData(curr, data) {
    return {
        type: IB_CURVE_UPDATE_REAL_TIME_DATA,
        currency: curr,
        data: data
    };
}

export function reducer(state = initialState, action) {

    var obj = state.data;
    if (action.data) {
        obj[action.currency] = action.data.map(item => {
            let mid = (item.bid + item.ask) / 2;
            return { ...item, mid: mid };
        });
    }

    switch (action.type) {
        case IB_CURVE_UPDATE_REAL_TIME_DATA:
            return {
                ...state,
                data: obj
            };
        default:
            return { ...state };
    }
}