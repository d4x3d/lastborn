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
    <div className="max-w-2xl mx-auto glass-effect rounded-2xl p-8 animate-fade-in">
      <h2 className="text-2xl font-bold gradient-text glow mb-8">Account Settings</h2>

      <div className="space-y-8">
        {/* Wallet Section */}
        <div>
          <h3 className="text-lg font-medium gradient-text mb-4">Wallet Settings</h3>
          <div className="glass-effect rounded-xl p-6 hover-glow">
            <div className="flex items-center gap-3 mb-4">
              <WalletIcon className="h-6 w-6 text-teal-400 glow" />
              <h4 className="text-base font-medium gradient-text">
                {isWalletLinked ? 'Linked Wallet' : 'Link Your Wallet'}
              </h4>
            </div>
            <p className="text-sm text-blue-400 mb-4">
              {isWalletLinked 
                ? 'Your wallet is linked. You can now make withdrawals to this address.'
                : 'Link your wallet address to enable withdrawals. Make sure to double-check the address.'}
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Wallet Address
                </label>
                <input
                  type="text"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  className="block w-full rounded-full bg-white/10 border-0 text-white backdrop-blur-lg focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-base py-3 px-4"
                  placeholder="Enter your wallet address"
                />
              </div>
              {isWalletLinked && (
                <div className="glass-effect rounded-lg p-3 text-sm text-teal-400 glow">
                  ✓ Wallet successfully linked
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div>
          <h3 className="text-lg font-medium gradient-text mb-4">Profile Information</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="block w-full rounded-full bg-white/10 border-0 text-white backdrop-blur-lg focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-base py-3 px-4"
                value="user@example.com"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Time Zone
              </label>
              <select
                className="block w-full rounded-full bg-white/10 border-0 text-white backdrop-blur-lg focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-base py-3 px-4"
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
          <h3 className="text-lg font-medium gradient-text mb-4">Security Settings</h3>
          <div className="space-y-4">
            {securitySettings.map((setting) => (
              <div key={setting.id} className="glass-effect rounded-xl p-4 hover-glow">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-white">{setting.name}</h4>
                    <p className="text-sm text-blue-400">{setting.description}</p>
                  </div>
                  {setting.id === '2fa' ? (
                    <div className="flex items-center">
                      <button
                        onClick={() => setIs2FAEnabled(!is2FAEnabled)}
                        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                          is2FAEnabled ? 'bg-teal-400 glow' : 'bg-white/20'
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-300 ease-in-out ${
                            is2FAEnabled ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  ) : (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="glass-effect hover:bg-white/10"
                    >
                      Manage
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notification Preferences */}
        <div>
          <h3 className="text-lg font-medium gradient-text mb-4">Notification Preferences</h3>
          <div className="space-y-4">
            {notificationPreferences.map((pref) => (
              <label
                key={pref.id}
                className="relative flex items-start cursor-pointer glass-effect rounded-xl p-4 hover-glow transition-all duration-300"
              >
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    checked={notifications.includes(pref.id)}
                    onChange={() => toggleNotification(pref.id)}
                    className="h-4 w-4 text-teal-400 focus:ring-teal-500 border-teal-400/50 rounded transition-all duration-300"
                  />
                </div>
                <div className="ml-3">
                  <span className="text-sm font-medium text-white">{pref.name}</span>
                  <p className="text-sm text-blue-400">{pref.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <Button
            onClick={handleSave}
            className="w-full gradient-bg glow-strong hover:scale-105 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Save Changes</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"></div>
          </Button>

          {/* Success Message */}
          {showSaveSuccess && (
            <div className="mt-4 p-4 glass-effect rounded-xl text-teal-400 text-center animate-fade-in glow">
              Settings saved successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
