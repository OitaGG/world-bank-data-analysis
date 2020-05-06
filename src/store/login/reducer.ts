import { LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILURE, LoginAttemptAction, LoginActionType } from './actions';

export enum LoginStatus {
    NOT_LOADED = "NOT_LOADED",
    LOADING = "LOADING",
    LOADED = "LOADED",
    FAILURE = "FAILURE"
}

interface LoginState {
    status: LoginStatus.LOADING | LoginStatus.NOT_LOADED | LoginStatus.LOADED | LoginStatus.FAILURE,
    username: string | null,
    error: string | null
}

const defaultLoginState = {
    status: LoginStatus.NOT_LOADED,
    username: null,
    error: null
}

export const LoginReducer = (state: any, action: LoginActionType) => {
    switch(action.type) {
        case LOGIN_ATTEMPT:
            return {
                ...state,
                status: LoginStatus.LOADING
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                status: LoginStatus.LOADED,
                username: action.username
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                status: LoginStatus.FAILURE,
                error: action.error
            }
        default:
            return state;
    }
}