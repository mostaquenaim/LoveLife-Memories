
const WhyUs = () => {
    return (
        <>
            <div className="bg-base-100">
                <section
                    id="why-choose-us"
                    className="relative block px-6 py-10 md:py-20 md:px-10 border-neutral-900 ">
                    <div className="relative mx-auto max-w-5xl text-center">
                        <span
                            data-aos="zoom-in"
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
                    {/* reasons  */}
                    <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                        {/* reason 1 */}
                        <div
                            data-aos='zoom-in'
                            className="rounded-md border border-neutral-800 bg-primary p-8 text-center shadow">
                            <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md "
                            >
                                <img src="/icons8-professional-photographer-50.png" alt="" />
                            </div>
                            <h3 className="mt-6 text-base-100 text-lg font-semibold">Professional Photography</h3>
                            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-base-100">Our team of photographers is
                                skilled and experienced, ensuring that every moment is captured beautifully.</p>
                        </div>
                        {/* reason 2 */}
                        <div
                            data-aos='zoom-in'
                            className="rounded-md border border-neutral-800 bg-primary p-8 text-center shadow">
                            <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md  "
                            >
                                <img src="/icons8-slr-back-side-50.png" alt="" />
                            </div>
                            <h3 className="mt-6 text-base-100 text-lg font-semibold">Stunning Photography</h3>
                            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-base-100">We focus on capturing every
                                detail, creating stunning visuals that will be cherished for a lifetime.</p>
                        </div>
                        {/* reason 3 */}
                        <div
                            data-aos='zoom-in'
                            className="rounded-md border border-neutral-800 bg-primary p-8 text-center shadow">
                            <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md  "
                            >

                                <img src="/icons8-love-circled-50.png" alt="" />
                            </div>
                            <h3 className="mt-6 text-base-100 text-lg font-semibold">Love and Passion</h3>
                            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-base-100">Our work is driven by love and
                                passion. We care about your special moments as much as you do.</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
                    >
                    </div>
                    <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
                    >
                    </div>
                </section>
            </div>
        </>

    );
};

export default WhyUs;