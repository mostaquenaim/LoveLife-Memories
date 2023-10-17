import React from 'react';

const ShowPackageCat = ({ item }) => {
    const { name, image, id } = item
    return (
        <>
            <div data-aos="fade-down"
                className="shadow-lg p-10"
            >
                <figure className='relative h-[400px] w-full bg-black'>
                    <img src={image} alt="" className='h-[400px] w-full bg-black opacity-50' />
                    {/* <div className='absolute h-full bg-black z-20 w-full'></div> */}
                    <div className="transition absolute inset-0 flex flex-col items-center justify-end text-center group">
                        <h2 className="text-lg font-bold text-base-100 group-hover:-translate-y-48 duration-500 uppercase">{name}</h2>
                        <button className=" 
                        opacity-0
                        group-hover:opacity-100
                        btn mt-4 text-primary bg-secondary 
                        group-hover:-translate-y-48 
                        delay-300 duration-500
                        hover:bg-primary hover:text-secondary
                        ">
                            CHECK OUT
                        </button>
                    </div>
                </figure>

            </div>
        </>
    );
};

export default ShowPackageCat;