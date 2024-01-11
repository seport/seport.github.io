import React, { PropsWithChildren } from 'react';

const CarouselPage = ({ children, reference }: PropsWithChildren<{ reference?: React.MutableRefObject<undefined> }>) => {
    return (<div className="carousel__page" ref={reference}>{children}</div>)
}

export default CarouselPage;