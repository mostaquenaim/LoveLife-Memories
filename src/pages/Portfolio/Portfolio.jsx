import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Photo from '../../Component/Portfolio/Photo';
import { BsArrowUpRight } from "react-icons/bs";
import { data } from 'autoprefixer';

const Portfolio = () => {
  const [isPhotosSelected, setIsPhotosSelected] = useState(true);
  const [videos, setVideos] = useState([])

  const photos = useLoaderData()

  const [limit, setLimit] = useState(photos.length > 8 ? 8 : photos.length)
  const [videoLimit, setVideoLimit] = useState(8)

  console.log(photos)

  useEffect(() => {
    fetch('/portfolio-videos.json')
      .then(res => res.json())
      .then(data => setVideos(data),setVideoLimit(data.length > 8 ? 8 : data.length))
  }, [])


  const handleToggle = (isPhotos) => {
    setIsPhotosSelected(isPhotos);
  };

  return (
    <div className="container mx-auto pb-10 pt-40">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-primary">Portfolio</h1>
      </header>
      <section className="mt-6 text-center">
        <p className="text-gray-600">
          Welcome to our portfolio page. Explore our collection of photos and videos from various projects and events.
        </p>
      </section>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => handleToggle(true)}
          className={`${isPhotosSelected ? 'bg-primary text-secondary' : 'bg-secondary text-primary'
            } px-4 py-2 rounded-l-lg`}
        >
          Photos
        </button>
        <button
          onClick={() => handleToggle(false)}
          className={`${isPhotosSelected ? 'bg-secondary text-primary' : 'bg-primary text-secondary'
            } px-4 py-2 rounded-r-lg`}
        >
          Videos
        </button>
      </div>
      <div className="mt-8">
        {isPhotosSelected ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-5">
              {
                photos.slice(0, limit).map((photo, index) => (
                  <Photo key={index} item={photo}></Photo>
                ))
              }
            </div>
            <button onClick={() => setLimit(photos.length)} className={limit >= photos.length ? `hidden` : `btn my-5 text-center mx-auto items-center flex`}>Load more photos</button>
            <button
              onClick={() => window.location.href = 'https://www.facebook.com/LovelifeMemoriesBD/photos_albums'}
              className={limit >= photos.length ? `btn my-5 text-center mx-auto items-center flex bg-blue-400` : `hidden`}
            >
              <BsArrowUpRight />
              Explore more
            </button>

          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-5">
              {
                videos.slice(0, videoLimit).map((video, index) => (
                  <Photo key={index} item={video}></Photo>
                ))
              }
            </div>
            <button onClick={() => setVideoLimit(videos.length)} className={videoLimit >= videos.length ? `hidden` : `btn my-5 text-center mx-auto items-center flex`}>Load more</button>
            <button
              onClick={() => window.location.href = 'https://www.facebook.com/LovelifeMemoriesBD/videos'}
              className={videoLimit >= videos.length ? `btn my-5 text-center mx-auto items-center flex bg-blue-400` : `hidden`}
            >
              <BsArrowUpRight />
              Explore more
            </button>

          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
