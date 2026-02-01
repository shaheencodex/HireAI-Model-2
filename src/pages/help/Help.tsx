import React from "react";

const Help: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Help & Support</h1>
      <div className="bg-[#292d3a] rounded-lg shadow p-6">
        {/* Search Section */}
        <div className="mb-8">
          <div className="max-w-xl">
            <label htmlFor="search" className="sr-only">
              Search help articles
            </label>
            <div className="relative">
              <input
                type="text"
                id="search"
                className="block w-full rounded-md border-gray-300 bg-gray-700 text-gray-100 shadow-sm focus:border-[#01a982] focus:ring-[#01a982] pl-10"
                placeholder="Search help articles..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-100 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="border border-gray-500 rounded-lg">
              <summary className="px-4 py-3 cursor-pointer text-gray-100  hover:bg-gray-500 hover:border border-gray-700 rounded-lg">
                How do I create a new job description?
              </summary>
              <div className="px-4 py-3 border-t border-gray-500">
                <p className="text-gray-500">
                  Navigate to the Job Description Generator tab, enter the job
                  role and requirements, then click the "Generate" button. Our
                  AI will create a comprehensive job description based on your
                  input.
                </p>
              </div>
            </details>

            <details className="border border-gray-500 rounded-lg">
              <summary className="px-4 py-3 cursor-pointer text-gray-100 hover:bg-gray-500 hover:border border-gray-700 rounded-lg">
                How does the AI Interview process work?
              </summary>
              <div className="px-4 py-3 border-t border-gray-500">
                <p className="text-gray-500">
                  The AI Interview feature conducts automated initial screening
                  interviews. Select the interview type, enter candidate
                  information, and start the interview. The AI will ask relevant
                  questions and provide a detailed assessment.
                </p>
              </div>
            </details>

            <details className="border border-gray-500 rounded-lg">
              <summary className="px-4 py-3 cursor-pointer text-gray-100 hover:bg-gray-500 hover:border border-gray-700 rounded-lg">
                How can I manage my subscription?
              </summary>
              <div className="px-4 py-3 border-t border-gray-500">
                <p className="text-gray-500">
                  Go to the Manage Subscription tab to view your current plan,
                  upgrade, or modify your subscription. You can also view
                  billing history and payment methods there.
                </p>
              </div>
            </details>
          </div>
        </div>

        {/* Contact Support */}
        <div>
          <h2 className="text-lg font-medium text-gray-100 mb-4">
            Need More Help?
          </h2>
          <div className="bg-gray-700 rounded-lg p-6">
            <h3 className="text-base font-medium text-gray-100 mb-2">
              Contact Support
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Our support team is available 24/7 to help you with any questions
              or issues.
            </p>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#01a982] hover:bg-[#01a982]/80"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
