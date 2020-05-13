import produce from 'immer';
import {AuthActions} from "../actions/auth";

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
    username: null,
    error: null
};

export const LoginReducer = (state: LoginState = defaultLoginState, action: any): LoginState => {
    switch(action.type) {
        case AuthActions.Type.LOGIN_ATTEMPT:
            return produce(state, draft => {
                draft.status = LoginStatus.LOADING,
                draft.error = null,
                draft.username = null
            });
        case AuthActions.Type.LOGIN_SUCCESS:
            return produce(state, draft => {
                draft.status = LoginStatus.LOADED,
                draft.error = null,
                draft.username = action.payload.username
            });
        case AuthActions.Type.LOGIN_FAILURE:
            return produce(state, draft => {
                draft.status = LoginStatus.FAILURE,
                draft.error = action.payload,
                draft.username = null
            });
        case AuthActions.Type.LOGOUT:
            return produce(state, () => {
                return defaultLoginState;
            });
        default:
            return state;
    }
};