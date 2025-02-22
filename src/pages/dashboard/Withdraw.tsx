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
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-purple/10 dark:border-purple/20">
      {step === 1 && (
        <>
          <div className="mb-6 p-4 bg-gradient-to-br from-purple/5 to-teal/5 dark:from-purple/10 dark:to-teal/10 rounded-lg">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">Available Balance</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">$98,750.00</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Select Withdrawal Method
              </label>
              <div className="grid grid-cols-1 gap-4">
                {withdrawalMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`relative flex flex-col p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                      selectedMethod === method.id
                        ? 'border-teal bg-teal/5 dark:bg-teal/10'
                        : 'border-gray-200 dark:border-gray-700 hover:border-teal/50'
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
                        <span className="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-2">
                          {method.icon} {method.name}
                        </span>
                        <div className="mt-1 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
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
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                  className="block w-full pl-7 pr-12 rounded-full border-gray-300 dark:border-gray-700 focus:ring-teal focus:border-teal dark:bg-gray-900 dark:text-white sm:text-sm"
                  placeholder="0.00"
                  min="10"
                  max="98750"
                  step="0.01"
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 dark:text-gray-400 sm:text-sm">USD</span>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full bg-gradient-to-r from-teal-600 to-indigo-600">
              Continue to Withdraw
            </Button>
          </form>
        </>
      )}

      {step === 2 && (
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Confirm Withdrawal</h2>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Amount</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">${amount} USD</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Withdrawal Method</p>
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  {withdrawalMethods.find(m => m.id === selectedMethod)?.name}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Fee</p>
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  {withdrawalMethods.find(m => m.id === selectedMethod)?.fee}
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
              className="flex-1 bg-gradient-to-r from-teal-600 to-indigo-600"
              onClick={confirmWithdrawal}
            >
              Confirm Withdrawal
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 mb-4">
            <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Withdrawal Initiated</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Your withdrawal of ${amount} USD has been initiated. You will receive a confirmation email shortly.
          </p>
          <Button
            className="bg-gradient-to-r from-teal-600 to-indigo-600"
            onClick={() => setStep(1)}
          >
            Make Another Withdrawal
          </Button>
        </div>
      )}

      {step === 4 && (
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900 mb-4">
            <svg className="h-6 w-6 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Wallet Required</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            To make a crypto withdrawal, you need to link your wallet first. Please go to settings to add your wallet address.
          </p>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setStep(1)}
            >
              Back
            </Button>
            <Button
              className="flex-1 bg-gradient-to-r from-teal-600 to-indigo-600"
              onClick={goToWalletSettings}
            >
              Link Wallet
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}