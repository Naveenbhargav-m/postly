import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Linkedin, Instagram, Twitter, Facebook, Plus, X } from 'lucide-react';
import { ScrollContainer } from '../components/scrolllContainer';

const SocialOnboarding = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [connectedAccounts, setConnectedAccounts] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    apiKey: '',
    accessToken: '',
    pageId: '',
    additionalInfo: ''
  });

  // Social media platforms with their respective form fields
  const platforms = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      color: 'bg-blue-700',
      fields: ['username', 'password', 'accessToken']
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <Instagram size={20} />,
      color: 'bg-pink-600',
      fields: ['username', 'password']
    },
    {
      id: 'facebook',
      name: 'Facebook Page',
      icon: <Facebook size={20} />,
      color: 'bg-blue-600',
      fields: ['accessToken', 'pageId']
    },
    {
      id: 'pinterest',
      name: 'Pinterest',
      icon: <Plus size={20} />,
      color: 'bg-red-600',
      fields: ['username', 'password', 'apiKey']
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: <Twitter size={20} />,
      color: 'bg-blue-400',
      fields: ['username', 'password', 'apiKey']
    },
    {
      id: 'reddit',
      name: 'Reddit',
      icon: <Plus size={20} />,
      color: 'bg-orange-600',
      fields: ['username', 'password', 'apiKey', 'additionalInfo']
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectPlatform = (platform) => {
    setSelectedPlatform(platform);
    // Reset form data when changing platform
    setFormData({
      username: '',
      password: '',
      apiKey: '',
      accessToken: '',
      pageId: '',
      additionalInfo: ''
    });
  };

  const handleConnect = (e) => {
    e.preventDefault();
    // Add the connected platform to the list
    if (selectedPlatform && !connectedAccounts.includes(selectedPlatform.id)) {
      setConnectedAccounts([...connectedAccounts, selectedPlatform.id]);
      
      // Here you would typically call your API to save credentials
      console.log('Connect account:', selectedPlatform.id, formData);
      // connectSocialAccountAction(selectedPlatform.id, formData);
    }
  };

  const handleRemoveAccount = (platformId) => {
    setConnectedAccounts(connectedAccounts.filter(id => id !== platformId));
    console.log('Disconnect account:', platformId);
    // disconnectSocialAccountAction(platformId);
  };

  const renderFormFields = () => {
    if (!selectedPlatform) return (
      <div className="flex flex-col items-center justify-center h-full text-gray-500">
        <p className="text-lg">Select a platform from the left to connect</p>
      </div>
    );

    return (
      <ScrollContainer style={{height:"600px"}} vertical={true}>
      <form onSubmit={handleConnect} className="space-y-4 ">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Connect {selectedPlatform.name}</h3>
        
        {selectedPlatform.fields.includes('username') && (
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
        )}
        
        {selectedPlatform.fields.includes('password') && (
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required={selectedPlatform.fields.includes('password')}
            />
          </div>
        )}
        
        {selectedPlatform.fields.includes('apiKey') && (
          <div>
            <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700">
              API Key
            </label>
            <input
              type="text"
              name="apiKey"
              id="apiKey"
              value={formData.apiKey}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required={selectedPlatform.fields.includes('apiKey')}
            />
          </div>
        )}
        
        {selectedPlatform.fields.includes('accessToken') && (
          <div>
            <label htmlFor="accessToken" className="block text-sm font-medium text-gray-700">
              Access Token
            </label>
            <input
              type="text"
              name="accessToken"
              id="accessToken"
              value={formData.accessToken}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required={selectedPlatform.fields.includes('accessToken')}
            />
          </div>
        )}
        
        {selectedPlatform.fields.includes('pageId') && (
          <div>
            <label htmlFor="pageId" className="block text-sm font-medium text-gray-700">
              Page ID
            </label>
            <input
              type="text"
              name="pageId"
              id="pageId"
              value={formData.pageId}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required={selectedPlatform.fields.includes('pageId')}
            />
          </div>
        )}
        
        {selectedPlatform.fields.includes('additionalInfo') && (
          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
              Additional Information
            </label>
            <textarea
              name="additionalInfo"
              id="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        )}
        
        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Connect Account
          </button>
        </div>
      </form>
      </ScrollContainer>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with step bar */}
      <div className="py-4 px-6 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900 mr-6">Social Media Setup</h1>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-3">Step 1 of 3</span>
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow py-6 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="flex h-96">
              {/* Left sidebar with social platforms */}
              <div className="w-64 border-r border-gray-200 p-4">
                <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                  Social Platforms
                </h2>
                <div className="space-y-1">
                  {platforms.map(platform => {
                    const isConnected = connectedAccounts.includes(platform.id);
                    const isSelected = selectedPlatform && selectedPlatform.id === platform.id;
                    
                    return (
                      <button
                        key={platform.id}
                        onClick={() => handleSelectPlatform(platform)}
                        className={`flex items-center w-full px-3 py-2 text-left rounded-md transition-colors ${
                          isSelected 
                            ? 'bg-indigo-50 text-indigo-700' 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <div className={`${platform.color} text-white p-1 rounded-full mr-3 flex items-center justify-center`}>
                          {platform.icon}
                        </div>
                        <span className="flex-grow font-medium text-sm">{platform.name}</span>
                        {isConnected && (
                          <div className="text-green-500">
                            <CheckCircle size={16} />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
                
                {/* Connected accounts section */}
                {connectedAccounts.length > 0 && (
                  <div className="mt-8">
                    <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                      Connected
                    </h2>
                    <div className="space-y-2">
                      {connectedAccounts.map(accountId => {
                        const platform = platforms.find(p => p.id === accountId);
                        return (
                          <div key={accountId} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-md">
                            <div className="flex items-center">
                              <div className={`${platform.color} text-white p-1 rounded-full mr-2 flex items-center justify-center`}>
                                {platform.icon}
                              </div>
                              <span className="text-sm">{platform.name}</span>
                            </div>
                            <button 
                              onClick={() => handleRemoveAccount(accountId)}
                              className="text-gray-400 hover:text-gray-500"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Right side with form */}
              <div className="flex-grow p-4 h-screen">
                {renderFormFields()}
              </div>
            </div>
            
            {/* Footer with navigation buttons */}
            <div className="bg-gray-50 px-6 py-4 flex justify-between border-t border-gray-200">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Back
              </button>
              <button 
                className={`flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  connectedAccounts.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={connectedAccounts.length === 0}
              >
                Continue to Automation <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialOnboarding;