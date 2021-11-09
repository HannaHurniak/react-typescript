import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderProps } from './../../../interface/interface';

import styles from './style.module.scss';
import logo from './../../../assets/Logo.png';
import avatar from './../../../assets/avatar.png';


const Header: React.FC<HeaderProps> = ({ isAuth, handleSignOut }) => {
    return (
        <header>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                        <Link to={'/'}>
                            <img src={logo} alt="logo" />
                        </Link> 
                    <div className={`${isAuth === true ? styles.unvisible : styles.block__userNotAuth}`}>
                        <Link to={'/sign'}>
                            <button className={styles.button}>Sign in</button>
                        </Link> 
                    </div>
                    <div className={`${isAuth === true ? styles.block__userAuth : styles.unvisible}`}>
                        <Link to={'/create'}>
                            <button>Create a Post</button>
                        </Link> 
                        <img src={avatar} alt="avatar" />
                        <button className={styles.button__signOut} onClick={handleSignOut}>Sign out</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;