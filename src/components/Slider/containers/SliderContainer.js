import React from 'react';
import { useEffect, useState } from 'react';

import Slider from './../components/index';

const SliderContainers = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const nextBlock = () => {
        setSlideIndex(slideIndex + 1)
    }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         nextBlock()
    //     }, 3000)
    //     return () => clearInterval()
    // }, [])

    return (
        <Slider 
            nextBlock={nextBlock}
            slideIndex={slideIndex}
        />
    )
}

export default SliderContainers;