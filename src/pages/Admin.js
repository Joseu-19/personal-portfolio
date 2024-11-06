import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: '', description: '', image: '', content: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/projects')
      .then((res) => setProjects(res.data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleAddProject = () => {
    axios.post('/api/projects', newProject)
      .then((res) => setProjects([...projects, res.data]))
      .catch((error) => console.error('Error adding project:', error));
  };

  const handleDeleteProject = (id) => {
    axios.delete(`/api/projects/${id}`)
      .then(() => setProjects(projects.filter((project) => project.id !== id)))
      .catch((error) => console.error('Error deleting project:', error));
  };

  const handleEditProject = (id) => {
    navigate(`/admin/edit/${id}`);
  };

  return (
    <div className="admin-page">
      <h1>Admin Panel</h1>
      <div className="new-project-form">
        <h2>Add New Project</h2>
        <input type="text" name="title" placeholder="Title" value={newProject.title} onChange={handleInputChange} />
        <input type="text" name="description" placeholder="Description" value={newProject.description} onChange={handleInputChange} />
        <input type="text" name="image" placeholder="Image URL" value={newProject.image} onChange={handleInputChange} />
        <textarea name="content" placeholder="Content" value={newProject.content} onChange={handleInputChange}></textarea>
        <button onClick={handleAddProject}>Add Project</button>
      </div>
      <div className="projects-list">
        <h2>Existing Projects</h2>
        {projects.map((project) => (
          <div key={project.id} className="admin-project-card">
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              onCardClick={() => handleEditProject(project.id)}
            />
            <button onClick={() => handleEditProject(project.id)}>Edit</button>
            <button onClick={() => handleDeleteProject(project.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;