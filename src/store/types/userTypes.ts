export enum UserActionTypes {
    USER_REQUEST = 'USER_REQUEST',
    USER_SUCCESS = 'USER_SUCCESS',
    USER_FAIL = 'USER_FAIL',
    USER_SIGN_OUT = 'USER_SIGN_OUT',
}

export interface UserState {
    isAuth: boolean;
    userName: string;
    isLoading: boolean;
    error: null | string;
}

interface UserActionREQUEST {
    type: UserActionTypes.USER_REQUEST;
}
interface UserActionSUCCESS {
    type: UserActionTypes.USER_SUCCESS;
    payload: any;
}
interface UserActionFAIL {
    type: UserActionTypes.USER_FAIL;
    payload: string;
}
interface UserActionUSER_SIGN_OUT {
    type: UserActionTypes.USER_SIGN_OUT;
}

export type UserAction = UserActionREQUEST | UserActionSUCCESS | UserActionFAIL | UserActionUSER_SIGN_OUT;