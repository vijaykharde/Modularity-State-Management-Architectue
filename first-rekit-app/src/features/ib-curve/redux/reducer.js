import { reducer as getCurrencyDataReducer } from './actions/getCurrencyData';
import { reducer as updateDataReducer } from './actions/updateData';
import { reducer as updateCurrencyListReducer } from './actions/updateCurrencyList';
import { reducer as updateRealTimeDataReducer } from './actions/updateRealTimeData';
const initialState = {
    getCurrencyDataPending: false,
    getCurrencyDataError: null,
    data: [
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
                },
                {
                    "Tenor": "SN",
                    "TenorDate": "2020-08-3T00:00:00",
                    "TenorDays": 3,
                    "Bid": 0.042,
                    "Ask": 0.292,
                    "DiscountFactor": 0
                },
                {
                    "Tenor": "1W",
                    "TenorDate": "2020-08-3T00:00:00",
                    "TenorDays": 3,
                    "Bid": 0.042,
                    "Ask": 0.292,
                    "DiscountFactor": 0
                },
                {
                    "Tenor": "2W",
                    "TenorDate": "2020-08-3T00:00:00",
                    "TenorDays": 3,
                    "Bid": 0.042,
                    "Ask": 0.292,
                    "DiscountFactor": 0
                },
                {
                    "Tenor": "3W",
                    "TenorDate": "2020-08-3T00:00:00",
                    "TenorDays": 3,
                    "Bid": 0.042,
                    "Ask": 0.292,
                    "DiscountFactor": 0
                },
                {
                    "Tenor": "1M",
                    "TenorDate": "2020-08-3T00:00:00",
                    "TenorDays": 3,
                    "Bid": 0.042,
                    "Ask": 0.292,
                    "DiscountFactor": 0
                },
                {
                    "Tenor": "2M",
                    "TenorDate": "2020-08-3T00:00:00",
                    "TenorDays": 3,
                    "Bid": 0.042,
                    "Ask": 0.292,
                    "DiscountFactor": 0
                },
                {
                    "Tenor": "3M",
                    "TenorDate": "2020-08-3T00:00:00",
                    "TenorDays": 3,
                    "Bid": 0.042,
                    "Ask": 0.292,
                    "DiscountFactor": 0
                },
                {
                    "Tenor": "4M",
                    "TenorDate": "2020-08-3T00:00:00",
                    "TenorDays": 3,
                    "Bid": 0.056,
                    "Ask": 0.292,
                    "DiscountFactor": 0
                }
            ],
            "Currency": "USD",
            "CurveName": "ESE_FTP_GWM_FIXED"
        }
    ],
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
                },
                {
                    "Tenor": "SN",
                    "TenorDate": "2020-08-3T00:00:00",
                    "TenorDays": 3,
                    "Bid": 0.042,
                    "Ask": 0.292,
                    "DiscountFactor": 0
                },
                {
                    "Tenor": "1W",
                    "TenorDate": "2020-08-3T00:00:00",
                    "TenorDays": 3,
                    "Bid": 0.042,
                    "Ask": 0.292,
                    "DiscountFactor": 0
                },
                {
                    "Tenor": "2W",
                    "TenorDate": "2020-08-3T00:00:00",
                    "TenorDays": 3,
                    "Bid": 0.042,
                    "Ask": 0.292,
                    "DiscountFactor": 0
                },
                {
                    "Tenor": "3W",
                    "TenorDate": "2020-08-3T00:00:00",
                    "TenorDays": 3,
                    "Bid": 0.042,
                    "Ask": 0.292,
                    "DiscountFactor": 0
                },
                {
                    "Tenor": "1M",
                    "TenorDate": "2020-08-3T00:00:00",
                    "TenorDays": 3,
                    "Bid": 0.042,
                    "Ask": 0.292,
                    "DiscountFactor": 0
                },
                {
                    "Tenor": "2M",
                    "TenorDate": "2020-08-3T00:00:00",
                    "TenorDays": 3,
                    "Bid": 0.042,
                    "Ask": 0.292,
                    "DiscountFactor": 0
                },
                {
                    "Tenor": "3M",
                    "TenorDate": "2020-08-3T00:00:00",
                    "TenorDays": 3,
                    "Bid": 0.042,
                    "Ask": 0.292,
                    "DiscountFactor": 0
                },
                {
                    "Tenor": "4M",
                    "TenorDate": "2020-08-3T00:00:00",
                    "TenorDays": 3,
                    "Bid": 0.056,
                    "Ask": 0.292,
                    "DiscountFactor": 0
                }
            ],
            "Currency": "USD",
            "CurveName": "ESE_FTP_GWM_FIXED"
        }
    ]
};
const reducers = [
    getCurrencyDataReducer,
    updateDataReducer,
    updateCurrencyListReducer,
    updateRealTimeDataReducer
];

export default function (state = initialState, action) {
    let newState;
    switch (action.type) {
        default:
            newState = state;
            break;
    }

    return reducers.reduce((s, r) => r(s, action), newState);
}