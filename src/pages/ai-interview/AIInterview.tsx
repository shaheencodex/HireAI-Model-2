import React from 'react';

const AIInterview: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">AI Interview</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Interview Type</label>
            <div className="mt-2 grid grid-cols-2 gap-4">
              <button className="p-4 border-2 border-[#125756] rounded-lg text-[#125756] hover:bg-[#125756]/10">
                Technical Interview
              </button>
              <button className="p-4 border-2 border-[#125756] rounded-lg text-[#125756] hover:bg-[#125756]/10">
                HR Interview
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Candidate Information</label>
            <div className="mt-2 space-y-4">
              <input
                type="text"
                placeholder="Role/Position"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#125756] focus:ring-[#125756]"
              />
              <input
                type="text"
                placeholder="Experience Level"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#125756] focus:ring-[#125756]"
              />
            </div>
          </div>

          <button
            type="button"
            className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#125756] hover:bg-[#125756]/90"
          >
            Start Interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIInterview;