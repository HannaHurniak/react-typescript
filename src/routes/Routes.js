import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import ROUTES from './RouteNames';

import IndexContainers from '../pages/Index/component/index';
import SignInContainers from '../pages/SignIn/container/signInContainer';
import ArticleDetailsContainers from '../pages/ArticleDetailsPage/container/ArticleDetailsContainer';
import SearchByTagContainers from '../pages/SearchByTag/container/SearchByTafContainer';
import CreatePostContainer from '../pages/CreatePost/container/CreatePostContainer'; 

const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.MAIN_PAGE} component={IndexContainers}/>
            <Route path={ROUTES.SIGN_IN_PAGE} component={SignInContainers}/>
            <Route path={ROUTES.ARTICLE_DETAILS} component={ArticleDetailsContainers}/>
            <Route path={ROUTES.SEARCH_BY_TAG} component={SearchByTagContainers}/>
            <Route path={ROUTES.CREATE_POST_PAGE} component={CreatePostContainer}/>
        </Switch>
    );
}

export default Routes;