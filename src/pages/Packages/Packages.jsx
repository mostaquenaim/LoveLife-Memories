import { useEffect, useState } from 'react';
import ShowPackage from '../../Component/Package/ShowPackage';
import Footer from '../../Component/Footer';
import ShowPackageCat from '../../Component/Package/ShowPackageCat';

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        // Fetch the JSON data from the public folder
        fetch('/package-category.json')
            .then((response) => response.json())
            .then((data) => setPackages(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <div className='container py-24 mx-auto text-center'>
                <h1 className='text-center text-3xl font-bold mt-20'>Discover Our Photography Packages</h1>
                <p className='mt-5 mx-auto max-w-2xl opacity-60 mb-10'>
                    At LoveLife Memories, we are dedicated to preserving your special moments with our photography packages. Explore a range of options, from our standard and elite services to captivating storytelling and female photography. Choose the package that suits your vision, and let us create lasting memories together. Our photographers are driven by love and passion, ensuring each detail is beautifully captured.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10 gap-5'>
                    {packages.map((item, index) => (
                        <ShowPackageCat key={index} item={item} />
                    ))}
                </div>
                {/* <button className='
                btn bg-neutral opacity-50 my-5 text-base-100 
                transition ease-in-out 
                hover:bg-neutral hover:text-base-100 hover:opacity-100
                hover:-translate-y-1 hover:scale-110 
                
                duration-300'>See more details</button> */}
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Packages;