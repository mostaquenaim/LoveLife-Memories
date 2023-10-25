import { useEffect, useState } from 'react';
import ShowPackage from '../../Component/Package/ShowPackage';
import Footer from '../../Component/Footer';
import ShowPackageCat from '../../Component/Package/ShowPackageCat';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ProjectContext } from '../../Component/Context/Provider';
// import { useRoutes } from 'react-router-dom';
import { ImCross } from "react-icons/im";
import FAQ from '../../Component/FAQ';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    const [specialPackages, setSpecialPackages] = useState([]);
    const [clickedImage, setClickedImage] = useState(null)
    const navigate = useNavigate()

    const { setLoading } = useContext(ProjectContext);

    useEffect(() => {
        setLoading(true);

        // Fetch the JSON data from the public folder
        fetch('/package-category.json')
            .then((response) => response.json())
            .then((data) => {
                setPackages(data);
                // setLoading(false); // Set loading to false after data is fetched
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false); // Make sure loading is set to false even if there's an error
            });

        fetch('/packages-special.json')
            .then((response) => response.json())
            .then((data) => {
                setSpecialPackages(data);
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false); // Make sure loading is set to false even if there's an error
            });
    }, [setLoading]);


    const handleClick = (id) => {
        navigate(`/show-package/${id}`)
    }

    return (
        <div>
            <div className='container py-24 mx-auto text-center'>
                <h1 className='text-center text-3xl font-bold mt-20 text-primary'>Discover Our Photography Packages</h1>
                <p className='mt-5 mx-auto max-w-2xl opacity-60 mb-10'>
                    At LoveLife Memories, we are dedicated to preserving your special moments with our photography packages. Explore a range of options, from our standard and elite services to captivating storytelling and female photography. Choose the package that suits your vision, and let us create lasting memories together. Our photographers are driven by love and passion, ensuring each detail is beautifully captured.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-5'>
                    {packages.map((item, index) => (
                        <ShowPackageCat key={index} item={item}
                            handleClick={handleClick}
                        />
                    ))}
                </div>

                <div className='flex flex-col md:flex-row justify-center mx-auto gap-5'>
                    {/* {specialPackages.map((item, index) => (
                        <div key={index} data-aos="fade-down"
                            className="shadow-lg p-5"
                        >
                            <figure className='relative h-[400px] w-full bg-black'>
                                <img src={item.image} alt="" className='h-[400px] w-full bg-black opacity-20' />
                                {/* <div className='absolute h-full bg-black z-20 w-full'></div> 
                                <div className="transition absolute inset-0 flex flex-col items-center justify-end text-center group">
                                    <h2 className="text-lg font-bold text-base-100 group-hover:-translate-y-48 duration-500 uppercase">{item.name}</h2>
                                    <p className='opacity-0 group-hover:opacity-80 group-hover:-translate-y-48 duration-500 text-white px-5'>{item.description}</p>
                                    <button
                                        onClick={() => setClickedImage(item.image)}
                                        className=" 
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
                    ))} */}
                </div>
                {clickedImage && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
                        <div className="max-w-3xl w-1/2 p-5 bg-white rounded-lg relative">
                            <img
                                src={clickedImage}
                                alt=""
                                className="w-1/2 mx-auto"
                            />
                            <button
                                onClick={() => setClickedImage(null)}
                                className="absolute top-10 right-2 text-xl cursor-pointer text-black"
                            >
                                <ImCross></ImCross>
                            </button>
                        </div>
                    </div>
                )}

                <div className="mt-10 text-2xl font-semibold text-primary">
                    Ready to capture your special moments?
                </div>
                <p className="opacity-60 max-w-xl mx-auto mt-3">
                    Contact us today to book your photography session and create beautiful memories that last a lifetime.
                </p>

            </div>
            <FAQ></FAQ>
        </div>
    );
};

export default Packages;

