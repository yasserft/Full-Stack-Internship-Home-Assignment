import React, { useState, useEffect} from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
interface Job{
   id: number,
   title: string,
   location: string,
   salary: number,
   description:string
}

const JobListPage = () => {
  const [jobs, setJobs] = useState<Job[]>();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch jobs from the backend (mock data for now)
  useEffect(() => {
   
    const fetchJobs = async () => {
      // Replace with your API call
      const response = await axios.get(`http://localhost:8080/jobs}`, {params: {
        size: 5, // The number of items per page
        page: page,
        
      }},);
      setJobs(response.data);
    };
    fetchJobs();
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit-job/${id}`);
  };

  const handleDelete = (id) => {
    // Implement delete functionality
    setJobs(jobs?.filter(job => job.id !== id));
  };

  return (
    <div>
      <h1>Job List</h1>
      <Button variant="contained" color="primary" onClick={() => navigate('/add-job')}>
        Add Job
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs?.map((job) => (
              <TableRow key={job.id}>
                <TableCell>{job.title}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>${job.salary}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary" onClick={() => handleEdit(job.id)}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={() => handleDelete(job.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default JobListPage;