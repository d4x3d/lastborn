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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Chart section */}
          <div className="lg:col-span-8">
            <div className="glass-effect rounded-xl p-6 h-[500px]">
              <h2 className="text-lg font-bold gradient-text  mb-4">
                {symbol.toUpperCase()}/USD Chart
              </h2>
              {/* Add TradingView chart component here */}
              <div className="w-full h-full bg-white/5 backdrop-blur-lg rounded-lg"></div>
            </div>
          </div>

          {/* Order form */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="glass-effect rounded-xl p-6">
              <div className="flex space-x-4 mb-6">
                <Button
                  className={`flex-1 relative overflow-hidden group transition-all duration-300 ${
                    side === 'buy' 
                      ? 'gradient-bg -strong' 
                      : 'glass-effect hover:bg-white/10'
                  }`}
                  onClick={() => setSide('buy')}
                >
                  <span className="relative z-10">Buy</span>
                  {side === 'buy' && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-green-400 via-teal-500 to-blue-600"></div>
                  )}
                </Button>
                <Button
                  className={`flex-1 relative overflow-hidden group transition-all duration-300 ${
                    side === 'sell' 
                      ? 'gradient-bg -strong' 
                      : 'glass-effect hover:bg-white/10'
                  }`}
                  onClick={() => setSide('sell')}
                >
                  <span className="relative z-10">Sell</span>
                  {side === 'sell' && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-red-400 via-pink-500 to-purple-600"></div>
                  )}
                </Button>
              </div>

              <div className="flex space-x-4 mb-6">
                <Button
                  className={`flex-1 ${
                    orderType === 'limit' 
                      ? 'gradient-bg -strong' 
                      : 'glass-effect hover:bg-white/10'
                  }`}
                  onClick={() => setOrderType('limit')}
                >
                  Limit
                </Button>
                <Button
                  className={`flex-1 ${
                    orderType === 'market' 
                      ? 'gradient-bg -strong' 
                      : 'glass-effect hover:bg-white/10'
                  }`}
                  onClick={() => setOrderType('market')}
                >
                  Market
                </Button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {orderType === 'limit' && (
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Price (USD)
                    </label>
                    <input
                      type="number"
                      className="block w-full rounded-full bg-white/10 border-0 text-white backdrop-blur-lg focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-sm px-4 py-2"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="0.00"
                      step="0.01"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Amount ({symbol.toUpperCase()})
                  </label>
                  <input
                    type="number"
                    className="block w-full rounded-full bg-white/10 border-0 text-white backdrop-blur-lg focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-sm px-4 py-2"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    step="0.00000001"
                  />
                </div>

                <Button
                  type="submit"
                  className={`w-full gradient-bg -strong hover:scale-105 transition-all duration-300 relative overflow-hidden group ${
                    side === 'buy'
                      ? 'from-green-400 via-teal-500 to-blue-600'
                      : 'from-red-400 via-pink-500 to-purple-600'
                  }`}
                >
                  <span className="relative z-10">
                    {side === 'buy' ? 'Buy' : 'Sell'} {symbol.toUpperCase()}
                  </span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"></div>
                </Button>
              </form>
            </div>

            {/* Order book */}
            <div className="mt-8 glass-effect rounded-xl p-6">
              <h3 className="text-lg font-bold gradient-text  mb-4">
                Order Book
              </h3>
              <div className="space-y-2">
                {/* Sample order book entries */}
                <div className="group glass-effect rounded-lg p-2 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex justify-between text-sm">
                    <span className="text-red-400 font-medium">35,000.00</span>
                    <span className="text-white/80">0.5432 BTC</span>
                    <div className="absolute left-0 top-0 bottom-0 w-[60%] bg-red-500/10 rounded-lg -z-10"></div>
                  </div>
                </div>
                <div className="group glass-effect rounded-lg p-2 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex justify-between text-sm">
                    <span className="text-red-400 font-medium">34,999.00</span>
                    <span className="text-white/80">0.2100 BTC</span>
                    <div className="absolute left-0 top-0 bottom-0 w-[45%] bg-red-500/10 rounded-lg -z-10"></div>
                  </div>
                </div>
                <div className="text-center text-sm text-white/60 my-2 font-medium">34,998.00</div>
                <div className="group glass-effect rounded-lg p-2 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex justify-between text-sm">
                    <span className="text-green-400 font-medium">34,997.00</span>
                    <span className="text-white/80">0.3200 BTC</span>
                    <div className="absolute left-0 top-0 bottom-0 w-[50%] bg-green-500/10 rounded-lg -z-10"></div>
                  </div>
                </div>
                <div className="group glass-effect rounded-lg p-2 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex justify-between text-sm">
                    <span className="text-green-400 font-medium">34,996.00</span>
                    <span className="text-white/80">0.4500 BTC</span>
                    <div className="absolute left-0 top-0 bottom-0 w-[55%] bg-green-500/10 rounded-lg -z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
