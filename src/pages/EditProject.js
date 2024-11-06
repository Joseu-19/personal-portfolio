import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState({ title: '', description: '', image: '', content: '' });

  useEffect(() => {
    axios.get(`/api/projects/${id}`)
      .then((res) => setProject(res.data))
      .catch((error) => console.error('Error fetching project details:', error));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleUpdateProject = () => {
    axios.put(`/api/projects/${id}`, project)
      .then(() => navigate('/admin'))
      .catch((error) => console.error('Error updating project:', error));
  };

  return (
    <div className="edit-project-page">
      <h1>Edit Project</h1>
      <input type="text" name="title" placeholder="Title" value={project.title} onChange={handleInputChange} />
      <input type="text" name="description" placeholder="Description" value={project.description} onChange={handleInputChange} />
      <input type="text" name="image" placeholder="Image URL" value={project.image} onChange={handleInputChange} />
      <textarea name="content" placeholder="Content" value={project.content} onChange={handleInputChange}></textarea>
      <button onClick={handleUpdateProject}>Update Project</button>
    </div>
  );
};

export default EditProject;
