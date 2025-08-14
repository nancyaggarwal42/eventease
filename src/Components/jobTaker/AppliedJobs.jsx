'use client';
import React, { useState } from 'react';

export default function AppliedAllJobs() {
  // Dummy applied jobs
  const appliedJobs = [
    { id: 1, title: 'Frontend Developer', company: 'Tech Corp', date: '2025-08-01' },
    { id: 2, title: 'UI/UX Designer', company: 'Creative Studio', date: '2025-08-05' },
    { id: 3, title: 'Backend Engineer', company: 'CodeWorks', date: '2025-08-07' }
  ];

  const pageStyle = {
    minHeight: '100vh',
    backgroundColor: 'black',
    color: 'white',
    padding: '16px',
    fontFamily: 'Arial, sans-serif'
  };

  const headerStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '16px',
    borderBottom: '1px solid white',
    paddingBottom: '8px'
  };

  const jobCardStyle = {
    backgroundColor: '#1a1a1a',
    padding: '16px',
    marginBottom: '12px',
    borderRadius: '6px',
    border: '1px solid #333',
    cursor: 'pointer'
  };

  const jobTitleStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '4px'
  };

  const companyStyle = {
    fontSize: '14px',
    color: '#ccc',
    marginBottom: '4px'
  };

  const dateStyle = {
    fontSize: '12px',
    color: '#888'
  };

  return (
    <div style={pageStyle}>
      <div style={headerStyle}>📋 All Applied Jobs</div>

      {appliedJobs.length > 0 ? (
        appliedJobs.map(job => (
          <div key={job.id} style={jobCardStyle}>
            <div style={jobTitleStyle}>{job.title}</div>
            <div style={companyStyle}>{job.company}</div>
            <div style={dateStyle}>Applied on {job.date}</div>
          </div>
        ))
      ) : (
        <div>No jobs applied yet.</div>
      )}
    </div>
  );
}
