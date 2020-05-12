import {combineReducers, createStore, applyMiddleware, compose } from "redux";
import {LoginReducer} from "./reducers/auth";
import {createBrowserHistory} from 'history';
import {routerMiddleware, connectRouter} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import watchAuth from "./sagas/auth";

export const history = createBrowserHistory();
export const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootState = (history: any) => combineReducers({
    Login: LoginReducer,
    router: connectRouter(history)
});

export function configureStore() {
    const store = createStore(
        rootState(history),
        composeEnhancers(
            applyMiddleware(routerMiddleware(history), sagaMiddleware)
        )
    );
    sagaMiddleware.run(watchAuth);
    return store;
}
