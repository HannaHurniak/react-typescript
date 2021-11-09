import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../../common components/Header/container/headerContainer';
import SignInForm from './signInForm';
import Footer from '../../../common components/Footer/components/index';

import { PropsSignInIndex } from '../../../interface/interface';
import logo from './../../../assets/Logo.png';
import styles from './../../../common components/Header/component/style.module.scss';


const SignInPage: React.FC<PropsSignInIndex> = ({ handleChange, handleSubmit, isAuth }) => {
    return (
        <>
            <header>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                        <Link to={'/'}>
                            <img src={logo} alt="logo" />
                        </Link> 
                    <div className={styles.bl}>
                        
                    </div>

                </div>
            </div>
        </header>
            < SignInForm 
                handleChange={handleChange} 
                handleSubmit={handleSubmit}
                isAuth={isAuth}
            />
            <Footer />

        </>
    )
}

export default SignInPage;