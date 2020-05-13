import {ILogin, ISignUp} from "../../types/auth";
import {signInURL, signUpURL} from "../constants/auth";

export function signIn(data: ILogin){
    return fetch(signInURL,
        {
            method: "GET",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
    }).then(response => {
        return response.json();
    })
}

export function signUp(data: ISignUp) {
    return fetch(signUpURL,
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(response => {
        return response.json();
    })
}