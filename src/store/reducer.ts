import {combineReducers, createStore} from "redux";
import { LoginReducer } from './login/reducer';

const rootState = combineReducers({
    Login: LoginReducer
});

export function configureStore() {
    const store = createStore(
        rootState
    );
    return store;
}