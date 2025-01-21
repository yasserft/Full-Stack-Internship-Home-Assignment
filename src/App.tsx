import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import JobListPage from './Component/JobListPage.tsx';
import AddJobPage from './Component/Add&Edit/AddJobPage.tsx';
import EditJobPage from './Component/Add&Edit/EditJobPage.tsx';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobListPage />} />
        <Route path="/add-job" element={<AddJobPage />} />
        <Route path="/edit-job/:id" element={<EditJobPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;