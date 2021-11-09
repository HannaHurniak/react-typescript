import React from 'react';

import Header from '../../../common components/Header/container/headerContainer';
import SliderContainers from '../../../components/Slider/containers/SliderContainer';
import SearchArticlesContainers from '../../../components/SearchArticle/container/SearchContainer';
import Footer from '../../../common components/Footer/components/index';

const Index: React.FC = () => {
    return (
        <>
            <Header />
            <SliderContainers />
            <SearchArticlesContainers />
            <Footer />
        </>
    )
}

export default Index;
