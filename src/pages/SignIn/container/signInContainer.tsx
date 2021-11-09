import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { useForm } from '../../../hooks/index';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { fetchUser } from '../../../store/action-creators/user-creators';
import SignInPage from '../component/index';

const SignInContainers: React.FC = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [formValues, handleChange] = useForm({
        login: '',
        password: ''
    })

    const { isAuth } = useTypedSelector(state => state.isAuth);
    
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault(); 
        dispatch(fetchUser(formValues));
    }

    useEffect(() => {
        if (isAuth === true) {
            setTimeout(() => {
                history.push('/');
            }, 1000)
        }
    }, [isAuth])

    return (
        <SignInPage 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            isAuth={isAuth}
        />
    )

}

export default SignInContainers;