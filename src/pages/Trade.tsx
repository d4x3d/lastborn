import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Trade() {
  const { symbol = 'btc' } = useParams();
  const [orderType, setOrderType] = useState('limit');
  const [side, setSide] = useState('buy');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle order submission
    console.log({ orderType, side, price, amount });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Chart section */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-[500px]">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {symbol.toUpperCase()}/USD Chart
              </h2>
              {/* Add TradingView chart component here */}
              <div className="w-full h-full bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
            </div>
          </div>

          {/* Order form */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex space-x-4 mb-6">
                <Button
                  variant={side === 'buy' ? 'default' : 'outline'}
                  className={`flex-1 ${side === 'buy' ? 'bg-green-600 hover:bg-green-700' : ''}`}
                  onClick={() => setSide('buy')}
                >
                  Buy
                </Button>
                <Button
                  variant={side === 'sell' ? 'default' : 'outline'}
                  className={`flex-1 ${side === 'sell' ? 'bg-red-600 hover:bg-red-700' : ''}`}
                  onClick={() => setSide('sell')}
                >
                  Sell
                </Button>
              </div>

              <div className="flex space-x-4 mb-6">
                <Button
                  variant={orderType === 'limit' ? 'default' : 'outline'}
                  className="flex-1"
                  onClick={() => setOrderType('limit')}
                >
                  Limit
                </Button>
                <Button
                  variant={orderType === 'market' ? 'default' : 'outline'}
                  className="flex-1"
                  onClick={() => setOrderType('market')}
                >
                  Market
                </Button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {orderType === 'limit' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Price (USD)
                    </label>
                    <input
                      type="number"
                      className="mt-1 block w-full rounded-full border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-900 dark:text-white sm:text-sm"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="0.00"
                      step="0.01"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Amount ({symbol.toUpperCase()})
                  </label>
                  <input
                    type="number"
                    className="mt-1 block w-full rounded-full border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-900 dark:text-white sm:text-sm"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    step="0.00000001"
                  />
                </div>

                <Button
                  type="submit"
                  className={`w-full ${
                    side === 'buy'
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-red-600 hover:bg-red-700'
                  }`}
                >
                  {side === 'buy' ? 'Buy' : 'Sell'} {symbol.toUpperCase()}
                </Button>
              </form>
            </div>

            {/* Order book */}
            <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Order Book
              </h3>
              <div className="space-y-2">
                {/* Sample order book entries */}
                <div className="text-red-600 dark:text-red-400">35,000.00 | 0.5432</div>
                <div className="text-red-600 dark:text-red-400">34,999.00 | 0.2100</div>
                <div className="text-gray-500 dark:text-gray-400">34,998.00 | 0.1500</div>
                <div className="text-green-600 dark:text-green-400">34,997.00 | 0.3200</div>
                <div className="text-green-600 dark:text-green-400">34,996.00 | 0.4500</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}