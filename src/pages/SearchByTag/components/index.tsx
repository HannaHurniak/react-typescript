import React from 'react';

import styles from './styles.module.scss';
import { SearchByTagProps } from '../../../interface/interface';

import Header from '../../../common components/Header/container/headerContainer';
import Footer from '../../../common components/Footer/components/index';
import RenderCard from '../../../common components/Card/components/index';

import icon from './../../../assets/articles/icon/icon-search.png';

const SearchByTag: React.FC<SearchByTagProps>= ({ articles, tagName, handleChange, getId }) => {
    return (
        <>
            <Header />
                <main className={styles.main}>
                    <div className={styles.searchingContainer}>
                        <div className={styles.sectionWrapper}>
                            <div className={styles.search__container}>
                                <h4>Searching by tag</h4><span>:</span>
                                <p className={styles.searchTagName}>{tagName}</p>
                            </div>
                            <form className={styles.searchForm}>
                                <input className={styles.searchForm__searchByTag} 
                                    type="text" 
                                    placeholder="Search for article" 
                                    onChange={handleChange}
                                />
                                <img src={icon} alt="search" />
                            </form>
                            <div className={styles.articles__container}>
                                {articles ? articles.map(article => 
                                    <RenderCard key={article.id} title={article.title} description={article.description} img={article.img}
                                        getId={() => getId(article.id)}
                                />) : null}
                            </div>
                        </div>
                    </div>
                </main>
            <Footer />

        </>
    )
}

export default SearchByTag;