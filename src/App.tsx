import * as React from "react";
import {FunctionComponent} from "react";
import {Provider} from "react-redux";
import {configureStore} from "./store/reducer";
import { Login } from "./modules/Login";
const store = configureStore();

export const App: FunctionComponent = () => {
    return(
        <Provider store={store}>
            <Login/>
        </Provider>
    );
};