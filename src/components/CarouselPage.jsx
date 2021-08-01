import React from 'react';

const CarouselPage = ({children, reference}) => {
    return (<div className="carousel__page" ref={reference}>{children}</div>)
}

export default CarouselPage;