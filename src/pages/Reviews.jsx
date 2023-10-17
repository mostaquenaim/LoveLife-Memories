import { Link, useLoaderData } from 'react-router-dom';
import ShowReview from '../Component/ShowReview';
import { SiApache } from "react-icons/si";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { useEffect, useState } from 'react';

const Reviews = () => {
  // const reviews = useLoaderData()
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('/reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  return (
    <section className="text-gray-600 body-font text-center my-10">
      <div className="container px-5 pb-10 mx-auto">
        <h1
          data-aos='zoom-in'
          className="text-3xl title-font text-primary font-bold mb-12 text-center mt-20">
          Reviews
        </h1>
        <a
          data-aos='fade-up'
          href='https://www.facebook.com/LovelifeMemoriesBD/reviews' target='_blank'
          className='flex justify-center text-center mx-auto p-2 items-center 
          bg-neutral text-white w-48 rounded-lg gap-3 my-5 hover:text-neutral hover:bg-secondary duration-700'
          rel="noreferrer">
          <FaFacebookF></FaFacebookF> <span>Write a review</span>
        </a>
        <div className="flex flex-wrap -m-4">
          {reviews.map((review) => (
            <ShowReview key={review.id} review={review} />
          ))}
        </div>
      </div>
      <a href="https://www.facebook.com/LovelifeMemoriesBD/reviews" target='_blank' rel="noreferrer">
        <button className='btn text-center hover:bg-neutral hover:text-white duration-500'>
          See Facebook Reviews
        </button></a>
    </section>
  );
};

export default Reviews;
