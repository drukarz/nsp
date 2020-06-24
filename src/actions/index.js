export const addCredentials = (login, password) => {
    return{
        type: "SIGN_IN",
        payload: {login: login, password: password}
    }
}