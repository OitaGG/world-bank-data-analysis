import * as React from 'react';
import {useState, useMemo, useEffect} from 'react';
import {connect} from 'react-redux';
import { Dispatch } from 'redux';
import { Login as BaseLogin} from '../component/Login';
import {LoginAttemptActionCreator} from "../../../redux/actions/auth";

interface Props {
    error: string,
    LoginAttempt: any
}

const Login = ({error, LoginAttempt}: Props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginInput = useMemo(
        () => (event: React.FormEvent<HTMLInputElement>) => setUsername(event.currentTarget.value),
        []
    );

    const handlePasswordInput = useMemo(
        () => (event: React.FormEvent<HTMLInputElement>) => setPassword(event.currentTarget.value),
        []
    );

    const onLogin = (e: React.FocusEvent) => {
        console.log(e)
        e.preventDefault();
        LoginAttempt(username, password);
    };
    return (          
        <BaseLogin
            error={error}
            onChangeLogin={handleLoginInput}
            onChangePassword={handlePasswordInput}
            onLogin={onLogin}
        />
    )
}

const mapStateToProps = (store: any) => ({
    error: store.Login.error
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    LoginAttempt: (username: string, password: string) => dispatch(LoginAttemptActionCreator(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);