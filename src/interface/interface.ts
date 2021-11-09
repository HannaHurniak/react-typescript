import { SyntheticEvent } from "react";

export interface HeaderProps {
    isAuth: boolean;
    handleSignOut(): void;
}
export interface IArticles {
    id?: number;
    title: string;
    description: string;
    stories: IStory[] ;
    img: string;
    tags: string[];
    userName: string | null;
    date?: string | Date;
}
export interface IStory {
    subtitles: string;
    text: string[];
}
export interface ITags {
    name: string;
    click: boolean;
}
export interface SearchArticlesProps {
    articlesArt?: any[];
    articles: IArticles[];
    tags: ITags[];
    handleClickTag(index: number): void;
    getId(id: number | undefined): void;
    handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
export interface ArticleDetails {
    article: IArticles;
    setTagName(event: React.MouseEvent<HTMLButtonElement>): void;
}
export interface IBlocks {
    subtitles: string;
    textarea: string;
}

export interface CreatePostProps {
    blocks: IBlocks[];
    handleAddNewBlock(): void;
    handleBlockDelete(index: number): void;
    handleClickTag(index: number): void;
    tags: ITags[];
    handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
    title: string;
    image: string;
    handleImageChange(event: React.ChangeEvent<HTMLInputElement>): void;
    handleDeleteImage(): void;
    createNewPost(): void;
    errorMessage: string;
}
export interface NewBlockProps {
    blocks: IBlocks[];
    onRemove(): void;
    handleChange(event: any): void;
    index?: string | undefined;
    valueSubtitle: string;
    valueTextarea: string;
    id: number;
}

export interface SearchByTagProps {
    articles: IArticles[];
    tagName: string;
    getId(id: number | undefined): void;
    handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

export interface CardProps {
    img: string;
    title: string;
    description: string;
    getId?(id: number): void;
    id?: number;
}
export interface SignInProps {
    handleChange(): void;
}
export interface PropsSignInIndex {
    handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
    handleSubmit(event: SyntheticEvent): void;
    isAuth: boolean;
}