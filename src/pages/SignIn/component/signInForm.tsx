import React from 'react';

import { PropsSignInIndex } from '../../../interface/interface';

import styles from './style.module.scss';

const SignInForm: React.FC<PropsSignInIndex> = ({ handleChange, handleSubmit, isAuth }) => {
    return (
        <div className={styles.wrapper__form}> 
            <div className={styles.form__login}>
                <h2>Welcome to course</h2>
                <form>
                    <label htmlFor="userEmail"></label>
                    <input id="userEmail"
                            name="login"
                            type="email" 
                            placeholder="Логин"
                            required
                            className={styles.input}
                            onChange={handleChange}
                    />
                    <label htmlFor="userPassword"></label>
                    <input id="userPassword" 
                            type="password" 
                            name="password"
                            placeholder="Пароль"
                            required
                            className={styles.input}
                            onChange={handleChange}
                    />
                    <div className={styles.errorMessage}>{isAuth}</div>

                    <button type="submit" id="sign-in" className={styles.button} onClick={handleSubmit}>Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default SignInForm;