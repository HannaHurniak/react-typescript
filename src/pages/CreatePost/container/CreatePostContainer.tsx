import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { ITags, IBlocks, IArticles } from '../../../interface/interface';

import CreatePost from '../components/index';

const IndexContainers: React.FC = () => {

    const { userName } = useTypedSelector(state => state.isAuth);

    const [errorMessage, setErrorMessage] = useState('')
    const [blocks, setBlocks] = useState<IBlocks[]>([]);
    const [image, setImage] = useState('');
    const [title, setTitle] = useState<string>('');
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
                  ]);

    const newBlock = () => {
        const newBlock = {
            subtitles: '',
            textarea: ''
        }
        setBlocks([...blocks, newBlock])
    }

    useEffect(() => {
        newBlock();
    }, [])

    const handleAddNewBlock = useCallback(() => {
        newBlock();
    }, [blocks]);

    const handleBlockDelete = useCallback((index) => {
        event?.preventDefault();
        const updateBlocks = [...blocks];
        updateBlocks.splice(index, 1);
        setBlocks(updateBlocks);
    }, [blocks]);

    const handleClickTag = useCallback((index) => {
        const tagsArr = [...tags];
        const tag = tagsArr[index];
        tag.click = tag.click === true ? false : true;

        setTags(tagsArr)
    }, [tags]);

    const handleChange = (event: any) => {
        const {name, value, id} = event.target;
        console.log()
        if (name === 'title') {
            setTitle( value );
        } else {
            const idId: number = +id;
            const updateBlocks = [...blocks];
            const elem = updateBlocks[idId];
            if (name === 'subtitles') {
                elem.subtitles = value;
                setBlocks(updateBlocks);
            } else {
                elem.textarea = value;
                setBlocks(updateBlocks);
            }
            
        } 
    }

    const handleImageChange = useCallback((event) => {
        const target = event.target;
        const reader = new FileReader();
        const file = target?.files[0];
    
        reader.readAsBinaryString(file);
        reader.onload = (event: any) => {
            let createImage = btoa(event.target.result);
            let newImage: any = `data:image/(png|jpg|jpeg|pdf);base64,${createImage}`;
            setImage(newImage);
        }
    }, [image]);

    
    const createNewPost = () => {
        const newPost: IArticles = {
            title: '',
            description: '', 
            stories: [],
            img: '',
            tags: [],
            userName: '',
        };
        const date = new Date();
        let formatDate = new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
        const text = blocks[0].textarea.trim();
        newPost.date = formatDate.format(date);
        newPost.description = text.length > 123 ? `${text.substr(0, 123)}...` : text;
        newPost.title = title.trim();
        newPost.stories = [];
        blocks.forEach((block) => {
            newPost.stories.push({subtitles: block.subtitles.trim(), text: [block.textarea.trim()]})
        })
        newPost.tags = tags.filter(tag => tag.click === true).map(tag => tag.name);
        newPost.userName = userName;
        newPost.img = image;

        const checkStories = newPost.stories.filter(story => story.subtitles === '' || story.text[0] === '')

        if (newPost.title && checkStories.length === 0 && newPost.tags.length > 1 && newPost.img !== '') {
            (async function addNewPost() {
                let response, result;
                try {
                    response = await fetch('http://127.0.0.1:3000/', {
                                    method: 'POST',
                                    body: JSON.stringify(newPost),
                                    headers: {
                                        'content-type': 'application/json'
                                    }
                                });
                    result = await response.json();
                    localStorage.setItem('id', result.id);
                    console.log(result)
                    if(response.status === 201) {
                        setTimeout(() => {
                            window.location.href = '/article';
                        }, 1000)
                    }
                } catch (error) {
                    console.error(error);
                }
            })()
        } else {
            if (newPost.tags.length < 2) {
                setErrorMessage('Please, select 2 options');
            } else {
                setErrorMessage('Invalid form');
            } 
        }
    }

    const handleDeleteImage = useCallback(() => {
        setImage('');
    }, [image])

    return (
        <CreatePost 
            blocks={blocks}
            handleAddNewBlock={handleAddNewBlock}
            handleBlockDelete={handleBlockDelete}
            handleClickTag={handleClickTag}
            tags={tags}
            handleChange={handleChange}
            title={title}
            image={image}
            handleImageChange={handleImageChange}
            handleDeleteImage={handleDeleteImage}
            createNewPost={createNewPost}
            errorMessage={errorMessage}
        />
    )
}

export default IndexContainers;