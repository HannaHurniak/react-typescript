import { combineReducers } from 'redux';

import { articlesReducer } from './ArticlesReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    article: articlesReducer,
    isAuth: userReducer
})

export type RootState = ReturnType<typeof rootReducer>;
