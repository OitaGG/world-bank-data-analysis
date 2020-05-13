import { takeLatest, put, call } from 'redux-saga/effects';
import {signIn, signUp} from "../../utils/api/Auth";
import {AuthActions} from "../actions/auth";
import {Action} from "redux-actions";
import {ILogin, ISignUp} from "../../types/auth";

export function* signInWorker(action: Action<ILogin>) {
    try {
        //тест
        const data = yield call(signIn, action.payload);
        yield put(AuthActions.LoginSuccessActionCreator({username: 'alex', password: 'dsad'}))
    }
    catch (error) {
        yield put(AuthActions.LoginFailureActionCreator(error))
    }
}

export function* signUpWorker(action: Action<ISignUp>) {
    try {
        //тест
        const data = yield call(signUp, action.payload);
    }
    catch (error) {
        yield put(AuthActions.LoginFailureActionCreator(error));
    }
}

export default function* watchAuth() {
    yield takeLatest(AuthActions.Type.LOGIN_ATTEMPT, signInWorker);
    yield takeLatest(AuthActions.Type.SIGN_UP_ATTEMPT, signUpWorker);
}