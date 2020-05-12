export const LOGIN_ATTEMPT = "LOGIN_ATTEMPT";
export type LOGIN_ATTEMPT = typeof LOGIN_ATTEMPT;

export interface LoginAttemptAction {
    type: LOGIN_ATTEMPT,
    username: string,
    password: string
}

export const LoginAttemptActionCreator = (username: string, password: string): LoginAttemptAction => ({
    type: LOGIN_ATTEMPT,
    username: username,
    password: password
});

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export type LOGIN_SUCCESS = typeof LOGIN_SUCCESS;

export interface LoginSuccessAction {
    type: LOGIN_SUCCESS,
    username: string,
    password: string
}

export const LoginSuccessActionCreator = (username: string, password: string): LoginSuccessAction => ({
    type: LOGIN_SUCCESS,
    username: username,
    password: password,
});

export const LOGIN_FAILURE = "LOGIN_FAILURE";
export type LOGIN_FAILURE = typeof LOGIN_FAILURE;

export interface LoginFailureAction {
    type: LOGIN_FAILURE,
    error: string,
}

export const LoginFailureActionCreator = (error: string): LoginFailureAction => ({
    type: LOGIN_FAILURE,
    error: error
})

export const LOGOUT = "LOGOUT";
export type LOGOUT = typeof LOGOUT;

export interface LogoutAction {
    type: LOGOUT,
}

export const LogoutActionCreator = (): LogoutAction => ({
    type: LOGOUT,
})

export type LoginActionType = LoginAttemptAction | LoginSuccessAction | LoginFailureAction | LogoutAction;