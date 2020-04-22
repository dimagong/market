const INITIAL_STATE = {
    name: '',
    password: '',
    email: ''
}

const loginInReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_LOGIN':
            return {
                ...state,
                name: action.name,
                password: action.password,
                email: action.email
            }

        default:
            return state
    }

};

export default loginInReducer;
