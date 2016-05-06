import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import {loadScores} from './sagas';

const loggerMiddleware = createLogger({
    collapsed: true,
    stateTransformer: state => state.toJS()
});

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            loggerMiddleware,
            createSagaMiddleware(loadScores)
        )
    );
}