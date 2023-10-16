import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { id } = useParams();
    console.log(id)
    const services = useLoaderData()
    console.log(services)
    const [service, setService] = useState({})
    const [images, setImages] = useState([])
    useEffect(() => {
        const res = services.find((service) => service.id == id)
        setService(res)
        setImages(res.images)
    }, [id, services])

    const bgColor = {
        backgroundColor: service.color,
    };

    return (
        <div>
            <div className='my-20'>
                <div className="carousel w-full">
                    {
                        images.map((image, index) => (
                            <div key={index} id={`slide-${index}`} className="carousel-item relative w-full">
                                <img src={image} className="w-full lg:h-screen mf:h-[500px] h-96" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href={index === 0 ? `#slide-${images.length - 1}` : `#slide-${index - 1}`} className="btn btn-circle">❮</a>
                                    <a href={index === images.length - 1 ? `#slide-0` : `#slide-${index + 1}`} className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='m-5'>
                    <h1 className='text-2xl font-bold'>{service.name}</h1>
                    <p>{service.description}</p>
                    <p className='font-semibold'>{service.price}</p>
                    <Link to='/packages'>
                        <button style={bgColor} className="btn my-5">Book now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;