const initialState={
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
};