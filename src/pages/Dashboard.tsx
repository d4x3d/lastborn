import { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  BanknotesIcon,
  ArrowUpTrayIcon,
  ArrowDownTrayIcon,
  ChartBarIcon,
  BellIcon,
  Cog6ToothIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';

const quickActions = [
  { name: 'Deposit', icon: ArrowUpTrayIcon, href: '/dashboard/deposit', color: 'from-green-400/20 to-teal-400/20' },
  { name: 'Withdraw', icon: ArrowDownTrayIcon, href: '/dashboard/withdraw', color: 'from-red-400/20 to-pink-400/20' },
  { name: 'Trade', icon: ChartBarIcon, href: '/trade', color: 'from-blue-400/20 to-purple-400/20' },
  { name: 'Settings', icon: Cog6ToothIcon, href: '/dashboard/settings', color: 'from-indigo-400/20 to-violet-400/20' },
];

const recentTransactions = [
  { id: 1, type: 'Deposit', amount: '+5,000 USD', status: 'completed', date: '2025-01-15' },
  { id: 2, type: 'Withdrawal', amount: '-2,500 USD', status: 'pending', date: '2025-01-14' },
  { id: 3, type: 'Trade', amount: '-1,000 USD', status: 'completed', date: '2025-01-13' },
  { id: 4, type: 'Deposit', amount: '+10,000 USD', status: 'completed', date: '2025-01-12' },
];

const notifications = [
  { id: 1, title: 'Withdrawal Processed', message: 'Your withdrawal of $2,500 has been processed', time: '5 minutes ago', unread: true },
  { id: 2, title: 'Security Alert', message: 'New login detected from Chrome on Windows', time: '1 hour ago', unread: true },
  { id: 3, title: 'Trade Executed', message: 'BTC/USD trade executed at $35,000', time: '2 hours ago', unread: true },
];

export default function Dashboard() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadCount, setUnreadCount] = useState(notifications.length);
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const markAllAsRead = () => {
    setUnreadCount(0);
    setShowNotifications(false);
  };

  const handleQuickAction = (href: string) => {
    navigate(href);
    setShowNotifications(false);
  };

  const handleBack = () => {
    if (pathSegments.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const isMainDashboard = pathSegments.length === 1 && pathSegments[0] === 'dashboard';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button and Navigation */}
        <div className="py-4 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors duration-300"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Back</span>
          </button>
          <ol className="flex items-center space-x-2 text-sm text-blue-400">
            <li>
              <Link to="/dashboard" className="hover:text-white transition-colors duration-300">
                Dashboard
              </Link>
            </li>
            {pathSegments.slice(1).map((segment, index) => (
              <li key={segment} className="flex items-center">
                <span className="mx-2 text-white/40">/</span>
                <Link
                  to={`/dashboard/${pathSegments.slice(1, index + 2).join('/')}`}
                  className="capitalize hover:text-white transition-colors duration-300"
                >
                  {segment}
                </Link>
              </li>
            ))}
          </ol>
        </div>

        {isMainDashboard && (
          <div className="space-y-6 animate-fade-in">
            {/* Balance Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 glass-effect rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold gradient-text glow">Account Balance</h2>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="glass-effect hover:bg-white/10 flex items-center gap-2"
                    onClick={() => setShowNotifications(!showNotifications)}
                  >
                    <BellIcon className="h-4 w-4" />
                    {unreadCount > 0 && (
                      <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full px-2 py-0.5 text-xs">
                        {unreadCount}
                      </span>
                    )}
                  </Button>

                  {/* Notifications Panel */}
                  {showNotifications && (
                    <div className="absolute right-4 mt-12 w-80 glass-effect rounded-xl shadow-lg z-50">
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-sm font-semibold gradient-text">Notifications</h3>
                          <button
                            onClick={markAllAsRead}
                            className="text-xs text-blue-400 hover:text-white transition-colors duration-300"
                          >
                            Mark all as read
                          </button>
                        </div>
                        <div className="space-y-4">
                          {notifications.map((notification) => (
                            <div
                              key={notification.id}
                              className={`glass-effect rounded-lg p-3 hover-glow transition-all duration-300 ${
                                notification.unread ? 'glow' : ''
                              }`}
                            >
                              <div className="flex justify-between items-start">
                                <h4 className="text-sm font-medium text-white">
                                  {notification.title}
                                </h4>
                                <span className="text-xs text-blue-400">
                                  {notification.time}
                                </span>
                              </div>
                              <p className="mt-1 text-sm text-white/80">
                                {notification.message}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="glass-effect rounded-xl p-4 hover-glow">
                    <p className="text-sm text-blue-400">Total Balance</p>
                    <p className="text-2xl font-bold gradient-text glow">$125,000.00</p>
                    <p className="text-sm text-green-400">+2.5% from last month</p>
                  </div>
                  <div className="glass-effect rounded-xl p-4 hover-glow">
                    <p className="text-sm text-blue-400">Available Balance</p>
                    <p className="text-2xl font-bold gradient-text glow">$98,750.00</p>
                    <p className="text-sm text-teal-400">$26,250.00 in orders</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass-effect rounded-xl p-6">
                <h2 className="text-xl font-bold gradient-text glow mb-6">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  {quickActions.map((action) => (
                    <button
                      key={action.name}
                      onClick={() => handleQuickAction(action.href)}
                      className={`glass-effect rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 bg-gradient-to-br ${action.color}`}
                    >
                      <action.icon className="h-6 w-6 mx-auto mb-2 text-white" />
                      <span className="text-sm font-medium text-white">{action.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold gradient-text glow">Recent Transactions</h2>
                <Link to="/dashboard/transactions">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="glass-effect hover:bg-white/10"
                  >
                    View All
                  </Button>
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-white/10">
                  <thead className="backdrop-blur-lg">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-semibold text-white uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-semibold text-white uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-semibold text-white uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {recentTransactions.map((transaction) => (
                      <tr 
                        key={transaction.id}
                        className="hover:bg-white/5 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {transaction.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-white">
                          {transaction.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            transaction.status === 'completed'
                              ? 'bg-green-400/20 text-green-400'
                              : 'bg-yellow-400/20 text-yellow-400'
                          }`}>
                            {transaction.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-blue-400">
                          {transaction.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Nested Routes Content */}
        <Outlet />
      </div>
    </div>
  );
}
