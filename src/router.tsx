import * as React from 'react';
import {Suspense} from 'react';
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';

const AuthPage = React.lazy(() => import('./pages/Auth/Auth'));

const Routes = (props: any) => {
    return (
        <Suspense fallback={<div>Загрузка</div>}>
            <Switch>
                {
                    props.auth
                        ? (
                            <Route exact path="/" render={() => <div>Home Page</div>}/>
                        )
                        : (
                            <Route path="/login" component={AuthPage}/>
                        )
                }
            </Switch>
        </Suspense>
    )
};

const mapStateToProps = (store: any) => ({
    
});

export default connect(mapStateToProps)(Routes)
