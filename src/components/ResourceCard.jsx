import React from 'react';
import './ResourceCard.css'; // Make sure the path is correct

const ResourceCard = ({ title, description, link }) => {
  return (
    <div className="resource-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Learn More</a>
    </div>
  );
};

export default ResourceCard;
