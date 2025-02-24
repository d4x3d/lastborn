import { useState } from 'react';
import { Button } from '@/components/ui/button';

const paymentMethods = [
  { id: 'bank', name: 'Bank Transfer', fee: '0%', processingTime: '1-3 business days', icon: '🏦' },
  { id: 'card', name: 'Credit/Debit Card', fee: '2.5%', processingTime: 'Instant', icon: '💳' },
  { id: 'crypto', name: 'Cryptocurrency', fee: '1%', processingTime: '10-30 minutes', icon: '₿' },
];

export default function Deposit() {
  const [amount, setAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0].id);
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const confirmDeposit = () => {
    // Handle deposit confirmation
    setStep(3);
  };

  return (
    <div className="max-w-2xl mx-auto glass-effect rounded-2xl p-8 animate-fade-in">
      {step === 1 && (
        <>
          <h2 className="text-2xl font-bold gradient-text glow mb-6">Deposit Funds</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Select Payment Method
              </label>
              <div className="grid grid-cols-1 gap-4">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`relative flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedMethod === method.id
                        ? 'glass-effect gradient-border glow'
                        : 'glass-effect hover:scale-[1.02] hover-glow'
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
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
                  <span className="text-gray-500 dark:text-gray-400 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="block w-full pl-7 pr-12 rounded-full bg-white/10 border-0 text-white backdrop-blur-lg focus:ring-2 focus:ring-teal-500 transition-all duration-300 sm:text-sm"
                  placeholder="0.00"
                  min="10"
                  step="0.01"
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 dark:text-gray-400 sm:text-sm">USD</span>
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full gradient-bg glow-strong hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Continue to Deposit</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"></div>
              Continue to Deposit
            </Button>
          </form>
        </>
      )}

      {step === 2 && (
        <div className="text-center">
          <h2 className="text-2xl font-bold gradient-text glow mb-6">Confirm Deposit</h2>
          <div className="glass-effect rounded-xl p-6 mb-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-blue-400">Amount</p>
                <p className="text-2xl font-bold gradient-text glow">${amount} USD</p>
              </div>
              <div>
                <p className="text-sm text-blue-400">Payment Method</p>
                <p className="text-lg font-medium text-white">
                  {paymentMethods.find(m => m.id === selectedMethod)?.name}
                </p>
              </div>
              <div>
                <p className="text-sm text-blue-400">Fee</p>
                <p className="text-lg font-medium text-white">
                  {paymentMethods.find(m => m.id === selectedMethod)?.fee}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setStep(1)}
            >
              Back
            </Button>
            <Button
              className="flex-1 gradient-bg glow-strong hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              onClick={confirmDeposit}
            >
              Confirm Deposit
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
          <h2 className="text-2xl font-bold gradient-text glow mb-2">Deposit Initiated</h2>
          <p className="text-blue-400 mb-6">
            Your deposit of ${amount} USD has been initiated. You will receive a confirmation email shortly.
          </p>
          <Button
            className="bg-gradient-to-r from-teal-600 to-indigo-600"
            onClick={() => setStep(1)}
          >
            Make Another Deposit
          </Button>
        </div>
      )}
    </div>
  );
}
