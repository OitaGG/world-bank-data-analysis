import * as React from "react";
import {FunctionComponent} from "react";
import {Provider} from "react-redux";
import {configureStore} from "./store/reducers";
import HelloWorldContainer from "./components/hello-world-container/HelloWorldContainer";

const store = configureStore();

export const App: FunctionComponent = () => {
    return(
        <Provider store={store}>
            <HelloWorldContainer/>
        </Provider>
    );
};