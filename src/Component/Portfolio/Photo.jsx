import React from 'react';
import { Link } from 'react-router-dom';

const Photo = ({ item }) => {
    const { image, viewUrl, date, data } = item;

    return (
        <div className="shadow-lg">
            <figure className="relative h-[500px] w-full bg-black group rounded-xl">
                <img src={image} alt="" className="h-[500px] w-full bg-black opacity-50 rounded-xl" />
                <div className="transition absolute inset-0 flex justify-between items-end text-end m-5">
                    <span className='text-base-100 opacity-0 group-hover:opacity-60 duration-500'>{date}</span>
                    <a href={viewUrl} target='_blank' className="btn opacity-0 group-hover:opacity-100 bg-secondary text-primary hover:bg-primary hover:text-secondary" rel="noreferrer">View</a>
                    
                </div>
            </figure>
        </div>
    );
};

export default Photo;
