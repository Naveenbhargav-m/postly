import React, { useState } from 'react';
import { CreditCard, Calendar, Shield, CheckCircle, Award, HelpCircle, AlertCircle } from 'lucide-react';
import { ScrollContainer } from '../components/scrolllContainer';

const SubscriptionBillingScreen = () => {
  const [currentPlan, setCurrentPlan] = useState('Pro');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Free',
      price: '$0',
      features: ['5 projects', '2 team members', 'Basic analytics'],
      current: currentPlan === 'Free'
    },
    {
      name: 'Pro',
      price: billingCycle === 'monthly' ? '$29' : '$290',
      features: ['Unlimited projects', '10 team members', 'Advanced analytics', 'Priority support'],
      current: currentPlan === 'Pro'
    },
    {
      name: 'Enterprise',
      price: billingCycle === 'monthly' ? '$99' : '$990',
      features: ['Unlimited everything', 'Dedicated support', 'Custom integrations', 'Advanced security'],
      current: currentPlan === 'Enterprise'
    }
  ];

  return (
    <ScrollContainer style={{height:"90%"}} maxHeight='80%' >
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Subscription & Billing</h1>
        <p className="text-gray-600">Manage your subscription plan and payment details</p>
      </div>

      {/* Current Plan Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-4">
          <Award className="mr-2 text-indigo-600" size={24} />
          <h2 className="text-xl font-semibold">Current Plan</h2>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 p-4 bg-indigo-50 rounded-lg">
          <div>
            <span className="font-semibold text-lg">{currentPlan} Plan</span>
            <div className="flex items-center mt-1">
              <span className="text-gray-600 text-sm mr-2">
                {billingCycle === 'monthly' ? 'Monthly billing' : 'Annual billing'}
              </span>
              {billingCycle === 'annual' && (
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                  Save 20%
                </span>
              )}
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="bg-white border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md mr-2 hover:bg-indigo-50">
              Cancel Plan
            </button>
          </div>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="mb-6">
          <h3 className="font-medium mb-3">Billing Cycle</h3>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-md ${billingCycle === 'monthly' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-md ${billingCycle === 'annual' ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
            >
              Annual (Save 20%)
            </button>
          </div>
        </div>
      </div>

      {/* Available Plans Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-6">
          <Shield className="mr-2 text-indigo-600" size={24} />
          <h2 className="text-xl font-semibold">Available Plans</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`border rounded-lg p-6 ${plan.current ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200'}`}
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="text-2xl font-bold mb-1">
                {plan.price}<span className="text-sm font-normal text-gray-600">
                  {billingCycle === 'monthly' ? '/month' : '/year'}
                </span>
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.current ? (
                <button className="w-full bg-gray-300 text-gray-600 px-4 py-2 rounded-md cursor-not-allowed">
                  Current Plan
                </button>
              ) : (
                <button 
                  onClick={() => setCurrentPlan(plan.name)}
                  className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  Upgrade
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-6">
          <CreditCard className="mr-2 text-indigo-600" size={24} />
          <h2 className="text-xl font-semibold">Payment Methods</h2>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4 mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-blue-500 text-white p-2 rounded mr-4">
              <CreditCard size={20} />
            </div>
            <div>
              <div className="font-medium">Visa ending in 4242</div>
              <div className="text-sm text-gray-600">Expires 09/2026</div>
            </div>
          </div>
          <div>
            <button className="text-gray-600 hover:text-indigo-600 text-sm underline">
              Edit
            </button>
            <button className="text-gray-600 hover:text-red-600 text-sm underline ml-4">
              Remove
            </button>
          </div>
        </div>
        
        <button className="flex items-center text-indigo-600 font-medium">
          <span className="mr-1">+</span> Add Payment Method
        </button>
      </div>

      {/* Billing History Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <Calendar className="mr-2 text-indigo-600" size={24} />
          <h2 className="text-xl font-semibold">Billing History</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Description</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Invoice</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">Mar 15, 2025</td>
                <td className="py-3 px-4">Pro Plan - Monthly</td>
                <td className="py-3 px-4">$29.00</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Paid
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-indigo-600 hover:underline">Download</button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">Feb 15, 2025</td>
                <td className="py-3 px-4">Pro Plan - Monthly</td>
                <td className="py-3 px-4">$29.00</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Paid
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-indigo-600 hover:underline">Download</button>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4">Jan 15, 2025</td>
                <td className="py-3 px-4">Pro Plan - Monthly</td>
                <td className="py-3 px-4">$29.00</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Paid
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-indigo-600 hover:underline">Download</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </ScrollContainer>
  );
};

export default SubscriptionBillingScreen;