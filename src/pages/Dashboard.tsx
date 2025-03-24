import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  WalletIcon,
  Cog6ToothIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';

const quickActions = [
  { name: 'Deposit', href: '/dashboard/deposit', icon: WalletIcon },
  { name: 'Withdraw', href: '/dashboard/withdraw', icon: CurrencyDollarIcon },
  { name: 'Trade', href: '/trade', icon: ArrowTrendingUpIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: Cog6ToothIcon },
];

const recentTransactions = [
  {
    id: 1,
    type: 'Deposit',
    amount: '5,000',
    status: 'completed',
    date: '2025-02-24',
  },
  {
    id: 2,
    type: 'Trade',
    amount: '1,200',
    status: 'pending',
    date: '2025-02-23',
  },
  {
    id: 3,
    type: 'Withdraw',
    amount: '3,000',
    status: 'completed',
    date: '2025-02-22',
  },
];

export default function Dashboard() {
  const [balance] = useState('125,000.00');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black pt-[calc(64px+2rem)] pb-12">
      <div className="container mx-auto px-4">
        {/* Balance Card */}
        <div className="glass-effect rounded-2xl p-8 mb-8">
          <h2 className="text-lg text-white/60">Total Balance</h2>
          <div className="flex items-end gap-2 mt-2">
            <span className="text-4xl font-bold gradient-text ">$</span>
            <span className="text-5xl font-bold gradient-text ">{balance}</span>
          </div>
          <div className="mt-6 flex gap-4">
            <Link to="/dashboard/deposit">
              <Button className="gradient-bg -strong hover:scale-105 transition-all duration-300">
                Deposit
              </Button>
            </Link>
            <Link to="/dashboard/withdraw">
              <Button variant="outline" className="glass-effect hover:bg-white/10">
                Withdraw
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.name}
                to={action.href}
                className="glass-effect rounded-xl p-6 hover- relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <Icon className="h-8 w-8 text-blue-400  mb-4" />
                  <h3 className="text-lg font-semibold text-white">{action.name}</h3>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Recent Transactions */}
        <div className="glass-effect rounded-2xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Recent Transactions</h2>
            <Link 
              to="/dashboard/transactions" 
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center gap-2"
            >
              View All
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div 
                key={transaction.id}
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200"
              >
                <div>
                  <p className="text-white font-medium">{transaction.type}</p>
                  <p className="text-white/60 text-sm">{transaction.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">${transaction.amount}</p>
                  <p className={`text-sm ${
                    transaction.status === 'completed' ? 'text-green-400' : 'text-yellow-400'
                  }`}>
                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
