import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import history from './history';
import { default as reducer } from '../features/ib-curve/redux/reducer';

const reducerMap = {
    router: connectRouter(history),
    ibcurve: reducer
};

export default combineReducers(reducerMap);
