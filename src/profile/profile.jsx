import React, { useState } from 'react';
import { User, Lock, Bell, Globe, Moon, Shield, LogOut, Save, Camera } from 'lucide-react';

const UserProfileSettingsScreen = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    updates: false,
    marketing: false
  });

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Profile & Settings</h1>
        <p className="text-gray-600">Manage your account details and preferences</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-4 h-fit">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`flex items-center w-full px-4 py-3 mb-2 rounded-md ${activeTab === 'profile' ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-50'}`}
          >
            <User size={20} className="mr-3" />
            <span>Profile Information</span>
          </button>
          <button 
            onClick={() => setActiveTab('password')}
            className={`flex items-center w-full px-4 py-3 mb-2 rounded-md ${activeTab === 'password' ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-50'}`}
          >
            <Lock size={20} className="mr-3" />
            <span>Password</span>
          </button>
          <button 
            onClick={() => setActiveTab('notifications')}
            className={`flex items-center w-full px-4 py-3 mb-2 rounded-md ${activeTab === 'notifications' ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-50'}`}
          >
            <Bell size={20} className="mr-3" />
            <span>Notifications</span>
          </button>
          <button 
            onClick={() => setActiveTab('appearance')}
            className={`flex items-center w-full px-4 py-3 mb-2 rounded-md ${activeTab === 'appearance' ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-50'}`}
          >
            <Moon size={20} className="mr-3" />
            <span>Appearance</span>
          </button>
          <button 
            onClick={() => setActiveTab('language')}
            className={`flex items-center w-full px-4 py-3 mb-2 rounded-md ${activeTab === 'language' ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-50'}`}
          >
            <Globe size={20} className="mr-3" />
            <span>Language</span>
          </button>
          <button 
            onClick={() => setActiveTab('security')}
            className={`flex items-center w-full px-4 py-3 mb-2 rounded-md ${activeTab === 'security' ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-50'}`}
          >
            <Shield size={20} className="mr-3" />
            <span>Security</span>
          </button>
          <hr className="my-4" />
          <button className="flex items-center w-full px-4 py-3 mb-2 rounded-md text-red-600 hover:bg-red-50">
            <LogOut size={20} className="mr-3" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-6">
          {/* Profile Information Tab */}
          {activeTab === 'profile' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
              
              <div className="flex flex-col items-center mb-8">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/api/placeholder/96/96" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700">
                    <Camera size={16} />
                  </button>
                </div>
                <button className="text-indigo-600 text-sm hover:underline">
                  Change Profile Picture
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    defaultValue="Alexander"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    defaultValue="Mitchell"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    defaultValue="alex.mitchell@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    defaultValue="+1 (555) 123-4567"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                  </label>
                  <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 h-24"
                    defaultValue="Product designer focused on creating intuitive user experiences. Avid coffee enthusiast and aspiring photographer."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    defaultValue="San Francisco, CA"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Website
                  </label>
                  <input 
                    type="url" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    defaultValue="https://alexmitchell.com"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                  <Save size={18} className="mr-2" />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Password Tab */}
          {activeTab === 'password' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Change Password</h2>
              
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Password
                  </label>
                  <input 
                    type="password" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <input 
                    type="password" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm New Password
                  </label>
                  <input 
                    type="password" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    placeholder="••••••••"
                  />
                </div>
                
                <div className="mt-2">
                  <p className="text-sm text-gray-600 mb-1">Password must:</p>
                  <ul className="text-sm text-gray-600 space-y-1 pl-5">
                    <li>Be at least 8 characters long</li>
                    <li>Include at least one uppercase letter</li>
                    <li>Include at least one number</li>
                    <li>Include at least one special character</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                  <Save size={18} className="mr-2" />
                  Update Password
                </button>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Email Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Email Notifications</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={notifications.email}
                          onChange={() => handleNotificationChange('email')}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Weekly Digest</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={notifications.updates}
                          onChange={() => handleNotificationChange('updates')}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Push Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Push Notifications</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={notifications.push}
                          onChange={() => handleNotificationChange('push')}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Marketing Communications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Product Updates & News</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={notifications.marketing}
                          onChange={() => handleNotificationChange('marketing')}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                  <Save size={18} className="mr-2" />
                  Save Preferences
                </button>
              </div>
            </div>
          )}

          {/* Appearance Tab */}
          {activeTab === 'appearance' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Appearance</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Theme</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div 
                      className={`border p-4 rounded-lg cursor-pointer ${!darkMode ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200'}`}
                      onClick={() => setDarkMode(false)}
                    >
                      <div className="mb-3 bg-white border border-gray-200 rounded-md p-3">
                        <div className="h-2 w-8 bg-gray-400 rounded mb-2"></div>
                        <div className="h-2 w-16 bg-gray-300 rounded mb-2"></div>
                        <div className="h-2 w-10 bg-gray-300 rounded"></div>
                      </div>
                      <div className="font-medium">Light Mode</div>
                    </div>
                    
                    <div 
                      className={`border p-4 rounded-lg cursor-pointer ${darkMode ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200'}`}
                      onClick={() => setDarkMode(true)}
                    >
                      <div className="mb-3 bg-gray-800 border border-gray-700 rounded-md p-3">
                        <div className="h-2 w-8 bg-gray-600 rounded mb-2"></div>
                        <div className="h-2 w-16 bg-gray-700 rounded mb-2"></div>
                        <div className="h-2 w-10 bg-gray-700 rounded"></div>
                      </div>
                      <div className="font-medium">Dark Mode</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Density</h3>
                  <div className="flex items-center space-x-4">
                    <button className="px-4 py-2 rounded-md bg-indigo-600 text-white">
                      Comfortable
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-100">
                      Compact
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                  <Save size={18} className="mr-2" />
                  Save Preferences
                </button>
              </div>
            </div>
          )}

          {/* Language Tab */}
          {activeTab === 'language' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Language & Region</h2>
              
              <div className="space-y-6 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Language
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500">
                    <option value="en-US">English (United States)</option>
                    <option value="en-GB">English (United Kingdom)</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="zh">Chinese</option>
                    <option value="ja">Japanese</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time Zone
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500">
                    <option value="UTC-8">Pacific Time (US & Canada)</option>
                    <option value="UTC-7">Mountain Time (US & Canada)</option>
                    <option value="UTC-6">Central Time (US & Canada)</option>
                    <option value="UTC-5">Eastern Time (US & Canada)</option>
                    <option value="UTC+0">UTC</option>
                    <option value="UTC+1">Central European Time</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date Format
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500">
                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                  </select>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                  <Save size={18} className="mr-2" />
                  Save Preferences
                </button>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Security</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Add an extra layer of security to your account by requiring both a password and access to your phone.
                  </p>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                    Enable 2FA
                  </button>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Active Sessions</h3>
                  <div className="border border-gray-200 rounded-lg p-4 mb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium">Current Session</div>
                        <div className="text-sm text-gray-600">Chrome on MacOS (San Francisco, CA)</div>
                        <div className="text-xs text-gray-500 mt-1">Started: April 1, 2025 at 10:30 AM</div>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        Active
                      </span>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium">Mobile App</div>
                        <div className="text-sm text-gray-600">iOS App (San Francisco, CA)</div>
                        <div className="text-xs text-gray-500 mt-1">Started: March 30, 2025 at 8:45 PM</div>
                      </div>
                      <button className="text-red-600 hover:text-red-800 text-sm">
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Account Activity</h3>
                  <div className="border border-gray-200 rounded-lg divide-y">
                    <div className="p-3">
                      <div className="text-sm">Password changed</div>
                      <div className="text-xs text-gray-500">March 15, 2025 at 2:30 PM</div>
                    </div>
                    <div className="p-3">
                      <div className="text-sm">New device signed in</div>
                      <div className="text-xs text-gray-500">March 10, 2025 at 11:15 AM</div>
                    </div>
                    <div className="p-3">
                      <div className="text-sm">Profile information updated</div>
                      <div className="text-xs text-gray-500">March 5, 2025 at 9:45 AM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 mr-3">
                  Delete Account
                </button>
                <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                  <Save size={18} className="mr-2" />
                  Save Settings
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfileSettingsScreen;