const express = require('express');
const cors = require('cors');
const path = require('path');

const data = require('./data-base/data');
const articles = [...data];
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const USERS = [{ login: 'admin', password: 'admin' }, { login: 'guest', password: '12345'}];

// app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept')
    next();
});

app.use(express.urlencoded({ extended: false })); // для работы с query string из url
app.use(express.json()); //parse мои req в json

app.get('/', (req, res) => {
    const { inputValue, inputTags } = req.query;
    console.log(inputValue, inputTags);
    if(!inputValue && !inputTags) {
        res.send(articles);
    } else if (inputValue && !inputTags) {
        const sortArticles = articles.filter(article => {
            if(article.title.toLowerCase().trim().includes(inputValue.toLowerCase().trim())) {
                return true;
            }
        })
        res.send(sortArticles);
    } else if (!inputValue && inputTags) {
        const sortTags = inputTags.split(',');
        const sortArticles = articles.filter(article => {
            return sortTags.filter(tag => {
                if (!article.tags.includes(tag)) {
                    return true;
                }
            }).length == 0
        })
        res.send(sortArticles);
    } else if (inputValue && inputTags) {
        const sortTags = inputTags.split(',');
        const byTagsArray = [];
        const byTitleArray = articles.filter(article => article.title.toLowerCase().includes(inputValue.toLowerCase()));
        byTitleArray.forEach(article => {
            sortTags.forEach(tag => {
                if(article.tags.includes(tag)) {
                    byTagsArray.push(article);
                }
            })
        });
        res.send(byTagsArray);
    }

});

app.get('/search', (req, res) => {
    const {inputValue, tagValue} = req.query;
    const sortArticles = articles.filter(article => {
        if(article.tags.includes(tagValue) && article.title.toLowerCase().trim().includes(inputValue.toLowerCase().trim())) {
            return true;
        }
    })
    res.send(sortArticles);
});

app.get('/article', (req, res) => {
    const {id} = req.query;
    console.log(id);
    const article = articles.filter(article => article.id == id);
    console.log(article[0]);
    res.send(article[0]);
});

app.post('/auth', (req, res) => { 
    const { login, password } = req.body;
    const auth = USERS.filter((user) => {
        if (user.login === login && user.password === password) {
            return user;
        }
    });

    if (auth.length === 1) {
        res.json({ "auth": true, "login": login });
    } else {
        res.json('User does not exist or wrong username');
    }

});

app.post('/',  (req, res) => {
    const article = req.body;
    article.id = articles.length + 1;
    articles.push(article);
    res.status(201).send(article);
});

module.exports = app;

