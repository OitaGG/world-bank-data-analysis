import {combineReducers, createStore} from "redux";
import {helloReducer} from "./helloworld/reducers";
const rootState = combineReducers({
    hello: helloReducer
});

export function configureStore() {
    const store = createStore(
        rootState
    );
    return store;
}