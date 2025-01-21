import React, { useState, useEffect } from 'react';
import JobForm from '../JobForm.tsx';
import { useNavigate, useParams } from 'react-router-dom';
interface Job{
    id: number,
    title: string,
    location: string,
    salary: number,
    description:string
 }
const EditJobPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState<Job>();

  useEffect(() => {
    // Fetch job data by ID (replace with your API call)
    const fetchJob = async () => {
      const mockJob = { id: 1, title: 'Software Engineer', description: 'Develop software', location: 'Remote', salary: 75000 };
      setJob(mockJob);
    };
    fetchJob();
  }, [id]);

  const handleSubmit = (formData) => {
    // Implement update functionality (e.g., API call)
    console.log('Job updated:', formData);
    navigate('/jobs');
  };

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Job</h1>
      <JobForm initialData={job} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditJobPage;