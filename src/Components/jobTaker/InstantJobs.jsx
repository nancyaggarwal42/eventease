'use client'
import React from 'react'

const instantJobs = [
  { id: 1, title: 'Urgent: Stage Setup Coordinator', company: 'Eventrix' },
  { id: 2, title: 'Quick Hire: Sound Engineer', company: 'Boom Events' },
]

export default function InstantJobs() {
  return (
    <div className="mt-10">
      <h2 className="text-xl text-white font-semibold">⚡ Instant Jobs</h2>
      {instantJobs.map(job => (
        <div key={job.id} className="bg-red-500/20 border border-red-400 p-3 mt-2 rounded">
          <p className="text-white font-semibold">{job.title}</p>
          <p className="text-gray-200 text-sm">Company: {job.company}</p>
        </div>
      ))}
    </div>
  )
}