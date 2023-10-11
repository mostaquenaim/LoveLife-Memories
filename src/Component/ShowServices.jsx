import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShowServices = ({ service }) => {
  const { image, name, short_description, price, color, id } = service;
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate()

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const bgColor = {
    backgroundColor: color, 
  };
  const OverlayColor = {
    background: `linear-gradient(rgba(0, 0, 0, 0.50), ${color})`,
  };
  const handleClick = (id) =>{
    navigate(`/service/${id}`)
  }
  
  

  return (
    <div 
      className="relative h-64 transition-transform transform hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="h-64 w-full" src={image} alt={name} />
      {isHovered && (
        <div style={OverlayColor} className="absolute inset-0 text-white flex items-center justify-center transition-opacity ">
          <div className="text-center">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="mt-2">{short_description}</p>
            <p className="mt-2">{price}</p>
            <button className={`btn`} style={bgColor} onClick={()=>handleClick(id)}>Check Out</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowServices;
