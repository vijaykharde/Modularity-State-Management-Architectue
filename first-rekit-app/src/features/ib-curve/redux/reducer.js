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

export default function reducer(state = {
    getCurrencyDataPending: false,
    getCurrencyDataError: null,
    data: {},
    currList: {},
    curveData: [
        {
            "Curve": [
                {
                    "Tenor": "ON",
                    "TenorDate": "2020-07-31T00:00:00",
                    "TenorDays": 1,
                    "Bid": 0.035,
                    "Ask": 0.285,
                    "DiscountFactor": 0
                },
                {
                    "Tenor": "TN",
                    "TenorDate": "2020-08-3T00:00:00",
                    "TenorDays": 3,
                    "Bid": 0.042,
                    "Ask": 0.292,
                    "DiscountFactor": 0
                }
            ],
            "Currency": "USD",
            "CurveName": "ESE_FTP_GWM_FIXED"
        }
    ]
}, action) {
    let newState;
    switch (action.type) {
        default:
            newState = state;
            break;
    }

    return reducers.reduce((s, r) => r(s, action), newState);
}