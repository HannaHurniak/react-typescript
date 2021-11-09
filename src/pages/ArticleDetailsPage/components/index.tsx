import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ArticleDetails } from '../../../interface/interface';

import Header from '../../../common components/Header/container/headerContainer';
import Footer from '../../../common components/Footer/components/index';
import Article from './article';

const ArticleDetails: React.FC<ArticleDetails> = ({ article, setTagName }) => {

    return (
        <>
            <Header />
                {article.title ? <Article article={article} key={uuidv4()} setTagName={setTagName}/> : null}
            <Footer />
        </>
    )
}

export default ArticleDetails;