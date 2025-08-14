'use client'
import React from 'react'

export default function UserProfile() {
  const user = {
    name: 'Nancy Aggarwal',
    appliedJobs: ['Event Manager at XYZ Corp', 'Logistics at Boom Events'],
    rating: 4.5,
  }

  return (
    <div className="mt-10 p-4 border border-white rounded bg-white/10 text-white">
      <h3 className="text-lg font-bold">👤 User Profile</h3>
      <p className="mt-2">Name: {user.name}</p>
      <p className="mt-1">Rating: ⭐ {user.rating}</p>

      <div className="mt-3">
        <h4 className="font-semibold">Jobs Applied:</h4>
        <ul className="list-disc list-inside text-sm">
          {user.appliedJobs.map((job, i) => (
            <li key={i}>{job}</li>
          ))}
        </ul>
      </div>

      <div className="mt-3">
        <button className="bg-green-600 px-3 py-1 rounded text-sm mt-2">Send Review to Company</button>
      </div>

      <button className="bg-red-600 px-4 py-2 mt-4 rounded text-sm">Logout</button>
    </div>
  )
}