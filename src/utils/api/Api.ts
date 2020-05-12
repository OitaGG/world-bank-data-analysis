export function signIn(username: string, password: string){
    return fetch('https://my-json-server.typicode.com/typicode/demo/profile')
        .then(res => res.json())
        .catch(err => {
            throw new Error(err);
        });
}
