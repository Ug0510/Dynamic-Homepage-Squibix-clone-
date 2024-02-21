import React, { useState, useEffect } from 'react';
import MainCaption from './MainCaption';
import TechCard from '../Cards/TechCard';

const TechStack = ({data}) => {
  const [selectedTech, setSelectedTech] = useState('Frontend');
  const [techStackData, setTechStackData] = useState(null);

  useEffect(() => {
      const parsedData = JSON.parse(data);
      setTechStackData(parsedData && parsedData['section6']);
  }, [data]);

  const handleTechChange = (tech) => {
    setSelectedTech(tech);
  };

  return (
    <div className="pb-5">
      <MainCaption text={techStackData && techStackData.heading} />
      <div className="tech-container">
        <div className="tech-buttons-container">
          {techStackData &&
            Object.keys(techStackData.tabs).map((tabKey) => (
              <div
                key={tabKey}
                className={`tech-button ${
                  selectedTech === techStackData.tabs[tabKey].title ? 'active' : ''
                }`}
                onClick={() => handleTechChange(techStackData.tabs[tabKey].title)}
              >
                {techStackData.tabs[tabKey].title}
              </div>
            ))}
        </div>
        <div className="tech-content">
          {techStackData &&
            Object.keys(techStackData.tabs).map((tabKey) => (
              <div key={tabKey} className='tech-content' style={{ display: selectedTech === techStackData.tabs[tabKey].title ? 'flex' : 'none' }}>
                {Object.keys(techStackData.tabs[tabKey]).map((cardKey) => {
                  if (cardKey !== 'title') {
                    return (
                      <TechCard
                        key={cardKey}
                        imgSrc={techStackData.tabs[tabKey][cardKey].imageSrc}
                        title={techStackData.tabs[tabKey][cardKey].title}
                      />
                    );
                  }
                  return null;
                })}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
