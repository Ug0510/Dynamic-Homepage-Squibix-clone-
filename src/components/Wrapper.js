import React, { useEffect } from 'react';
import Card from './Cards/Card';
import MainCaption from './Other/MainCaption';
import Row from './Other/Row';
import ServiceCard from './Cards/ServiceCard';
import InfoCard from './Cards/InfoCard';
import TechStack from './Other/TechStack';
import { useState } from 'react';
import MyCarousel from './Other/MyCarousel';

const Wrapper = ({data}) => {
  const [wrapperData, setWrapperData] = useState(null);

  useEffect(() => {
      const parsedData = JSON.parse(data);
      setWrapperData(parsedData);
      console.log('here');
  }, [data]);

  
  return (
    <div className='container'>
      <MyCarousel data={data}/> 
      <MainCaption text={wrapperData && wrapperData.section2.heading} />
      <div className="fs-5 text-sm-start text-center mt-4 para" style={{ color: 'var(--tertiary-color)' }}>
      {wrapperData && wrapperData.section2.content}
      </div>

      <div className="py-5">
        <MainCaption text={wrapperData && wrapperData.section3.heading} />
        <div className="fs-5 text-sm-start text-center mt-4 para" style={{ color: 'var(--tertiary-color)' }}>
        {wrapperData && wrapperData.section3.content}        </div>

        

        <Row>
          <Card title={wrapperData && wrapperData.section3.cards.card1.title} description={wrapperData && wrapperData.section3.cards.card1.description} />
          <Card title={wrapperData && wrapperData.section3.cards.card2.title} description={wrapperData && wrapperData.section3.cards.card2.description} />
        </Row>

        <Row>
          <Card title={wrapperData && wrapperData.section3.cards.card3.title} description={wrapperData && wrapperData.section3.cards.card3.description} />
          <Card title={wrapperData && wrapperData.section3.cards.card4.title} description={wrapperData && wrapperData.section3.cards.card4.description} />
        </Row>

        <Row>
          <div className="col-lg-3"></div>
          <Card title={wrapperData && wrapperData.section3.cards.card5.title} description={wrapperData && wrapperData.section3.cards.card5.description} />
        </Row>

        <div className="fs-5 text-sm-start text-center mt-4 para pt-4" style={{ color: 'var(--tertiary-color)' }}>
        {wrapperData && wrapperData.section3.content2}
        </div>
      </div>

      <div className="py-5">
        <MainCaption text={wrapperData && wrapperData.section4.heading} />
        <div className="d-flex gap-4 flex-column">
          <div className="row">

            <ServiceCard
              title={wrapperData && wrapperData.section4.serviceCards.card1.title}
              description={wrapperData && wrapperData.section4.serviceCards.card1.description}
              buttonText="Learn More"
            />
            <ServiceCard
              title={wrapperData && wrapperData.section4.serviceCards.card2.title}
              description={wrapperData && wrapperData.section4.serviceCards.card2.description}
              buttonText="Learn More"
            />
          </div>
          <div className="row">
            <ServiceCard
              title={wrapperData && wrapperData.section4.serviceCards.card3.title}
              description={wrapperData && wrapperData.section4.serviceCards.card3.description}
              buttonText="Learn More"
            />
            <ServiceCard
              title={wrapperData && wrapperData.section4.serviceCards.card4.title} 
              description={wrapperData && wrapperData.section4.serviceCards.card4.description}
              buttonText="Learn More"
            />
          </div>
        </div>
      </div>

      <div className="pb-5">
        <MainCaption text={wrapperData && wrapperData.section5.heading} />
        <div className="row mb-5">
          {
            wrapperData && Object.keys(wrapperData.section5.infoCards).map((card) => {
              const infoCardData = wrapperData.section5['infoCards'][card];
            return (
              <InfoCard
                key={card}
                title={infoCardData.title}
                imageSrc={infoCardData.imageSrc}
                description={infoCardData.description}
              />
            );

            })
          }
        </div>
      </div>

      <TechStack data={data}/>
    </div>
  );
};

export default Wrapper;
