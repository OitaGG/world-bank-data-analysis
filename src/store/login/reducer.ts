import produce from 'immer';
import { LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, LoginActionType } from './actions';

export enum LoginStatus {
    NOT_LOADED = "NOT_LOADED",
    LOADING = "LOADING",
    LOADED = "LOADED",
    FAILURE = "FAILURE"
}

interface LoginState {
    status: LoginStatus.LOADING | LoginStatus.NOT_LOADED | LoginStatus.LOADED | LoginStatus.FAILURE,
    username: string,
    error: string
}

const defaultLoginState: LoginState = {
    status: LoginStatus.NOT_LOADED,
    username: '',
    error: ''
}

export const LoginReducer = (state: LoginState = defaultLoginState, action: LoginActionType): LoginState => {
    switch(action.type) {
        case LOGIN_ATTEMPT:
            return produce(state, draft => {
                draft.status = LoginStatus.LOADING,
                draft.error = '',
                draft.username = ''
            })
        case LOGIN_SUCCESS:
            return produce(state, draft => {
                draft.status = LoginStatus.LOADED,
                draft.error = '',
                draft.username = action.username
            })
        case LOGIN_FAILURE:
            return produce(state, draft => {
                draft.status = LoginStatus.FAILURE,
                draft.error = action.error,
                draft.username = ''
            })
        case LOGOUT:
            return produce(state, () => {
                return defaultLoginState;
            })
        default:
            return state;
    }
}