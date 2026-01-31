import React from "react";

const HireAISkeleton: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fdf9] to-[#eef6f1] p-8">
      <div className="absolute top-6 left-6">
        <div className="h-9 w-32 bg-gray-200 rounded-lg animate-pulse" />
      </div>

      <div className="text-center space-y-4 mt-20">
        <div className="h-10 w-96 bg-gray-200 rounded-lg mx-auto animate-pulse" />
        <div className="h-10 w-80 bg-gray-200 rounded-lg mx-auto animate-pulse" />
        <div className="h-4 w-72 bg-gray-200 rounded-md mx-auto animate-pulse mt-4" />
        <div className="h-4 w-64 bg-gray-200 rounded-md mx-auto animate-pulse" />
      </div>

      <div className="flex gap-4 mt-10">
        <div className="h-12 w-32 bg-gray-200 rounded-lg animate-pulse" />
        <div className="h-12 w-40 bg-gray-200 rounded-lg animate-pulse" />
      </div>

      <div className="mt-20 text-center">
        <div className="h-8 w-64 bg-gray-200 rounded-lg mx-auto animate-pulse" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 max-w-5xl mx-auto">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="p-6 border border-gray-200 rounded-2xl shadow-sm flex flex-col items-start animate-pulse"
            >
              <div className="h-6 w-24 bg-gray-200 rounded-md mb-4" />
              <div className="h-3 w-full bg-gray-200 rounded mb-2" />
              <div className="h-3 w-5/6 bg-gray-200 rounded mb-2" />
              <div className="h-3 w-3/4 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HireAISkeleton;
