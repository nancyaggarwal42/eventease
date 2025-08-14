'use client';
import React, { useState } from 'react';

export default function UserProfile() {
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');

  const pageStyle = {
    minHeight: '100vh',
    backgroundColor: 'black',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: 'white'
  };

  const cardStyle = {
    backgroundColor: '#1a1a1a',
    padding: '20px',
    borderRadius: '6px',
    border: '1px solid #333',
    maxWidth: '500px'
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: '10px'
  };

  const sectionTitle = {
    fontWeight: 'bold',
    marginTop: '10px'
  };

  const greenButton = {
    backgroundColor: 'green',
    color: 'white',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px'
  };

  const redButton = {
    backgroundColor: 'red',
    color: 'white',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  const blueButton = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #555',
    backgroundColor: '#2a2a2a',
    color: 'white'
  };

  const handleUpdate = () => {
    alert(`Skills: ${skills}\nExperience: ${experience}`);
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <div style={titleStyle}>👤 User Profile</div>
        <p><b>Name:</b> Nancy Aggarwal</p>
        <p><b>Rating:</b> ⭐ 4.5</p>

        <div style={sectionTitle}>Jobs Applied:</div>
        <ul>
          <li>Event Manager at XYZ Corp</li>
          <li>Logistics at Boom Events</li>
        </ul>

        <button style={greenButton}>Send Review to Company</button>
        <button style={redButton}>Logout</button>

        {/* Update Profile Section */}
        <div style={{ marginTop: '20px', borderTop: '1px solid #444', paddingTop: '10px' }}>
          <div style={sectionTitle}>Update Profile</div>
          <label>Skills:</label>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            style={inputStyle}
            placeholder="Enter your skills"
          />

          <label>Experience:</label>
          <input
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            style={inputStyle}
            placeholder="Enter your experience"
          />

          <button style={blueButton} onClick={handleUpdate}>Save</button>
        </div>
      </div>
    </div>
  );
}
