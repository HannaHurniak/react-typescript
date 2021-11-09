import { ArticlesAction, ArticlesActionTypes } from './../types/types';
import { Dispatch } from 'redux';
import axios from 'axios';


export const fetchArticles = () => {
    return async (dispatch: Dispatch<ArticlesAction>) => {
        try {
            dispatch({type: ArticlesActionTypes.ARTICLES_REQUEST});
            const response = await axios.get('http://127.0.0.1:3000/');
            dispatch({
                type: ArticlesActionTypes.ARTICLES_SUCCESS, 
                payload: response.data});
        } catch (error: any) {
            dispatch({
                type: ArticlesActionTypes.ARTICLES_FAIL, 
                payload: 'Error'})
        }
    }
}