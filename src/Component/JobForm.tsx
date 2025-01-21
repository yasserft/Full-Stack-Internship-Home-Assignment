import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const JobForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(initialData || {
    title: '',
    description: '',
    location: '',
    salary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        fullWidth
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={4}
        required
      />
      <TextField
        fullWidth
        label="Location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Salary"
        name="salary"
        type="number"
        value={formData.salary}
        onChange={handleChange}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Save
      </Button>
    </Box>
  );
};

export default JobForm;