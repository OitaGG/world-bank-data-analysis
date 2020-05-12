import { takeLatest, put, call } from 'redux-saga/effects';
import {signIn} from "../../utils/api/Api";

import {
    LOGIN_ATTEMPT,
    LoginAttemptAction, LoginFailureActionCreator,
    LoginSuccessActionCreator
} from "../actions/auth";

export function* signInWorker(action: LoginAttemptAction) {
    try {
        const {username, password} = yield call(signIn, action.username, action.password);
        yield put(LoginSuccessActionCreator(username, password))
    }
    catch (e) {
        yield put(LoginFailureActionCreator(e))
    }
}

export default function* watchAuth() {
    yield takeLatest(LOGIN_ATTEMPT, signInWorker);
}