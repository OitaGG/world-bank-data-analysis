import {combineReducers, createStore} from "redux";

const rootState = combineReducers({
});

export function configureStore() {
    const store = createStore(
        rootState
    );
    return store;
}