import { UserAction, UserActionTypes } from './../types/userTypes';
import { Dispatch } from 'redux';
import axios from 'axios';


export const fetchUser = (formValues: any) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.USER_REQUEST});
            const response = await axios.post('http://127.0.0.1:3000/auth', formValues);
            dispatch({
                type: UserActionTypes.USER_SUCCESS, 
                payload: response.data});
        } catch (error: any) {
            dispatch({
                type: UserActionTypes.USER_FAIL, 
                payload: 'User does not exist or wrong username'})
        }
    }
}