import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { ArticleDetails } from '../../../interface/interface';

import styles from './styles.module.scss';

const Article: React.FC<ArticleDetails> = ({ article, setTagName }) => {
    return (
        <div className={styles.sectionMain}>
            <div className={styles.sectionWrapper}>
                <div className={styles.navigation}>
                    <Link to='/'>
                        <p>Home page</p>
                    </Link>
                    <span id={styles.span}>&#62;</span><p>Article</p>
                </div>
                <div className={styles.articleContainer}>
                    <div className={styles.articleContent}>
                        <img src={article.img} alt="photo1" />
                    </div>
                    <div>
                        <h4 className={styles.articleTitle}>{article.title}</h4>
                        <div className={styles.stories}>
                            {article.stories.map((elem) => {
                                return <div key={uuidv4()}>
                                    <h6 key={uuidv4()}>{elem.subtitles}</h6>
                                    {elem.text.map((el) => <p key={uuidv4()}>{el}</p>)}
                                </div> 
                            })}
                        </div>
                    </div>
                    <div className={styles.publicationDate}>
                        <p>{article.userName}</p>
                        <p>{article.date}</p> 
                    </div>
                    <div className={styles.articleTags}>
                        {article.tags.map((elem, index) => {
                            return  <Link to='/search'>
                                <button className={styles.tag_elem} key={uuidv4()} onClick={setTagName}>{elem}</button>
                            </Link>
                            })}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Article;