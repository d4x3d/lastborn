import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface CoinData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
  market_cap: number;
}

export default function Markets() {
  const [searchTerm, setSearchTerm] = useState('');
  const [coins, setCoins] = useState<CoinData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=500&page=1&sparkline=false'
        );
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setCoins(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load market data');
        setLoading(false);
      }
    };

    fetchCoins();
    const interval = setInterval(fetchCoins, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatMarketCap = (value: number) => {
    if (value >= 1e12) { // Trillion
      return `$${(value / 1e12).toFixed(2)}T`;
    } else if (value >= 1e9) { // Billion
      return `$${(value / 1e9).toFixed(2)}B`;
    } else if (value >= 1e6) { // Million
      return `$${(value / 1e6).toFixed(2)}M`;
    } else {
      return `$${value.toLocaleString()}`;
    }
  };

  const formatVolume = (value: number) => {
    if (value >= 1e9) { // Billion
      return `$${(value / 1e9).toFixed(2)}B`;
    } else if (value >= 1e6) { // Million
      return `$${(value / 1e6).toFixed(2)}M`;
    } else {
      return `$${value.toLocaleString()}`;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-effect rounded-xl p-8 text-center">
            <div className="text-white text-lg animate-pulse">Loading market data...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-effect rounded-xl p-8 text-center">
            <div className="text-pink-500 text-lg">{error}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-3xl font-bold gradient-text glow">Markets</h1>
            <p className="mt-2 text-sm text-blue-400">
              Live cryptocurrency prices, market cap, and trading volume
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <div className="relative">
              <input
                type="text"
                placeholder="Search markets..."
                className="block w-full rounded-full bg-white/10 border-0 text-white backdrop-blur-lg focus:ring-2 focus:ring-teal-500 transition-all duration-300 pl-10 pr-4 py-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden glass-effect rounded-xl">
                <table className="min-w-full divide-y divide-white/10">
                  <thead className="backdrop-blur-lg">
                    <tr>
                      <th scope="col" className="py-4 pl-4 pr-3 text-left text-xs font-semibold text-white sm:pl-6">
                        Name
                      </th>
                      <th scope="col" className="px-3 py-4 text-right text-xs font-semibold text-white">
                        Price
                      </th>
                      <th scope="col" className="px-3 py-4 text-right text-xs font-semibold text-white">
                        24h
                      </th>
                      <th scope="col" className="px-3 py-4 text-right text-xs font-semibold text-white">
                        Cap
                      </th>
                      <th scope="col" className="px-3 py-4 text-right text-xs font-semibold text-white">
                        Volume
                      </th>
                      <th scope="col" className="relative py-4 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Trade</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {filteredCoins.map((coin) => (
                      <tr key={coin.id} className="hover:bg-white/5 transition-colors duration-200">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <img 
                              src={coin.image} 
                              alt={coin.name} 
                              className="h-8 w-8 rounded-full glow"
                            />
                            <div className="ml-3">
                              <div className="font-medium text-white">{coin.name}</div>
                              <div className="text-blue-400 text-xs">{coin.symbol.toUpperCase()}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-right text-sm text-white">
                          ${coin.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                        <td className={`whitespace-nowrap px-3 py-4 text-right text-sm font-medium ${
                          coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {coin.price_change_percentage_24h > 0 ? '+' : ''}{coin.price_change_percentage_24h.toFixed(1)}%
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-right text-sm text-white">
                          {formatMarketCap(coin.market_cap)}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-right text-sm text-white">
                          {formatVolume(coin.total_volume)}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <Link to={`/trade/${coin.symbol.toLowerCase()}`}>
                            <Button 
                              className="gradient-bg glow-strong hover:scale-105 transition-all duration-300 relative overflow-hidden group px-4 py-2"
                            >
                              <span className="relative z-10">Trade</span>
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"></div>
                            </Button>
                          </Link>
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
