import React from 'react';

const Summary: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Interview Summary</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-6">
          {/* Summary Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-[#125756]/10 rounded-lg p-4">
              <h3 className="text-sm font-medium text-[#125756]">Total Interviews</h3>
              <p className="text-2xl font-bold text-[#125756]">24</p>
            </div>
            <div className="bg-[#125756]/10 rounded-lg p-4">
              <h3 className="text-sm font-medium text-[#125756]">Shortlisted</h3>
              <p className="text-2xl font-bold text-[#125756]">12</p>
            </div>
            <div className="bg-[#125756]/10 rounded-lg p-4">
              <h3 className="text-sm font-medium text-[#125756]">Pending Review</h3>
              <p className="text-2xl font-bold text-[#125756]">5</p>
            </div>
          </div>

          {/* Recent Interviews */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Interviews</h2>
            <div className="space-y-4">
              {/* Interview items would be mapped here */}
              <div className="border rounded-lg p-4">
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-500">Senior Software Engineer</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-sm text-gray-500">Oct 29, 2025</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Shortlisted
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;