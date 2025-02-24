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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold gradient-text glow">Portfolio</h1>
            <p className="mt-2 text-sm text-blue-400">
              Total Value: ${totalValue.toLocaleString()}
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <div className="flex space-x-2">
              {['24h', '7d', '30d', 'All'].map((period) => (
                <Button
                  key={period}
                  className={`transition-all duration-300 ${
                    timeframe === period 
                      ? 'gradient-bg glow-strong' 
                      : 'glass-effect hover:bg-white/10'
                  }`}
                  onClick={() => setTimeframe(period)}
                >
                  {period}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="glass-effect rounded-xl overflow-hidden animate-fade-in">
            <div className="p-6">
              <h2 className="text-lg font-bold gradient-text glow mb-4">
                Performance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-effect rounded-xl p-6 hover-glow">
                  <p className="text-sm text-blue-400">Total Profit/Loss</p>
                  <p className={`text-2xl font-bold gradient-text glow ${
                    totalProfit >= 0 ? 'from-green-400 to-teal-500' : 'from-red-400 to-pink-500'
                  }`}>
                    {totalProfit >= 0 ? '+' : ''}{totalProfit.toLocaleString()} USD
                  </p>
                </div>
                <div className="glass-effect rounded-xl p-6 hover-glow">
                  <p className="text-sm text-blue-400">Portfolio Value</p>
                  <p className="text-2xl font-bold gradient-text glow">
                    ${totalValue.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 py-4">
              <h3 className="text-lg font-bold gradient-text glow mb-4">
                Assets
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-white/10">
                  <thead className="backdrop-blur-lg">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        Asset
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-white uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-white uppercase tracking-wider">
                        Value
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-white uppercase tracking-wider">
                        Profit/Loss
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {mockPortfolioData.map((asset) => (
                      <tr 
                        key={asset.symbol}
                        className="hover:bg-white/5 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img 
                              src={`/images/${asset.symbol.toLowerCase()}.svg`}
                              alt={asset.asset}
                              className="h-8 w-8 rounded-full glow mr-3"
                            />
                            <div>
                              <div className="text-sm font-medium text-white">
                                {asset.asset}
                              </div>
                              <div className="text-sm text-blue-400">
                                {asset.symbol}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-white">
                          {asset.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-white">
                          ${asset.value.toLocaleString()}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-right text-sm font-medium ${
                          asset.profit >= 0 
                            ? 'text-green-400' 
                            : 'text-red-400'
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
