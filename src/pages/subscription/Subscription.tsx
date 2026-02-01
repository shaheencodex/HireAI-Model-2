import React from "react";

const Subscription: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">
        Manage Subscription
      </h1>
      <div className="bg-[#292d3a] rounded-lg shadow p-6">
        {/* Current Plan */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-100 mb-4">
            Current Plan
          </h2>
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-[#01a982] font-medium">Enterprise Plan</h3>
                <p className="text-sm text-gray-400">Billed annually</p>
              </div>
              <span className="text-2xl font-bold text-[#01a982]">$499/mo</span>
            </div>
          </div>
        </div>

        {/* Available Plans */}
        <div>
          <h2 className="text-lg font-medium text-white mb-4">
            Available Plans
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {/* Starter Plan */}
            <div className="border border-gray-400 rounded-lg p-6 hover:border-[#01a982] transition-colors">
              <h3 className="text-xl font-medium mb-2 text-white">Starter</h3>
              <p className="text-3xl font-bold mb-4 text-white">
                $99<span className="text-sm text-gray-400">/mo</span>
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-100">Up to 10 users</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-100"> Basic features</span>
                </li>
              </ul>
              <button className="w-full py-2 px-4 border border-[#01a982] text-[#01a982] rounded-md hover:bg-[#01a982]/10">
                Select Plan
              </button>
            </div>

            {/* Professional Plan */}
            <div className="border-2 border-[#01a982] rounded-lg p-6 relative">
              <div className="absolute top-0 right-0 transform translate-y-[-50%] bg-[#01a982] text-white text-xs px-2 py-1 rounded">
                Popular
              </div>
              <h3 className="text-xl font-medium mb-2 text-white">
                Professional
              </h3>
              <p className="text-3xl font-bold mb-4 text-gray-100">
                $199<span className="text-sm text-gray-400">/mo</span>
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-100"> Up to 50 users</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-100"> Advanced features</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-100"> Priority support</span>
                </li>
              </ul>
              <button className="w-full py-2 px-4 bg-[#01a982] text-white rounded-md hover:bg-[#01a982]/80">
                Select Plan
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="border border-gray-400 rounded-lg p-6 hover:border-[#01a982] transition-colors">
              <h3 className="text-xl font-medium mb-2 text-white">
                Enterprise
              </h3>
              <p className="text-3xl font-bold mb-4 text-gray-100">
                $499<span className="text-sm text-gray-500">/mo</span>
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-100">Unlimited users</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-100">All features</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-100">24/7 support</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-100">Custom integration</span>
                </li>
              </ul>
              <button className="w-full py-2 px-4 border border-[#01a982] text-[#01a982] rounded-md hover:bg-[#01a982]/10">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
