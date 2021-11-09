import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { CardProps } from '../../../interface/interface';

import styles from './styles.module.scss';

const RenderCard: React.FC<CardProps> = ({ img, title, description, id, getId }) => {

    return (
        <Link to={'/article'}>
            <div className={styles.card} onClick={() => getId!(id!)}>
                <div>
                    <img src={img} alt={title} />
                </div>
                <div className={styles.cardContent}>
                    <h6>{title}</h6>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    )
}

export default RenderCard;