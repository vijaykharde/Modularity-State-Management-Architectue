import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import history from './history';
import rootReducer from './rootReducer';
import { initialState as state } from '../features/ib-curve/redux/initialState';

function configureStore(initialState = state) {
    const store = createStore(rootReducer, initialState);
    return store;
}

export default configureStore();
