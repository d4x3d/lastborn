import { useState } from 'react';
import { Button } from '@/components/ui/button';

const mockPortfolioData = [
  { asset: 'Bitcoin', symbol: 'BTC', amount: 0.5, value: 17500, profit: 2500 },
  { asset: 'Ethereum', symbol: 'ETH', amount: 2.5, value: 5000, profit: -500 },
  { asset: 'Binance Coin', symbol: 'BNB', amount: 10, value: 2400, profit: 200 },
  { asset: 'Solana', symbol: 'SOL', amount: 50, value: 2250, profit: 450 },
];

export default function Portfolio() {
  const [timeframe, setTimeframe] = useState('24h');
  const totalValue = mockPortfolioData.reduce((sum, asset) => sum + asset.value, 0);
  const totalProfit = mockPortfolioData.reduce((sum, asset) => sum + asset.profit, 0);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Portfolio</h1>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              Total Value: ${totalValue.toLocaleString()}
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <div className="flex space-x-2">
              {['24h', '7d', '30d', 'All'].map((period) => (
                <Button
                  key={period}
                  variant={timeframe === period ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTimeframe(period)}
                >
                  {period}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Performance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total Profit/Loss</p>
                  <p className={`text-2xl font-bold ${
                    totalProfit >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {totalProfit >= 0 ? '+' : ''}{totalProfit.toLocaleString()} USD
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Portfolio Value</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${totalValue.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 py-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Assets
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Asset
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Value
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Profit/Loss
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {mockPortfolioData.map((asset) => (
                      <tr key={asset.symbol}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {asset.asset}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                {asset.symbol}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500 dark:text-gray-400">
                          {asset.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-900 dark:text-white">
                          ${asset.value.toLocaleString()}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-right text-sm ${
                          asset.profit >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                        }`}>
                          {asset.profit >= 0 ? '+' : ''}{asset.profit.toLocaleString()} USD
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}