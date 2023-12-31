import { useState, useEffect } from 'react';
import ShowServices from '../Component/ShowServices';
import { useContext } from 'react';
import { ProjectContext } from '../Component/Context/Provider';

const Services = () => {
  const [services, setServices] = useState([]);
  const { setLoading } = useContext(ProjectContext);

  useEffect(() => {
    setLoading(true);

    // Fetch the JSON data from the public folder
    fetch('/services.json')
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Make sure loading is set to false even if there's an error
      });
  }, [setLoading]);


  return (
    <>
      <div className='my-20'>

        {/* <Carousel>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img src="/background.jpg" alt="" />
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 2
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 3
          </div>
        </Carousel> */}
        {/* <Card>
          <div className="card-body">
            Your card content here
          </div>
        </Card> */}


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
