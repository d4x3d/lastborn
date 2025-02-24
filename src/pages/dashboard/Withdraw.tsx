import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const withdrawalMethods = [
  { id: 'bank', name: 'Bank Transfer', fee: '0%', processingTime: '1-3 business days', icon: '🏦' },
  { id: 'card', name: 'Credit/Debit Card', fee: '2%', processingTime: 'Instant', icon: '💳' },
  { id: 'crypto', name: 'Cryptocurrency', fee: '1%', processingTime: '10-30 minutes', icon: '₿' },
];

export default function Withdraw() {
  const [amount, setAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState(withdrawalMethods[0].id);
  const [step, setStep] = useState(1);
  const [isWalletLinked, setIsWalletLinked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, this would check the user's wallet status from the backend
    // For now, we'll simulate it with local state
    setIsWalletLinked(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isWalletLinked && selectedMethod === 'crypto') {
      // Show wallet linking prompt
      setStep(4);
    } else {
      setStep(2);
    }
  };

  const confirmWithdrawal = () => {
    // Handle withdrawal confirmation
    setStep(3);
  };

  const goToWalletSettings = () => {
    navigate('/dashboard/settings');
  };

  return (
    <div className="max-w-2xl mx-auto glass-effect rounded-2xl p-8 animate-fade-in">
      {step === 1 && (
        <>
          <div className="mb-8 glass-effect rounded-xl p-6 hover-glow">
            <h3 className="text-sm font-medium text-blue-400">Available Balance</h3>
            <p className="text-3xl font-bold gradient-text glow">$98,750.00</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Select Withdrawal Method
              </label>
              <div className="grid grid-cols-1 gap-4">
                {withdrawalMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`relative flex flex-col p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedMethod === method.id
                        ? 'glass-effect gradient-border glow'
                        : 'glass-effect hover:scale-[1.02] hover-glow'
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="withdrawalMethod"
                        value={method.id}
                        checked={selectedMethod === method.id}
                        onChange={(e) => setSelectedMethod(e.target.value)}
                        className="h-4 w-4 text-teal focus:ring-teal border-gray-300"
                      />
                      <div className="ml-3">
                        <span className="text-base font-medium text-white flex items-center gap-2">
                          {method.icon} {method.name}
                        </span>
                        <div className="mt-1 flex items-center gap-4 text-sm text-blue-400">
                          <span>Fee: {method.fee}</span>
                          <span>Processing: {method.processingTime}</span>
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Amount (USD)
              </label>
              <div className="mt-1 relative rounded-full shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-white/60 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="block w-full pl-7 pr-12 rounded-full bg-white/10 border-0 text-white backdrop-blur-lg focus:ring-2 focus:ring-teal-500 transition-all duration-300 sm:text-sm"
                  placeholder="0.00"
                  min="10"
                  max="98750"
                  step="0.01"
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-white/60 sm:text-sm">USD</span>
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full gradient-bg glow-strong hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Continue to Withdraw</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"></div>
            </Button>
          </form>
        </>
      )}

      {step === 2 && (
        <div className="text-center">
          <h2 className="text-2xl font-bold gradient-text glow mb-6">Confirm Withdrawal</h2>
          <div className="glass-effect rounded-xl p-6 mb-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-blue-400">Amount</p>
                <p className="text-2xl font-bold gradient-text glow">${amount} USD</p>
              </div>
              <div>
                <p className="text-sm text-blue-400">Withdrawal Method</p>
                <p className="text-lg font-medium text-white">
                  {withdrawalMethods.find(m => m.id === selectedMethod)?.name}
                </p>
              </div>
              <div>
                <p className="text-sm text-blue-400">Fee</p>
                <p className="text-lg font-medium text-white">
                  {withdrawalMethods.find(m => m.id === selectedMethod)?.fee}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1 glass-effect hover:bg-white/10"
              onClick={() => setStep(1)}
            >
              Back
            </Button>
            <Button
              className="flex-1 gradient-bg glow-strong hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              onClick={confirmWithdrawal}
            >
              <span className="relative z-10">Confirm Withdrawal</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"></div>
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full glass-effect glow mb-6">
            <svg className="h-8 w-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold gradient-text glow mb-2">Withdrawal Initiated</h2>
          <p className="text-blue-400 mb-6">
            Your withdrawal of ${amount} USD has been initiated. You will receive a confirmation email shortly.
          </p>
          <Button 
            className="gradient-bg glow-strong hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            onClick={() => setStep(1)}
          >
            <span className="relative z-10">Make Another Withdrawal</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"></div>
          </Button>
        </div>
      )}

      {step === 4 && (
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full glass-effect glow mb-6">
            <svg className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold gradient-text glow mb-2">Wallet Required</h2>
          <p className="text-blue-400 mb-6">
            To make a crypto withdrawal, you need to link your wallet first. Please go to settings to add your wallet address.
          </p>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1 glass-effect hover:bg-white/10"
              onClick={() => setStep(1)}
            >
              Back
            </Button>
            <Button
              className="flex-1 gradient-bg glow-strong hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              onClick={goToWalletSettings}
            >
              <span className="relative z-10">Link Wallet</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"></div>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
