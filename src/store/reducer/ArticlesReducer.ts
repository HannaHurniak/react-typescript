import { ArticlesAction, ArticlesState, ArticlesActionTypes } from './../types/types'

const defaultState: ArticlesState = {
    articlesArt: [],
    isLoading: false,
    error: null
}

export const articlesReducer = (state = defaultState, action: ArticlesAction): ArticlesState => {
    switch (action.type) {
        case ArticlesActionTypes.ARTICLES_REQUEST : 
            return {...state, isLoading: true}
        case ArticlesActionTypes.ARTICLES_SUCCESS : 
            return {...state, articlesArt: action.payload, isLoading: false}
        case ArticlesActionTypes.ARTICLES_FAIL : 
            return {...state, isLoading: false, error: action.payload}
        default: 
            return state;
    }
}