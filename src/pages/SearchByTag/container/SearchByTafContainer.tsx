import React from 'react';
import { useCallback, useEffect, useState } from 'react';

import { IArticles } from '../../../interface/interface';

import SearchByTag from '../components/index';

const SearchByTagContainers: React.FC = () => {

    const [articles, setArticles] = useState<IArticles[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [tagName, setTagName] = useState<string>('');

    const getSortArticle = (url: any) => {
      fetch(url)
            .then(response => response.json())
            .then(
                (result) => {
                  setArticles(result)
                },
                (error) => {
                  console.log(error);
                }
            )
    }

    useEffect(() => {
      const tagName = localStorage.getItem('tagName');
      setTagName(tagName!);
        let url: any = new URL ('http://127.0.0.1:3000/search')
        let params: any = {inputValue: '', tagValue: tagName};
        url.search = new URLSearchParams(params).toString();
        
        getSortArticle(url);
    }, [])

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
      const inputText = event.target.value;
      let url = new URL ('http://127.0.0.1:3000/search')
          let params = {inputValue: inputText, tagValue: tagName};
          url.search = new URLSearchParams(params).toString();

      getSortArticle(url);
      setInputValue(inputText);
    }, [inputValue])

    const getId = (id: number) => {
      const str = id.toString();
      localStorage.setItem('id', str)
    }  

    return (
        <SearchByTag 
          articles={articles} 
          tagName={tagName}
          handleChange={handleChange}
          getId={getId}
        />
    )
}

export default SearchByTagContainers;