import { useState, useEffect } from "react";
import HireAISkeleton from "../../components/HireAISkeleton";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <HireAISkeleton />;
  }

  return (
    <div className="p-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-[#292d3a] rounded-lg shadow p-6">
          <h3
            className="text-gray-100 text-sm mb-2 "
            style={{ fontFamily: "monorope, sans-serif" }}
          >
            Total Interviews
          </h3>
          <p
            className="text-2xl font-semibold text-[#01a982]"
            style={{ fontFamily: "Nohemi, sans-serif" }}
          >
            24
          </p>
          <div className="mt-2 text-sm text-green-600">
            <span>↑ 12% this week</span>
          </div>
        </div>

        <div className="bg-[#292d3a] rounded-lg shadow p-6">
          <h3
            className="text-gray-100 text-sm mb-2"
            style={{ fontFamily: "monorope, sans-serif" }}
          >
            Job Descriptions
          </h3>
          <p
            className="text-2xl font-semibold text-[#01a982]"
            style={{ fontFamily: "Nohemi, sans-serif" }}
          >
            15
          </p>
          <div className="mt-2 text-sm text-green-600">
            <span>↑ 8% this week</span>
          </div>
        </div>

        <div className="bg-[#292d3a] rounded-lg shadow p-6">
          <h3
            className="text-gray-100 text-sm mb-2"
            style={{ fontFamily: "monorope, sans-serif" }}
          >
            Resume Matches
          </h3>
          <p
            className="text-2xl font-semibold text-[#01a982]"
            style={{ fontFamily: "Nohemi, sans-serif" }}
          >
            85%
          </p>
          <div className="mt-2 text-sm text-green-600">
            <span>↑ 5% this week</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#292d3a] rounded-lg shadow-lg shadow-gray-700 p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-100">
            Recent Interviews
          </h2>
          <div className="space-y-4">
            <div className="border-b border-white pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-[#f7f7f7]">John Doe</p>
                  <p className="text-sm text-[#01a982]">
                    Senior Software Engineer
                  </p>
                </div>
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                  Completed
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-2">Oct 30, 2025</p>
            </div>
            <div className="border-b border-white pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-[#f7f7f7]">Jane Smith</p>
                  <p className="text-sm text-[#01a982]">Product Manager</p>
                </div>
                <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                  Scheduled
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-2">Oct 31, 2025</p>
            </div>
          </div>
        </div>

        <div className="bg-[#292d3a] rounded-lg shadow-lg shadow-gray-700 p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-100">
            Recent Job Descriptions
          </h2>
          <div className="space-y-4">
            <div className="border-b border-white pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-[#f7f7f7]">
                    Full Stack Developer
                  </p>
                  <p className="text-sm text-[#01a982]">Engineering</p>
                </div>
                <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                  Active
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-2">5 candidates matched</p>
            </div>
            <div className="border-b border-white pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-[#f7f7f7]  ">UX Designer</p>
                  <p className="text-sm text-[#01a982]">Design</p>
                </div>
                <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                  Active
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-2">3 candidates matched</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
