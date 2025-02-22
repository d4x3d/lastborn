import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { WalletIcon } from '@heroicons/react/24/outline';

const notificationPreferences = [
  { id: 'trade', name: 'Trade Notifications', description: 'Get notified about your trade executions and updates' },
  { id: 'deposit', name: 'Deposit Alerts', description: 'Receive alerts when deposits are processed' },
  { id: 'withdrawal', name: 'Withdrawal Alerts', description: 'Get notified about withdrawal status changes' },
  { id: 'security', name: 'Security Alerts', description: 'Important security-related notifications' },
];

const securitySettings = [
  { id: '2fa', name: '2-Factor Authentication', description: 'Add an extra layer of security to your account' },
  { id: 'sessions', name: 'Active Sessions', description: 'Manage your active login sessions' },
  { id: 'devices', name: 'Trusted Devices', description: 'Manage devices that can access your account' },
];

export default function Settings() {
  const [notifications, setNotifications] = useState(['trade', 'security']);
  const [darkMode, setDarkMode] = useState(false);
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [isWalletLinked, setIsWalletLinked] = useState(false);

  const toggleNotification = (id: string) => {
    setNotifications(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSave = () => {
    if (walletAddress) {
      setIsWalletLinked(true);
    }
    setShowSaveSuccess(true);
    setTimeout(() => setShowSaveSuccess(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-purple/10 dark:border-purple/20">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Account Settings</h2>

      <div className="space-y-8">
        {/* Wallet Section */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Wallet Settings</h3>
          <div className="bg-gradient-to-br from-purple/5 to-teal/5 dark:from-purple/10 dark:to-teal/10 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <WalletIcon className="h-6 w-6 text-teal" />
              <h4 className="text-base font-medium text-gray-900 dark:text-white">
                {isWalletLinked ? 'Linked Wallet' : 'Link Your Wallet'}
              </h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {isWalletLinked 
                ? 'Your wallet is linked. You can now make withdrawals to this address.'
                : 'Link your wallet address to enable withdrawals. Make sure to double-check the address.'}
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Wallet Address
                </label>
                <input
                  type="text"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  className="block w-full rounded-full border-gray-300 dark:border-gray-700 shadow-sm focus:ring-teal focus:border-teal dark:bg-gray-900 dark:text-white sm:text-sm"
                  placeholder="Enter your wallet address"
                />
              </div>
              {isWalletLinked && (
                <div className="bg-forest/10 dark:bg-forest/20 text-forest dark:text-forest-light rounded-lg p-3 text-sm">
                  ✓ Wallet successfully linked
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Profile Information</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="block w-full rounded-full border-gray-300 dark:border-gray-700 shadow-sm focus:ring-teal focus:border-teal dark:bg-gray-900 dark:text-white sm:text-sm"
                value="user@example.com"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Time Zone
              </label>
              <select
                className="block w-full rounded-full border-gray-300 dark:border-gray-700 shadow-sm focus:ring-teal focus:border-teal dark:bg-gray-900 dark:text-white sm:text-sm"
                defaultValue="UTC"
              >
                <option value="UTC">UTC</option>
                <option value="EST">Eastern Time</option>
                <option value="PST">Pacific Time</option>
                <option value="GMT">GMT</option>
              </select>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Security Settings</h3>
          <div className="space-y-4">
            {securitySettings.map((setting) => (
              <div key={setting.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">{setting.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{setting.description}</p>
                </div>
                {setting.id === '2fa' ? (
                  <div className="flex items-center">
                    <button
                      onClick={() => setIs2FAEnabled(!is2FAEnabled)}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 ${
                        is2FAEnabled ? 'bg-teal' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          is2FAEnabled ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                ) : (
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Notification Preferences */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Notification Preferences</h3>
          <div className="space-y-4">
            {notificationPreferences.map((pref) => (
              <label
                key={pref.id}
                className="relative flex items-start cursor-pointer p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
              >
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    checked={notifications.includes(pref.id)}
                    onChange={() => toggleNotification(pref.id)}
                    className="h-4 w-4 text-teal focus:ring-teal border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{pref.name}</span>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{pref.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Theme Preferences */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Theme Preferences</h3>
          <label className="relative flex items-center cursor-pointer p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal/25 dark:peer-focus:ring-teal/25 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">Dark Mode</span>
          </label>
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <Button
            onClick={handleSave}
            className="w-full bg-gradient-to-r from-teal-600 to-indigo-600"
          >
            Save Changes
          </Button>

          {/* Success Message */}
          {showSaveSuccess && (
            <div className="mt-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 text-center">
              Settings saved successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}