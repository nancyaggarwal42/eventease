'use client'
import React from 'react'

const dummyJobs = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Event Coordinator ${i + 1}`,
  company: `Company ${i + 1}`,
  skills: ['Event Planning', 'Vendor Management'],
}))

export default function DummyJobList() {
  return (
    <div className="space-y-4 mt-6">
      <h2 className="text-xl font-semibold text-white">📋 Event Management Jobs</h2>
      {dummyJobs.map(job => (
        <div key={job.id} className="bg-white/10 border border-white p-4 rounded-md">
          <h3 className="text-white font-bold">{job.title}</h3>
          <p className="text-gray-300">Company: {job.company}</p>
          <p className="text-gray-400 text-sm">Skills: {job.skills.join(', ')}</p>
        </div>
      ))}
    </div>
  )
}