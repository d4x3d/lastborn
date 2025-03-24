import { useState } from 'react';
import { Button } from '@/components/ui/button';

const cryptoOptions = [
  { id: 'btc', name: 'Bitcoin (BTC)', icon: '/images/bitcoin-btc-logo.svg', minDeposit: '0.001' },
  { id: 'eth', name: 'Ethereum (ETH)', icon: '/images/ethereum-eth-logo.svg', minDeposit: '0.01' },
  { id: 'sol', name: 'Solana (SOL)', icon: '/images/solana-sol-logo.svg', minDeposit: '1' },
  { id: 'usdt', name: 'Tether (USDT)', icon: '/images/tether-usdt-logo.svg', minDeposit: '10' },
];

export default function Deposit() {
  const [selectedCrypto, setSelectedCrypto] = useState(cryptoOptions[0]);
  const [amount, setAmount] = useState('');

  const walletAddresses = {
    btc: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    eth: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    sol: '7ZBQkHjZrdQE5TozqYELyxKvfhcpAaow9KJSpuqhCVjg',
    usdt: 'TXtdGBnLPYZPnpNGHzgNrYZEtgxwUbeGPY',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black pt-[calc(64px+2rem)] pb-12">
      <div className="container max-w-2xl mx-auto px-4">
        <div className="glass-effect rounded-2xl p-8">
          <h1 className="text-3xl font-bold gradient-text  mb-8">Deposit Funds</h1>
          
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
                      ? 'glass-effect '
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <img src={crypto.icon} alt={crypto.name} className="h-8 w-8" />
                  <div className="text-left">
                    <p className="text-white font-medium">{crypto.name}</p>
                    <p className="text-white/60 text-sm">Min: {crypto.minDeposit}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Amount Input */}
          <div className="space-y-4 mb-8">
            <h2 className="text-xl text-white font-semibold">Enter Amount</h2>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder={`Minimum ${selectedCrypto.minDeposit} ${selectedCrypto.id.toUpperCase()}`}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60">
                {selectedCrypto.id.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Wallet Address */}
          <div className="space-y-4">
            <h2 className="text-xl text-white font-semibold">Deposit Address</h2>
            <div className="p-4 bg-white/5 rounded-lg break-all">
              <p className="text-white/80 font-mono">
                {walletAddresses[selectedCrypto.id as keyof typeof walletAddresses]}
              </p>
            </div>
            <Button 
              onClick={() => navigator.clipboard.writeText(walletAddresses[selectedCrypto.id as keyof typeof walletAddresses])}
              variant="outline"
              className="w-full glass-effect hover:bg-white/10"
            >
              Copy Address
            </Button>
          </div>

          {/* Warning */}
          <div className="mt-8 p-4 bg-yellow-500/10 rounded-lg">
            <p className="text-yellow-400 text-sm">
              Please ensure you are sending {selectedCrypto.name} to this address. Sending any other cryptocurrency may result in permanent loss.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
