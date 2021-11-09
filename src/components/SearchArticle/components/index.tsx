import React from 'react';

import RenderCard from '../../../common components/Card/components/index';

import { SearchArticlesProps } from './../../../interface/interface';

import styles from './styles.module.scss';
import icon from './../../../assets/articles/icon/icon-search.png';

const SearchArticles: React.FC<SearchArticlesProps> = ({ articles, tags, handleClickTag, getId, handleChange }) => {
    return (
        <div className={styles.articles}>
          <div className={styles.sectionWrapper}>
            <h3>Interesting articles by LeverX Group</h3>
            <form className={styles.searchForm}>
              <input className={styles.searchForm__input} type="text" placeholder="Search for article" onChange={handleChange}/>
              <img src={icon} 
                    alt="search"
                    className={styles.img}
              />
            </form>
            <div className={styles.articles__tags}>
              {tags.map((tag, index) => 
                <button className={`${tag.click === true ? styles.tagActive : styles.tag}`} 
                    key={tag.name} 
                    onClick={() => handleClickTag(index)}
                  >
                    {tag.name}
                </button>)
              }
            </div>
            <div className={styles.articles__container}>
              {articles?.map(article => 
                <RenderCard key={article.id} title={article.title} description={article.description} img={article.img} id={article.id}
                  getId={getId}
              />)}
            </div>

            <div className={styles.showMore}>
              <button className={styles.button__showMore}>Show more</button>
            </div>
          </div>
        </div>

    )
}

export default SearchArticles;