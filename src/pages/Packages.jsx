import { useEffect, useState } from 'react';
import ShowPackage from '../Component/ShowPackage';
import Footer from '../Component/Footer';

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        // Fetch the JSON data from the public folder
        fetch('/packages.json')
            .then((response) => response.json())
            .then((data) => setPackages(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <div className='my-20'>
                <h1 className='text-center text-3xl font-bold my-5'>Our Packages</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-5'>
                    {packages.map((item, index) => (
                        <ShowPackage key={index} item={item} />
                    ))}
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Packages;