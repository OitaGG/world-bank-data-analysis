import {HELLO_SETUP, HelloAction} from "./actions";

const initialState = {
    hello: "Papa"
};

type initialType = typeof initialState;

export const helloReducer = (store: initialType = initialState, action: HelloAction): initialType => {
    switch (action.type) {
        case HELLO_SETUP:
            return {
                ...store,
                hello: action.hello
            };
        default:
            return store;
    }
};