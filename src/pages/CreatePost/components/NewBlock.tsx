import React from 'react';

import { NewBlockProps } from './../../../interface/interface';

import styles from './styles.module.scss';

const NewBlock: React.FC<NewBlockProps> = ({ id, blocks, onRemove, handleChange, valueSubtitle, valueTextarea}) => {
        return (
            <div>
                <div className={styles.form__subtitle}>
                    <label htmlFor="subtitles">
                        Enter the subtitle of your article
                    </label>
                    <input
                        value={valueSubtitle}
                        type="text"
                        id={id.toString()}
                        name="subtitles"
                        placeholder="Enter Subtitle"
                        required
                        onChange={handleChange}
                        className={styles.input}
                    /> 
                </div>
                
                <div className={styles.form__textarea}>
                    <label htmlFor="textarea">
                        Tell your story...
                    </label>
                    <textarea
                        value={valueTextarea}
                        id={id.toString()}
                        name="textarea"
                        required
                        onChange={handleChange}
                        className={styles.textarea}
                        ></textarea>
                </div>
                {blocks.length > 1 ? 
                    <button className={styles.delete_files}
                        onClick={onRemove}
                    >Delete</button> : null}
            </div>
        )
}

export default NewBlock;