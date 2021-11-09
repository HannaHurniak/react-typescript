import { UserAction, UserState, UserActionTypes } from './../types/userTypes'

const defaultState: UserState = {
    isAuth: false,
    userName: '',
    isLoading: false,
    error: null
}

export const userReducer = (state = defaultState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.USER_REQUEST : 
            return {...state, isLoading: true}
        case UserActionTypes.USER_SUCCESS : 
            return {...state, isAuth: action.payload.auth, userName: action.payload.login, isLoading: false}
        case UserActionTypes.USER_FAIL : 
            return {...state, isLoading: false, error: action.payload}
        case UserActionTypes.USER_SIGN_OUT : 
            return {...state, isLoading: false, isAuth: false, userName: ''}
        default: 
            return state;
    }
}