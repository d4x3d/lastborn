import { useState } from 'react';
import { Button } from '@/components/ui/button';

const cryptoOptions = [
  { id: 'btc', name: 'Bitcoin (BTC)', icon: '/images/bitcoin-btc-logo.svg', minWithdraw: '0.001', balance: '0.125' },
  { id: 'eth', name: 'Ethereum (ETH)', icon: '/images/ethereum-eth-logo.svg', minWithdraw: '0.01', balance: '2.5' },
  { id: 'sol', name: 'Solana (SOL)', icon: '/images/solana-sol-logo.svg', minWithdraw: '1', balance: '45.8' },
  { id: 'usdt', name: 'Tether (USDT)', icon: '/images/tether-usdt-logo.svg', minWithdraw: '10', balance: '1,250.00' },
];

export default function Withdraw() {
  const [selectedCrypto, setSelectedCrypto] = useState(cryptoOptions[0]);
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');

  const handleWithdraw = () => {
    // Handle withdrawal logic
    console.log('Withdraw:', { crypto: selectedCrypto.id, amount, address });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black pt-[calc(64px+2rem)] pb-12">
      <div className="container max-w-2xl mx-auto px-4">
        <div className="glass-effect rounded-2xl p-8">
          <h1 className="text-3xl font-bold gradient-text glow mb-8">Withdraw Funds</h1>
          
          {/* Crypto Selection */}
          <div className="space-y-6 mb-8">
            <h2 className="text-xl text-white font-semibold mb-4">Select Cryptocurrency</h2>
            <div className="grid grid-cols-2 gap-4">
              {cryptoOptions.map((crypto) => (
                <button
                  key={crypto.id}
                  onClick={() => setSelectedCrypto(crypto)}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                    selectedCrypto.id === crypto.id
                      ? 'glass-effect glow'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <img src={crypto.icon} alt={crypto.name} className="h-8 w-8" />
                  <div className="text-left">
                    <p className="text-white font-medium">{crypto.name}</p>
                    <p className="text-white/60 text-sm">
                      Balance: {crypto.balance} {crypto.id.toUpperCase()}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Amount Input */}
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center">
              <h2 className="text-xl text-white font-semibold">Amount</h2>
              <button 
                className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
                onClick={() => setAmount(selectedCrypto.balance)}
              >
                Max: {selectedCrypto.balance} {selectedCrypto.id.toUpperCase()}
              </button>
            </div>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder={`Minimum ${selectedCrypto.minWithdraw} ${selectedCrypto.id.toUpperCase()}`}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60">
                {selectedCrypto.id.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Withdrawal Address */}
          <div className="space-y-4">
            <h2 className="text-xl text-white font-semibold">Withdrawal Address</h2>
            <div className="relative">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder={`Enter your ${selectedCrypto.name} address`}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 font-mono"
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            onClick={handleWithdraw}
            className="w-full mt-8 gradient-bg glow-strong hover:scale-105 transition-all duration-300"
            disabled={!amount || !address}
          >
            Withdraw {selectedCrypto.name}
          </Button>

          {/* Warning */}
          <div className="mt-8 p-4 bg-yellow-500/10 rounded-lg">
            <p className="text-yellow-400 text-sm">
              Please double-check the withdrawal address before proceeding. Transactions cannot be reversed once confirmed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
