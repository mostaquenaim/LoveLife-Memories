import React from 'react';
import CenteredSwiper from '../Swiper/CenteredSwiper';

const OurWork = () => {
    return (
        <div className='items-center text-center mx-auto my-10 space-y-3'>
            <h1 className='text-4xl font-bold text-primary '>Our work</h1>
            <CenteredSwiper></CenteredSwiper>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/eJ1yj4WaupE?si=HayVr_Ha8fvCAKUn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </div>
    );
};

export default OurWork;