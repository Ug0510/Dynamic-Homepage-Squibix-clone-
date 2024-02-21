import React from 'react';

const InfoCard = ({ title, imageSrc, description }) => {
  return (
    <div className="col-lg-4 my-4 my-lg-0">
      <div className="card rounded-4 cardgroup text-center mt-5 h-100">
        <div className="py-3"><img src={imageSrc} alt="icon" /></div>
        <div className="card-body p-0">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text px-4 py-lg-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
