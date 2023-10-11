import { Link, useLoaderData } from 'react-router-dom';
import ShowReview from '../Component/ShowReview';
import { SiApache } from "react-icons/si";
import { useEffect, useState } from 'react';
import Footer from '../Component/Footer';

const Reviews = () => {
  // const reviews = useLoaderData()
  const [reviews, setReviews] = useState([])
  const [left, setLeft] = useState(true)
  useEffect(() => {
    fetch('/reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          Reviews
        </h1>
        <Link to='/postReview' className='flex justify-center text-center mx-auto p-2 items-center bg-blue-600 w-48 rounded-lg text-white my-5'>
          <SiApache></SiApache> <span>Write a review</span>
        </Link>
        <div className="flex flex-wrap -m-4">
          {reviews.map((review) => (
            <ShowReview key={review.id} review={review}/>
          ))}
        </div>
      </div>
      {/* <Footer></Footer> */}
    </section>
  );
};

export default Reviews;
