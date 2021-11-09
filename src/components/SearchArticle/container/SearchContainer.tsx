import React, { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { fetchArticles } from '../../../store/action-creators/action-creators';

import SearchArticles from '../components/index';
import { IArticles, ITags,  } from './../../../interface/interface';


const SearchArticlesContainers: React.FC = () => {

    // const { articlesArt } = useTypedSelector(state => state.article);
    // const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState<string>('');
    const [articles, setArticles] = useState<IArticles[]>([]);
    const [sortArticles, setSortArticles] = useState<string[]>([]);
    const [tags, setTags] = useState<ITags[]>([
        {name: 'Angular', click: false},
        {name: 'JavaScript', click: false},
        {name: 'Design', click: false},
        {name: 'SAP', click: false},
        {name: 'Frontend', click: false},
        {name: 'DevOps', click: false},
        {name: 'Python', click: false},
        {name: 'React', click: false},
        {name: 'Backend', click: false},
        {name: 'Vue', click: false},
        {name: 'C++', click: false},
    ])
    
    const renderArticles = (url: any) => {
        fetch(url)
        .then(response => response.json())
        .then(
            (result) => {
                if (result.length > 8) {
                    // const arr = result.slice(0, 8);
                    // const partOfArt = result.slice(8);
                    // // console.log(partOfArt)
                    // setPartOfArticles(partOfArt);
                    setArticles(result);
                } else {
                    setArticles(result);
                }
            },
            (error) => {
              console.error(error);
            }
        )
    }

    useEffect(() => {
        let url: any = new URL ('http://127.0.0.1:3000/');  
        // dispatch(fetchArticles())
        renderArticles(url);
    }, [])

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const inputText = event.target.value;
        let url = new URL ('http://127.0.0.1:3000/')
            let params: any = {inputValue: inputText, inputTags: sortArticles};
            url.search = new URLSearchParams(params).toString();
            renderArticles(url);
        setInputValue(inputText)
    }, [inputValue])

    const handleClickTag = (index: number) => {
        const tagsArr = [...tags];
        const tag: ITags = tagsArr[index];
        tag.click = tag.click === true ? false : true;

        const sort = [...sortArticles];
        if (tag.click === true) sort.push(tag.name);

        if (tag.click === true) {
            let url = new URL ('http://127.0.0.1:3000/')
            let params: any = {inputValue: inputValue, inputTags: sort};
            url.search = new URLSearchParams(params).toString();
            renderArticles(url);
        } else if (tag.click === false) {
            const sortArr = sort.filter(el => el !== tag.name);
            sort.length = 0;
            let url = new URL ('http://127.0.0.1:3000/')
            let params: any = {inputValue: inputValue, inputTags: sortArr};
            url.search = new URLSearchParams(params).toString();
            renderArticles(url);
            setSortArticles(sortArr);
            setTags(tagsArr);
        }
        setSortArticles(sort);
        setTags(tagsArr);
    }

    const getId = (id: number) => {
        localStorage.setItem('id', id.toString());
    }  

    return (
        <SearchArticles 
            // articlesArt={articlesArt}
            articles={articles}
            tags={tags} 
            handleClickTag={handleClickTag}
            getId={getId} 
            handleChange={handleChange}
            
        />
    )
}

export default SearchArticlesContainers