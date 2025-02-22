import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

type CoinSymbol = 'btc' | 'eth' | 'bnb' | 'sol';

const mockMarketData = [
  { id: 'btc', name: 'Bitcoin', symbol: 'BTC', price: 35000, change24h: 2.5, volume24h: 28000000000 },
  { id: 'eth', name: 'Ethereum', symbol: 'ETH', price: 2000, change24h: -1.2, volume24h: 15000000000 },
  { id: 'bnb', name: 'Binance Coin', symbol: 'BNB', price: 240, change24h: 0.8, volume24h: 1200000000 },
  { id: 'sol', name: 'Solana', symbol: 'SOL', price: 45, change24h: 5.2, volume24h: 2500000000 },
];

const coinImageMap: { [key in CoinSymbol]: string } = {
  'btc': '/images/bitcoin-btc-logo.svg',
  'eth': '/images/ethereum-eth-logo.svg',
  'bnb': '/images/bnb-bnb-logo.svg',
  'sol': '/images/solana-sol-logo.svg',
};

export default function Markets() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMarkets = mockMarketData.filter(market =>
    market.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    market.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-purple/10 dark:ring-purple/20 rounded-lg">
                <table className="min-w-full divide-y divide-purple/10 dark:divide-purple/20">
                  <thead className="bg-purple/5 dark:bg-purple/10">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-6">
                        Name
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900 dark:text-white">
                        Price
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900 dark:text-white">
                        24h Change
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900 dark:text-white">
                        24h Volume
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Trade</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple/10 dark:divide-purple/20 bg-white dark:bg-gray-900">
                    {filteredMarkets.map((market) => (
                      <tr key={market.id} className="hover:bg-purple/5 dark:hover:bg-purple/10 transition-colors duration-200">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <img 
                              src={coinImageMap[market.symbol.toLowerCase() as CoinSymbol]} 
                              alt={market.name} 
                              className="h-8 w-8 rounded-full mr-4"
                            />
                            <div className="ml-4">
                              <div className="font-medium text-gray-900 dark:text-white">{market.name}</div>
                              <div className="text-teal">{market.symbol}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-right text-sm text-gray-500 dark:text-gray-400">
                          ${market.price.toLocaleString()}
                        </td>
                        <td className={`whitespace-nowrap px-3 py-4 text-right text-sm ${
                          market.change24h >= 0 ? 'text-forest dark:text-forest-light' : 'text-pink dark:text-pink-light'
                        }`}>
                          {market.change24h > 0 ? '+' : ''}{market.change24h}%
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-right text-sm text-gray-500 dark:text-gray-400">
                          ${(market.volume24h / 1000000).toFixed(2)}M
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <Link to={`/trade/${market.symbol.toLowerCase()}`}>
                            <Button variant="gradient" size="sm">
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