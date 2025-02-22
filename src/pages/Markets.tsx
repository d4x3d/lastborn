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
      <div className="min-h-screen bg-gradient-to-br from-purple/5 to-teal/5 dark:from-purple/10 dark:to-teal/10 pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 dark:text-gray-400">Loading market data...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple/5 to-teal/5 dark:from-purple/10 dark:to-teal/10 pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-red-600 dark:text-red-400">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple/5 to-teal/5 dark:from-purple/10 dark:to-teal/10 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple via-pink to-teal bg-clip-text text-transparent">Markets</h1>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              Live cryptocurrency prices, market cap, and trading volume
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <input
              type="text"
              placeholder="Search markets..."
              className="block w-full rounded-full border-0 px-4 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-purple/20 dark:ring-purple/30 placeholder:text-gray-400 focus:ring-2 focus:ring-teal dark:bg-gray-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="overflow-x-hidden">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow ring-1 ring-purple/10 dark:ring-purple/20 rounded-lg">
                <table className="min-w-full divide-y divide-purple/10 dark:divide-purple/20">
                  <thead className="bg-purple/5 dark:bg-purple/10">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 dark:text-white sm:pl-6">
                        Name
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-right text-xs font-semibold text-gray-900 dark:text-white">
                        Price
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-right text-xs font-semibold text-gray-900 dark:text-white">
                        24h
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-right text-xs font-semibold text-gray-900 dark:text-white">
                        Cap
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-right text-xs font-semibold text-gray-900 dark:text-white">
                        Volume
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Trade</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple/10 dark:divide-purple/20 bg-white dark:bg-gray-900">
                    {filteredCoins.map((coin) => (
                      <tr key={coin.id} className="hover:bg-purple/5 dark:hover:bg-purple/10 transition-colors duration-200">
                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-xs sm:pl-6">
                          <div className="flex items-center">
                            <img 
                              src={coin.image} 
                              alt={coin.name} 
                              className="h-6 w-6 rounded-full"
                            />
                            <div className="ml-2">
                              <div className="font-medium text-gray-900 dark:text-white">{coin.name}</div>
                              <div className="text-teal text-xs">{coin.symbol.toUpperCase()}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-right text-xs text-gray-500 dark:text-gray-400">
                          ${coin.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                        <td className={`whitespace-nowrap px-2 py-2 text-right text-xs ${
                          coin.price_change_percentage_24h >= 0 ? 'text-forest dark:text-forest-light' : 'text-pink dark:text-pink-light'
                        }`}>
                          {coin.price_change_percentage_24h > 0 ? '+' : ''}{coin.price_change_percentage_24h.toFixed(1)}%
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-right text-xs text-gray-500 dark:text-gray-400">
                          {formatMarketCap(coin.market_cap)}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-right text-xs text-gray-500 dark:text-gray-400">
                          {formatVolume(coin.total_volume)}
                        </td>
                        <td className="relative whitespace-nowrap py-2 pl-2 pr-4 text-right text-xs font-medium sm:pr-6">
                          <Link to={`/trade/${coin.symbol.toLowerCase()}`}>
                            <Button variant="gradient" size="sm" className="px-2 py-1 text-xs">
                              Trade
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