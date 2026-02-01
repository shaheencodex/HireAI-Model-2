import React from "react";

const AIInterview: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">AI Interview</h1>
      <div className="bg-[#292d3a] rounded-lg shadow p-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white">
              Interview Type
            </label>
            <div className="mt-2 grid grid-cols-2 gap-4">
              <button className="p-4 border-2 border-gray-600 rounded-lg bg-gray-800 text-gray-100 hover:bg-gray-700 hover:text-gray-300 hover:border-gray-500">
                Technical Interview
              </button>
              <button className="p-4 border-2 border-gray-600 rounded-lg bg-gray-800 text-gray-100 hover:bg-gray-700 hover:text-gray-300 hover:border-gray-500">
                HR Interview
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-100">
              Candidate Information
            </label>
            <div className="mt-2 space-y-4">
              <input
                type="text"
                placeholder="Role/Position"
                className="block w-full rounded-md border-gray-300 bg-gray-700 text-white shadow-sm focus:border-[#01a982] focus:ring-[#01a982]"
              />
              <input
                type="text"
                placeholder="Experience Level"
                className="block w-full rounded-md border-gray-300 bg-gray-700 text-white shadow-sm focus:border-[#01a982] focus:ring-[#01a982]"
              />
            </div>
          </div>

          <button
            type="button"
            className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#01a982] hover:bg-[#01a982]/80"
          >
            Start Interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIInterview;
