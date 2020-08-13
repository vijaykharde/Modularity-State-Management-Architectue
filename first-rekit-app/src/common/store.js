import { createStore } from 'redux';
import rootReducer from './rootReducer';

function configureStore() {
    const store = createStore(rootReducer);
    return store;
}

export default configureStore();
