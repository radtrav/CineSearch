import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(rootSaga)



export default store;