import React from 'react';

const WhyUs = () => {
    return (
        <>
            <div className="bg-base-100">
                <section
                    id="why-choose-us"
                    className="relative block px-6 py-10 md:py-20 md:px-10 border-neutral-900 ">
                    <div className="relative mx-auto max-w-5xl text-center">
                        <span
                            data-aos="fade-up"
                            className="text-primary my-3 flex items-center justify-center uppercase tracking-wider text-3xl font-bold">
                            Why Choose Us
                        </span>
                        <h2
                            data-aos="fade-up"
                            className="block w-full bg-black bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                            Capturing Moments, Creating Memories
                        </h2>
                        <p
                            data-aos="fade-up"
                            className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                            At LoveLife Memories, we are committed to preserving your most precious moments. Our dedication to quality,
                            creativity, and service sets us apart.
                        </p>
                    </div>
                    <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-md border border-neutral-800 bg-primary p-8 text-center shadow">
                            <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md "
                            // style="background-image: linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%); border-color: rgb(93, 79, 240);"
                            >
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-camera" width="24"
                                    height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <line x1="8" y1="9" x2="16" y2="9"></line>
                                    <line x1="12" y1="5" x2="12" y2="9"></line>
                                    <line x1="7" y1="20" x2="17" y2="20"></line>
                                    <line x1="7" y1="18" x2="17" y2="18"></line>
                                    <line x1="12" y1="14" x2="12" y2="20"></line>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg> */}
                                <img src="/icons8-professional-photographer-50.png" alt="" />
                            </div>
                            <h3 className="mt-6 text-base-100 text-lg font-semibold">Professional Photography</h3>
                            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-base-100">Our team of photographers is
                                skilled and experienced, ensuring that every moment is captured beautifully.</p>
                        </div>
                        <div className="rounded-md border border-neutral-800 bg-primary p-8 text-center shadow">
                            <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md  "
                            // style="background-image: linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%); border-color: rgb(93, 79, 240);"
                            >
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-image" width="24"
                                    height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                                    <circle cx="8.5" cy="8.5" r="1"></circle>
                                    <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
                                    <line x1="8" y1="12" x2="8" y2="12.01"></line>
                                    <line x1="8" y1="16" x2="8" y2="16.01"></line>
                                </svg> */}
                                <img src="/icons8-slr-back-side-50.png" alt="" />
                            </div>
                            <h3 className="mt-6 text-base-100 text-lg font-semibold">Stunning Photography</h3>
                            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-base-100">We focus on capturing every
                                detail, creating stunning visuals that will be cherished for a lifetime.</p>
                        </div>
                        <div className="rounded-md border border-neutral-800 bg-primary p-8 text-center shadow">
                            <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md  "
                            // style="background-image: linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%); border-color: rgb(93, 79, 240);"
                            >
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="24"
                                    height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M17 3a5 5 0 0 0 -5 5a5 5 0 0 0 2 4a5 5 0 0 1 2 4a5 5 0 0 1 -2 4a5 5 0 0 0 -2 4a5 5 0 0 0 -5 5"></path>
                                    <line x1="12" y1="17" x2="12" y2="17.01"></line>
                                </svg> */}
                                <img src="/icons8-love-circled-50.png" alt="" />
                            </div>
                            <h3 className="mt-6 text-base-100 text-lg font-semibold">Love and Passion</h3>
                            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-base-100">Our work is driven by love and
                                passion. We care about your special moments as much as you do.</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
                    // style="background-image: linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%); border-color: rgba(92, 79, 240, 0.2);"
                    >
                    </div>
                    <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
                    // style="background-image: linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%); border-color: rgba(92, 79, 240, 0.2);"
                    >
                    </div>
                </section>
            </div>
        </>

    );
};

export default WhyUs;