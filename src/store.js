import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from '../../../../../Library/Caches/typescript/2.9/node_modules/redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(rootSaga)



export default store;