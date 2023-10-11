import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Auth/AuthProvider';

const ContactForm = ({headerText='', topic=''}) => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    // Show a SweetAlert notification after submission
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: `Your ${topic} has been sent.`,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
    }).then((result) => {
      console.log(result)
    });

    // Clear the form fields after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="mt-24 w-2/3 md:1/2 lg:w-1/3 mx-auto p-5 shadow-md rounded-lg">
      <h1>{headerText}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.displayName}
            onChange={handleChange}
            className="border border-gray-400 rounded w-full py-2 px-3"
            required
            disabled 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="border border-gray-400 rounded w-full py-2 px-3"
            required
            disabled 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">
            {topic}:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-400 rounded w-full py-2 px-3 h-32"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
