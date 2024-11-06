import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios.get(`/api/projects/${id}`)
      .then((res) => setProject(res.data))
      .catch((error) => console.error('Error fetching project details:', error));
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project-detail">
      <img src={project.image} alt={project.title} className="project-detail-image" />
      <h1 className = 'project-content'>{project.title}</h1>
      <p className='project-content'>{project.description}</p>
      <div className="project-content">{project.content}</div>
    </div>
  );
};

export default ProjectDetail;