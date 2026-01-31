import React from 'react';

const Subscription: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Manage Subscription</h1>
      <div className="bg-white rounded-lg shadow p-6">
        {/* Current Plan */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Current Plan</h2>
          <div className="bg-[#125756]/10 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-[#125756] font-medium">Enterprise Plan</h3>
                <p className="text-sm text-gray-600">Billed annually</p>
              </div>
              <span className="text-2xl font-bold text-[#125756]">$499/mo</span>
            </div>
          </div>
        </div>

        {/* Available Plans */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Available Plans</h2>
          <div className="grid grid-cols-3 gap-6">
            {/* Starter Plan */}
            <div className="border rounded-lg p-6 hover:border-[#125756] transition-colors">
              <h3 className="text-xl font-medium mb-2">Starter</h3>
              <p className="text-3xl font-bold mb-4">$99<span className="text-sm text-gray-500">/mo</span></p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Up to 10 users
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Basic features
                </li>
              </ul>
              <button className="w-full py-2 px-4 border border-[#125756] text-[#125756] rounded-md hover:bg-[#125756]/10">
                Select Plan
              </button>
            </div>

            {/* Professional Plan */}
            <div className="border-2 border-[#125756] rounded-lg p-6 relative">
              <div className="absolute top-0 right-0 transform translate-y-[-50%] bg-[#125756] text-white text-xs px-2 py-1 rounded">
                Popular
              </div>
              <h3 className="text-xl font-medium mb-2">Professional</h3>
              <p className="text-3xl font-bold mb-4">$199<span className="text-sm text-gray-500">/mo</span></p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Up to 50 users
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Advanced features
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Priority support
                </li>
              </ul>
              <button className="w-full py-2 px-4 bg-[#125756] text-white rounded-md hover:bg-[#125756]/90">
                Select Plan
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="border rounded-lg p-6 hover:border-[#125756] transition-colors">
              <h3 className="text-xl font-medium mb-2">Enterprise</h3>
              <p className="text-3xl font-bold mb-4">$499<span className="text-sm text-gray-500">/mo</span></p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Unlimited users
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  All features
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  24/7 support
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Custom integration
                </li>
              </ul>
              <button className="w-full py-2 px-4 border border-[#125756] text-[#125756] rounded-md hover:bg-[#125756]/10">
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