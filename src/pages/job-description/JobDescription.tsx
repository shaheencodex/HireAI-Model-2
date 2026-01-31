import React from 'react';

const JobDescription: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Job Description Generator</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Job Role</label>
            <input
              type="text"
              id="role"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#125756] focus:ring-[#125756]"
              placeholder="e.g. Senior Software Engineer"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">Key Requirements</label>
            <textarea
              id="requirements"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#125756] focus:ring-[#125756]"
              placeholder="Enter key requirements and skills..."
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#125756] hover:bg-[#125756]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#125756]"
          >
            Generate Job Description
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;