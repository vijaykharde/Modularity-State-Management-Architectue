import axios from 'axios';
import {
    IB_CURVE_GET_CURRENCY_DATA_BEGIN,
    IB_CURVE_GET_CURRENCY_DATA_SUCCESS,
    IB_CURVE_GET_CURRENCY_DATA_FAILURE,
    IB_CURVE_GET_CURRENCY_DATA_DISMISS_ERROR
} from './constants';

export function getCurrencyData(args = {}) {
    return (dispatch) => {
        dispatch({
            type: IB_CURVE_GET_CURRENCY_DATA_BEGIN
        });

        const promise = new Promise((resolve, reject) => {
            const furl = '/Home/FatchCurveData?currency=' + args.currency;
            const doRequest = axios.get(furl);
            doRequest.then(
                (res) => {
                    dispatch({
                        type: IB_CURVE_GET_CURRENCY_DATA_SUCCESS,
                        data: res.data,
                        currency: args.currency
                    });
                    resolve(res);
                },
                (err) => {
                    dispatch({
                        type: IB_CURVE_GET_CURRENCY_DATA_FAILURE,
                        data: { error: err }
                    });
                    reject(err);
                }
            );
        });
        return promise;
    };
}

export function dismissGetCurrencyDataError() {
    return {
        type: IB_CURVE_GET_CURRENCY_DATA_DISMISS_ERROR
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case IB_CURVE_GET_CURRENCY_DATA_BEGIN:
            return {
                ...state,
                getCurrencyDataPending: true,
                getCurrencyDataError: null
            };

        case IB_CURVE_GET_CURRENCY_DATA_SUCCESS:
            var obj = { ...state.data };
            obj[action.currency] = action.data.map(item => {
                let mid = (item.bid + item.ask) / 2;
                return { ...item, mid: mid };
            });
            return {
                ...state,
                data: obj,
                getCurrencyDataPending: false,
                getCurrencyDataError: null
            };

        case IB_CURVE_GET_CURRENCY_DATA_FAILURE:
            return {
                ...state,
                getCurrencyDataPending: false,
                getCurrencyDataError: action.data.error
            };

        case IB_CURVE_GET_CURRENCY_DATA_DISMISS_ERROR:
            return {
                ...state,
                getCurrencyDataError: null
            };

        default:
            return state;
    }
}