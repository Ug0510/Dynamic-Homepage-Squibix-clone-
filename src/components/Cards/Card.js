import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className='col-lg-6 my-4 px-3 mx-0'>
      <div className="card rounded-4 services-card cardgroup text-center mt-5 h-100">
      <div className="card-body p-3">
        <h5 className="card-title service-head fw-bold">{title}</h5>
        <p className="card-text p-4 " style={{ opacity: 0.7 }}>{description}</p>
      </div>
    </div>
    </div>
  );
};

export default Card;
