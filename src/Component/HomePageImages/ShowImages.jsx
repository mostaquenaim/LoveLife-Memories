import React, { useEffect, useState } from 'react';
import MySwiper from '../Swiper/MySwiper';
import TwoCompSwiper from '../Swiper/TwoCompSwiper';
import Images from '../Marquee/Images';
import Marquee from "react-fast-marquee";

const ShowImages = () => {

    const [images, setImages] = useState([]);
    const [images2, setImages2] = useState([]);
    const [clickedImage, setClickedImage] = useState(null);

    useEffect(() => {
        fetch('/images.json')
            .then(res => res.json())
            .then(data => setImages(data));

        fetch('/images2.json')
            .then(res => res.json())
            .then(data => setImages2(data));
    }, []);

    const handleImageClick = (image) => {
        // Set the clicked image when an image is clicked
        setClickedImage(image);
    };

    const closeImageModal = () => {
        // Close the modal by resetting the clicked image
        setClickedImage(null);
    };

    return (
        <>
            <Marquee className="mt-10" pauseOnHover speed={50}>
                {
                    images.map((image, index) => (
                        // <figure key={index} className='relative h-64 '>
                        <img
                            key={index}
                            src={image.url} alt="" className="h-64 rounded-[28px] mr-5 cursor-pointer"
                            onClick={() => handleImageClick(image)}
                        />
                        // </figure>
                    )
                    )
                }
            </Marquee>

            <Marquee className="mt-5" pauseOnHover speed={100}>
                {
                    images2.map((image, index) => (
                        // <figure key={index}>
                        <img
                            key={index} src={image.url} alt="" className="h-64 rounded-[28px] mr-5 cursor-pointer"
                            onClick={() => handleImageClick(image)} />
                        // </figure>
                    )
                    )
                }
            </Marquee>
            {/* Modal to display the clicked image */}
            {clickedImage && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
                    <div className="max-w-3xl w-full p-5 bg-white rounded-lg relative">
                        <img
                            src={clickedImage.url}
                            alt=""
                            className="max-w-full h-auto"
                        />
                        <button
                            onClick={closeImageModal}
                            className="absolute top-2 right-2 text-xl cursor-pointer text-black"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ShowImages;