import React from 'react';
import JobForm from '../JobForm.tsx';
import { useNavigate } from 'react-router-dom';

const AddJobPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    // Implement save functionality (e.g., API call)
    console.log('Job added:', formData);
    navigate('/jobs');
  };

  return (
    <div>
      <h1>Add Job</h1>
      <JobForm onSubmit={handleSubmit} initialData={null}  />
    </div>
  );
};

export default AddJobPage;