import * as React from 'react';
import { Button, Input } from '../../../components';
import './Login.less';

export interface LoginProps {
    error: string,
    onChangeLogin: any,
    onChangePassword: any,
    onLogin: any
}

export const Login = ({error, onChangeLogin, onChangePassword, onLogin}: LoginProps) => {
    return (
        <div className="login">
            <form className="login-form">
                <div className="login__greeting">
                    <h1>Hello, everyone!</h1>
                </div>
                <div className="login__username">
                    <Input size="default" placeholder="Username" onChange={onChangeLogin}/>
                </div>
                <div className="login__password">
                    <Input size="default" placeholder="Password" type="password" onChange={onChangePassword}/>
                </div>
                <div className="login__submit-btn">
                    <Button size="default" onClick={onLogin}>Login</Button>
                </div>
            </form>
        </div>
    );
}