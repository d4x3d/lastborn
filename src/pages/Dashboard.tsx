import { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  BanknotesIcon,
  ArrowUpTrayIcon,
  ArrowDownTrayIcon,
  ChartBarIcon,
  BellIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';

const quickActions = [
  { name: 'Deposit', icon: ArrowUpTrayIcon, href: '/dashboard/deposit', color: 'bg-forest bg-opacity-10 dark:bg-opacity-20 hover:bg-opacity-20 dark:hover:bg-opacity-30' },
  { name: 'Withdraw', icon: ArrowDownTrayIcon, href: '/dashboard/withdraw', color: 'bg-pink bg-opacity-10 dark:bg-opacity-20 hover:bg-opacity-20 dark:hover:bg-opacity-30' },
  { name: 'Trade', icon: ChartBarIcon, href: '/trade', color: 'bg-teal bg-opacity-10 dark:bg-opacity-20 hover:bg-opacity-20 dark:hover:bg-opacity-30' },
  { name: 'Settings', icon: Cog6ToothIcon, href: '/dashboard/settings', color: 'bg-purple bg-opacity-10 dark:bg-opacity-20 hover:bg-opacity-20 dark:hover:bg-opacity-30' },
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
    setShowNotifications(false); // Close notifications if open
  };

  // Check if we're on a specific route
  const isMainDashboard = pathSegments.length === 1 && pathSegments[0] === 'dashboard';

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple/5 to-teal/5 dark:from-purple/10 dark:to-teal/10 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="py-4">
          <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <li>
              <Link to="/dashboard" className="hover:text-teal">
                Dashboard
              </Link>
            </li>
            {pathSegments.slice(1).map((segment, index) => (
              <li key={segment} className="flex items-center">
                <span className="mx-2">/</span>
                <Link
                  to={`/dashboard/${pathSegments.slice(1, index + 2).join('/')}`}
                  className="capitalize hover:text-teal"
                >
                  {segment}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        {/* Show main dashboard content only on the main dashboard route */}
        {isMainDashboard && (
          <>
            {/* Main Dashboard Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Balance Overview */}
              <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-purple/10 dark:border-purple/20">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold bg-gradient-to-r from-purple via-pink to-teal bg-clip-text text-transparent">Account Balance</h2>
                  <div className="relative">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2 border-purple/20 hover:bg-purple/10"
                      onClick={() => setShowNotifications(!showNotifications)}
                    >
                      <BellIcon className="h-4 w-4" />
                      {unreadCount > 0 && (
                        <span className="bg-pink/10 text-pink rounded-full px-2 py-0.5 text-xs">
                          {unreadCount}
                        </span>
                      )}
                    </Button>

                    {/* Notifications Dropdown */}
                    {showNotifications && (
                      <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-purple/10 dark:border-purple/20 z-50">
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Notifications</h3>
                            <button
                              onClick={markAllAsRead}
                              className="text-xs text-teal hover:text-teal-600 dark:hover:text-teal-400"
                            >
                              Mark all as read
                            </button>
                          </div>
                          <div className="space-y-4">
                            {notifications.map((notification) => (
                              <div
                                key={notification.id}
                                className={`p-3 rounded-lg ${
                                  notification.unread
                                    ? 'bg-purple/5 dark:bg-purple/10'
                                    : 'bg-transparent'
                                }`}
                              >
                                <div className="flex justify-between items-start">
                                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                                    {notification.title}
                                  </h4>
                                  <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {notification.time}
                                  </span>
                                </div>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                                  {notification.message}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-purple/5 to-teal/5 dark:from-purple/10 dark:to-teal/10 rounded-lg p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Total Balance</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">$125,000.00</p>
                    <p className="text-sm text-forest dark:text-forest-light">+2.5% from last month</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple/5 to-teal/5 dark:from-purple/10 dark:to-teal/10 rounded-lg p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Available Balance</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">$98,750.00</p>
                    <p className="text-sm text-teal dark:text-teal-light">$26,250.00 in orders</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-purple/10 dark:border-purple/20">
                <h2 className="text-xl font-semibold bg-gradient-to-r from-purple via-pink to-teal bg-clip-text text-transparent mb-6">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  {quickActions.map((action) => (
                    <button
                      key={action.name}
                      onClick={() => handleQuickAction(action.href)}
                      className={`${action.color} rounded-lg p-4 text-center transition-all duration-300 hover:scale-105`}
                    >
                      <action.icon className="h-6 w-6 mx-auto mb-2 text-gray-900 dark:text-white" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{action.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 border border-purple/10 dark:border-purple/20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold bg-gradient-to-r from-purple via-pink to-teal bg-clip-text text-transparent">Recent Transactions</h2>
                <Link to="/dashboard/transactions">
                  <Button variant="outline" size="sm" className="border-purple/20 hover:bg-purple/10">View All</Button>
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-purple/10 dark:divide-purple/20">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple/10 dark:divide-purple/20 bg-white dark:bg-gray-900">
                    {recentTransactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-purple/5 dark:hover:bg-purple/10 transition-colors duration-200">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          {transaction.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-900 dark:text-white">
                          {transaction.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            transaction.status === 'completed'
                              ? 'bg-forest/10 text-forest dark:bg-forest/20 dark:text-forest-light'
                              : 'bg-pink/10 text-pink dark:bg-pink/20 dark:text-pink-light'
                          }`}>
                            {transaction.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500 dark:text-gray-400">
                          {transaction.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Nested Routes Content */}
        <Outlet />
      </div>
    </div>
  );
}