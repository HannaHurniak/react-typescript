import React from 'react';

import styles from './styles.module.scss';
import iconLeft from './../../../assets/introduction/icon-button/left.png';
import iconRight from './../../../assets/introduction/icon-button/right.png';

const Slider = ({ nextBlock, slideIndex }) => {
    return (
        <>
            <div className={styles.introduction}>
                <div className={styles.sliders}>
                <button className={styles.buttonArrow} onClick={nextBlock}><img src={iconLeft} alt="button" className={styles.img}/></button>
                <button className={styles.buttonArrow} onClick={nextBlock}><img src={iconRight} alt="button" className={styles.img}/></button>
                
                <div className={slideIndex % 2 === 0 ? styles.slider1 : styles.display_none}>
                    <div className={styles.sectionWrapper}>
                    <h4>Free courses from</h4>
                    <h1>LEVERX GROUP</h1>
                    <p>The profession of a programmer is one of the most demanded in the IT field today. Programming training 
                        at LeverX Group is an excellent opportunity to gain 
                        practical knowledge in the most relevant areas in this 
                        area and build a successful  career in our company.</p>
                    <button className={styles.button}>Start Now</button>
                    </div>
                </div>

                <div className={slideIndex % 2 === 0 ? styles.display_none : styles.slider2}>
                    <div className={styles.sectionWrapper}>
                    <h4>Free courses from</h4>
                    <h1>LEVERX GROUP</h1>
                    <p>The profession of a programmer is one of the most demanded in the IT field today. Programming training 
                        at LeverX Group is an excellent opportunity to gain 
                        practical knowledge in the most relevant areas in this 
                        area and build a successful  career in our company.</p>
                    <button className={styles.button}>Start Now</button>
                    </div>
                </div>

                </div>

                <div className={styles.circles__contaner}>
                <div className={styles.slider_circles}>
                    <span className={styles.slider__circles_item}></span> 
                    <span className={styles.slider__circles_item}></span> 
                </div>
                </div>
            </div>

        </>
    )
}

export default Slider;