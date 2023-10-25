import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SisterConcerns = () => {
    const sisterConcerns = useLoaderData();

    return (
        <>
            <div className="container mx-auto py-40">
                <h1 className="text-3xl font-bold text-primary text-center mb-8">Sister Concerns</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sisterConcerns.map((sisterConcern, index) => (
                        <div key={index} className="border p-4 rounded-md">
                            <a
                                href={sisterConcern.facebook}
                                target='_blank'
                                rel="noreferrer">
                                <div className="text-center mb-4">
                                    <img src={sisterConcern.image} alt={sisterConcern.name} className="w-36 h-36 mx-auto rounded-full hover:border-2 border-red-600" />
                                </div>
                            </a>
                            <h2 className="text-lg font-bold text-primary text-center mb-2">{sisterConcern.name}</h2>
                             <p className="text-gray-600 text-center">{sisterConcern.tagline}</p>
                            {/* <p className="text-gray-600 text-center">{sisterConcern.description}</p>
                            <ul className="text-gray-600 mt-4">
                                <li>
                                    <strong>Phone:</strong> {sisterConcern.phone}
                                </li>
                                <li>
                                    <strong>Email:</strong> {sisterConcern.email}
                                </li>
                                <li>
                                    <strong>Website:</strong> <a href={sisterConcern.website} target="_blank" rel="noopener noreferrer">{sisterConcern.website}</a>
                                </li>
                            </ul> */}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SisterConcerns;
