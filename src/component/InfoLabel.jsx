import React, { useState, useRef, useEffect } from 'react';
import './InfoLabel.css';

const InfoLabel = ({ label, imageSrc }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const infoIconRef = useRef(null);
  const tooltipRef = useRef(null);

  // Handle click events on the info icon
  const handleIconClick = () => {
    setTooltipVisible(!tooltipVisible);
  };
  // Handle click events anywhere in the document to hide the tooltip
  const handleClickOutside = (event) => {
    if (tooltipRef.current && !tooltipRef.current.contains(event.target) && event.target !== infoIconRef.current) {
      setTooltipVisible(false);
    }
  };

  useEffect(() => {
    // Add a click event listener to the document when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Remove the click event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="info-label">
      <label>{label} <span className="info-icon" onClick={handleIconClick} ref={infoIconRef}>i</span></label>
      {tooltipVisible && (
        <div className={`info-tooltip ${tooltipVisible ? 'visible' : ''}`} ref={tooltipRef}>
          <img src={imageSrc} alt="Info" />
        </div>
      )}
    </div>
  );
};

export default InfoLabel;
