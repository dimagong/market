export const actionLogin = login => ({
    type: 'SET_LOGIN',
    name: login.name,
    password: login.password,
    email: login.email
});