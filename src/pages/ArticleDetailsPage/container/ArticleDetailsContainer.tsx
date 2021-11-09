import React from 'react';
import { useEffect, useState } from 'react';

import { IArticles } from './../../../interface/interface';

import ArticleDetails from '../components/index';

 
const ArticleDetailsContainers: React.FC = () => {

    const [article, setArticle] = useState<IArticles>({
          id: 0,
          title: '',
          description: '',
          stories: [],
          img: '',
          tags: [],
          userName: '',
          date: ''
        })

    useEffect(() => {
      const idArticle = localStorage.getItem('id');
        let url: any = new URL ('http://127.0.0.1:3000/article')
        let params: any = {id: idArticle};
        url.search = new URLSearchParams(params).toString();
        fetch(url)
            .then(response => response.json())
            .then(
                (result) => {
                  setArticle(result)
                },
                (error) => {
                  console.log(error);
                }
            )
    }, [])

    const setTagName = (event: React.MouseEvent<HTMLButtonElement>) => {
        localStorage.setItem('tagName', event.currentTarget.textContent!);
    }

    return (
        <ArticleDetails 
          article={article} 
          setTagName={setTagName}
        />
    )
}

export default ArticleDetailsContainers;