import { Link, useLoaderData } from 'react-router-dom';
import ShowReview from '../Component/ShowReview';
import { SiApache } from "react-icons/si";
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
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center mt-20">
          Reviews
        </h1>
        <a href='https://www.facebook.com/LovelifeMemoriesBD/reviews' target='_blank'
          className='flex justify-center text-center mx-auto p-2 items-center bg-blue-600 w-48 rounded-lg text-white my-5'
          rel="noreferrer">
          <SiApache></SiApache> <span>Write a review</span>
        </a>
        <div className="flex flex-wrap -m-4">
          {reviews.map((review) => (
            <ShowReview key={review.id} review={review} />
          ))}
        </div>
      </div>
      <a href="https://www.facebook.com/LovelifeMemoriesBD/reviews" target='_blank' rel="noreferrer">
        <button className='btn text-center'>
          See Facebook Reviews
        </button></a>
    </section>
  );
};

export default Reviews;
