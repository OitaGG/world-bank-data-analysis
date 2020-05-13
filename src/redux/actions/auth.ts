import { createAction } from 'redux-actions';
import {ILogin, ILoginError, ISignUp} from "../../types/auth";

enum Type {
    LOGIN_ATTEMPT = "LOGIN_ATTEMPT",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAILURE = "LOGIN_FAILURE",
    LOGOUT = "LOGOUT",
    SIGN_UP_ATTEMPT = "SIGN_UP_ATTEMPT",
    SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS"
}

const LoginAttemptActionCreator = createAction<ILogin>(Type.LOGIN_ATTEMPT);
const LoginSuccessActionCreator = createAction<ILogin>(Type.LOGIN_SUCCESS);
const LoginFailureActionCreator = createAction<ILoginError>(Type.LOGIN_FAILURE);
const LogoutActionCreator = createAction(Type.LOGOUT);
const SignUpAttemptActionCreator = createAction<ISignUp>(Type.SIGN_UP_ATTEMPT);

export const AuthActions = {
    Type,

    LoginAttemptActionCreator,
    LoginSuccessActionCreator,
    LoginFailureActionCreator,
    LogoutActionCreator,
    SignUpAttemptActionCreator
};

export type AuthActions = Omit<typeof AuthActions, 'Type'>;