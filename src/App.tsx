import * as React from "react";
import {FunctionComponent} from "react";
import {Provider} from "react-redux";
import {configureStore, history} from './redux/store';
import {ConnectedRouter} from 'connected-react-router';
import Routes from './router';

const store = configureStore();

export const App: FunctionComponent = () => {
    return(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routes/>
            </ConnectedRouter>
        </Provider>
    );
};