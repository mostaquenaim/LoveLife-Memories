import React, { useState, useEffect } from 'react';
import ShowServices from '../Component/ShowServices';
import Footer from '../Component/Footer';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch('/services.json')
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <div className='my-20'>
        <h1 className='text-center text-3xl font-bold my-5'>Our Services</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10'>
          {services.map((service, index) => (
            <ShowServices key={index} service={service} />
          ))}
        </div>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
};

export default Services;
