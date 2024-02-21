import React from 'react';

const ServiceCard = ({ title, description, buttonText }) => {
  return (
    <div className="col-lg-6 my-4 my-lg-0 aos-init" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200">
      <div className="card rounded-4  cardgroup text-center mt-5 h-100">
        <div className="card-body p-3">
          <h5 className="card-title service-head fw-bold">{title}</h5>
          <p className="card-text p-4" >{description}</p>
          <button className="learn-more">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
