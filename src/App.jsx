// import React from "react";
// import Jobs from "./Components/jobTaker/Jobs";

// function App() {
//   return (
//     <div>
//       {/* job giver   */}
//       <Jobs />
//     </div>
//   );
// }

// export default App;
'use client';
import React, { useState } from 'react';
import DummyJobList from './Components/jobTaker/JobsList';
import JobSearchBar from './Components/jobTaker/JobSearchBar';
import InstantJobs from './Components/jobTaker/InstantJobs';
import AppliedAllJobs from './Components/jobTaker/AppliedJobs';
import UserProfile from './Components/jobTaker/UserProfile';

const tabs = ['Jobs', 'Search', 'Instant Jobs', 'Profile'];

export default function App() {
  const [activeTab, setActiveTab] = useState('Jobs');

  const pageStyle = {
    minHeight: '100vh',
    backgroundColor: 'black',
    color: 'white',
    padding: '16px',
    fontFamily: 'Arial, sans-serif'
  };

  const navbarStyle = {
    display: 'flex',
    gap: '12px',
    marginBottom: '24px',
    borderBottom: '1px solid white',
    paddingBottom: '8px'
  };

  const buttonStyle = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#444',
    color: 'white',
    cursor: 'pointer',
    fontSize: '14px'
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold'
  };

  return (
    <div style={pageStyle}>
      {/* Navbar */}
      <nav style={navbarStyle}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={activeTab === tab ? activeButtonStyle : buttonStyle}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      {activeTab === 'Jobs' && <JobsList />}
      {activeTab === 'Search' && <JobSearchBar onSearch={q => alert(`Search: ${q}`)} />}
      {activeTab === 'Instant Jobs' && <InstantJobs />}
      {activeTab === 'Applied Jobs' && <AppliedJobs />}
      {activeTab === 'Profile' && <UserProfile />}
    </div>
  );
}

