// src/pages/LatestProjects.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import axios from 'axios';
import './LatestProjects.css'; // Assuming you have a CSS file for styling

const LatestProjects = () => {
  const [latestProjects, setLatestProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects/latest')
      .then((res) => setLatestProjects(res.data))
      .catch((error) => console.error('Error fetching latest projects:', error));
  }, []);

  return (
    <div className="latest-projects-container">
      {/* <h2>Latest Projects</h2> */}
      <div className="latest-projects">
        {latestProjects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id} className="latest-project-card">
            <img src={project.image} alt={project.title} className="latest-project-image" />
            <h3 className="latest-project-title">{project.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestProjects;
