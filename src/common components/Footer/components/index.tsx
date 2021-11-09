import React from 'react';

import styles from './styles.module.scss';
import facebook from './../../../assets/footer/social-network/Facebook.png';
import instagram from './../../../assets/footer/social-network/Instagram.png';
import telegram from './../../../assets/footer/social-network/Telegram.png';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.footerContainer}>
                <p>2021 © LeverX, Int. All Rights Reserved.</p>
                <div className={styles.socialNetwork}>
                    <nav>
                    <a href="https://www.facebook.com/leverxgroup.cis"><img src={facebook} alt="Facebook" /></a>
                    <a href="https://www.linkedin.com/company/leverx-group/"><img src={instagram} alt="Instagram" /></a>
                    <a href="https://www.facebook.com/leverxgroup.cis"><img src={telegram} alt="Telegram" /></a>
                    </nav>
                    <p>Support</p>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;