'use client'
import React, { useState } from 'react'

export default function JobSearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  return (
    <div className="mt-4 flex gap-2">
      <input
        className="p-2 rounded w-full border border-white bg-black/20 text-white"
        type="text"
        placeholder="Search jobs by title, company..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button
        onClick={() => onSearch(query)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Search
      </button>
    </div>
  )
}