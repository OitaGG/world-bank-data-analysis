import * as React from 'react';
import { Button, Input } from '../../../components';

export interface LoginProps {

}

export const Login = (props: LoginProps) => {
    return (
        <div>
            <Input size="defult" placeholder="Пароль" type="password"/>
            <Button size="small">Login</Button>
        </div>
    );
}