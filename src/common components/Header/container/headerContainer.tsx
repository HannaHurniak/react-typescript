import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { UserActionTypes } from '../../../store/types/userTypes';

import Header from '../component/index';

const HeaderContainers: React.FC = () => {
    
    const dispatch = useDispatch();

    const { isAuth } = useTypedSelector(state => state.isAuth);

    const handleSignOut = () => {
        dispatch({type: UserActionTypes.USER_SIGN_OUT})
    }

    return (
        <Header 
            isAuth={isAuth} 
            handleSignOut={handleSignOut}
        />
    )
}

export default HeaderContainers;


