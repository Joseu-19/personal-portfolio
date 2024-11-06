import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5001/api/projects')
  .then((res) => setProjects(res.data))
  .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className="projects-page">
      <div className='projects-container'>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          onCardClick={() => navigate(`/projects/${project.id}`)}
        />
      ))}
      </div>
    </div>
  );
};

export default Projects;