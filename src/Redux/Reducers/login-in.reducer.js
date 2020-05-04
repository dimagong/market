import {SET_LOGIN} from '../Actions/actionLogin'


const INITIAL_STATE = {
    name: '',
    password: '',
    email: '',
    isLoaderLogin: false
}

const loginInReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LOGIN.REQUEST:
            return {
                ...state,
                isLoaderLogin: true
            }
        case SET_LOGIN.SUCCESS:
            return {
                ...state,
                name: action.res,
                password: action.res,
                email: action.res
            }

        default:
            return state
    }

};

export default loginInReducer;
