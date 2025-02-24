import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as HeroIcons from '@heroicons/react/24/outline';

interface Market {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  circulating_supply: number;
}

export default function Markets() {
  const [markets, setMarkets] = useState<Market[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: keyof Market; direction: 'asc' | 'desc' }>({
    key: 'market_cap',
    direction: 'desc'
  });

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=false'
        );
        setMarkets(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching markets:', error);
        setIsLoading(false);
      }
    };

    fetchMarkets();
    const interval = setInterval(fetchMarkets, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleSort = (key: keyof Market) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  const sortedMarkets = [...markets].sort((a, b) => {
    if (sortConfig.direction === 'asc') {
      return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
    }
    return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
  });

  const filteredMarkets = sortedMarkets.filter(market =>
    market.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    market.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const SortIcon = ({ active, direction }: { active: boolean; direction: 'asc' | 'desc' }) => (
    <span className={`inline-block ml-1 ${active ? 'text-blue-400' : 'text-white/40'}`}>
      {direction === 'asc' ? '↑' : '↓'}
    </span>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        {/* Search and Filters */}
        <div className="sticky top-16 z-10 bg-black/50 backdrop-blur-md p-4 rounded-xl mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <HeroIcons.MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
              <input
                type="text"
                placeholder="Search markets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
          </div>
        </div>

        {/* Markets Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-white/10">
            <thead>
              <tr className="text-white/60 text-sm">
                <th className="py-3 px-4 text-left">Asset</th>
                <th className="py-3 px-4 text-right cursor-pointer" onClick={() => handleSort('current_price')}>
                  Price
                  <SortIcon active={sortConfig.key === 'current_price'} direction={sortConfig.direction} />
                </th>
                <th className="py-3 px-4 text-right cursor-pointer" onClick={() => handleSort('price_change_percentage_24h')}>
                  24h Change
                  <SortIcon active={sortConfig.key === 'price_change_percentage_24h'} direction={sortConfig.direction} />
                </th>
                <th className="py-3 px-4 text-right cursor-pointer hidden sm:table-cell" onClick={() => handleSort('market_cap')}>
                  Market Cap
                  <SortIcon active={sortConfig.key === 'market_cap'} direction={sortConfig.direction} />
                </th>
                <th className="py-3 px-4 text-right hidden lg:table-cell cursor-pointer" onClick={() => handleSort('total_volume')}>
                  Volume (24h)
                  <SortIcon active={sortConfig.key === 'total_volume'} direction={sortConfig.direction} />
                </th>
                <th className="py-3 px-4 text-right hidden xl:table-cell">Supply</th>
                <th className="py-3 px-4 text-right">Trade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="text-center py-8">
                    <div className="animate-pulse text-white/60">Loading markets...</div>
                  </td>
                </tr>
              ) : filteredMarkets.map((market) => (
                <tr 
                  key={market.id} 
                  className="hover:bg-white/5 transition-colors duration-200"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <img src={market.image} alt={market.name} className="h-8 w-8" />
                      <div>
                        <div className="text-white font-medium">{market.name}</div>
                        <div className="text-white/60 text-sm">{market.symbol.toUpperCase()}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right text-white">
                    ${market.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span className={market.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'}>
                      {market.price_change_percentage_24h.toFixed(2)}%
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right text-white/60 hidden sm:table-cell">
                    ${market.market_cap.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-right text-white/60 hidden lg:table-cell">
                    ${market.total_volume.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-right text-white/60 hidden xl:table-cell">
                    {market.circulating_supply.toLocaleString()} {market.symbol.toUpperCase()}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <Link to={`/trade?symbol=${market.symbol.toUpperCase()}`}>
                      <button className="px-4 py-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-full transition-colors duration-200">
                        Trade
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
