export enum ArticlesActionTypes {
    ARTICLES_REQUEST = 'ARTICLES_REQUEST',
    ARTICLES_SUCCESS = 'ARTICLES_SUCCESS',
    ARTICLES_FAIL = 'ARTICLES_FAIL',
}

export interface ArticlesState {
    articlesArt: any[];
    isLoading: boolean;
    error: null | string;
}

interface ArticlesActionREQUEST {
    type: ArticlesActionTypes.ARTICLES_REQUEST;
}
interface ArticlesActionSUCCESS {
    type: ArticlesActionTypes.ARTICLES_SUCCESS;
    payload: any[];
}
interface ArticlesActionFAIL {
    type: ArticlesActionTypes.ARTICLES_FAIL;
    payload: string;
}

export type ArticlesAction = ArticlesActionREQUEST | ArticlesActionSUCCESS | ArticlesActionFAIL;
