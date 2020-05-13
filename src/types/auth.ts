export interface ILogin {
    username: string,
    password: string
}

export interface ILoginError {
    error: string
}

export interface ISignUp {
    email: string,
    username: string,
    password: string
}