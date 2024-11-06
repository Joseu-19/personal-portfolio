import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ image, title, description, onCardClick }) => {
  return (
    <div className="project-card" onClick={onCardClick}>
      <img src={image} alt={title} className="project-card-image" />
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;