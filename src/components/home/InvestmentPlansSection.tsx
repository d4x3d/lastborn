import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function InvestmentPlansSection() {
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [investmentPeriod, setInvestmentPeriod] = useState(3);
  const [expectedROI, setExpectedROI] = useState('15% - 45%');
  const [potentialReturn, setPotentialReturn] = useState('$575 - $725');

  const calculateROI = () => {
    const roiRanges: { [key: number]: { min: number; max: number } } = {
      3: { min: 15, max: 25 },
      6: { min: 25, max: 35 },
      12: { min: 35, max: 45 },
    };

    const roi = roiRanges[investmentPeriod];
    const minReturn = (investmentAmount * roi.min) / 100;
    const maxReturn = (investmentAmount * roi.max) / 100;

    setExpectedROI(`${roi.min}% - ${roi.max}%`);
    setPotentialReturn(`$${minReturn.toFixed(2)} - $${maxReturn.toFixed(2)}`);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl font-bold gradient-text  sm:text-4xl">
          Investment Plans
        </h2>
        <p className="text-lg text-white/60">
          Choose the perfect investment plan for your portfolio
        </p>
      </div>

      {/* Investment Calculator */}
      <div className="glass-effect rounded-xl p-8 mb-16 hover- relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10">
          <h3 className="text-2xl font-bold gradient-text mb-6">ROI Calculator</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <label className="text-white/80 block mb-2">Investment Amount ($)</label>
              <input
                type="number"
                min="500"
                placeholder="Enter amount"
                className="w-full bg-black/20 border border-blue-500/20 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 glass-effect"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(parseFloat(e.target.value))}
              />
            </div>
            <div>
              <label className="text-white/80 block mb-2">Investment Period</label>
              <select
                className="w-full bg-black/20 border border-blue-500/20 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 glass-effect"
                value={investmentPeriod}
                onChange={(e) => setInvestmentPeriod(parseInt(e.target.value))}
              >
                <option value="3">3 months</option>
                <option value="6">6 months</option>
                <option value="12">12 months</option>
              </select>
            </div>
            <div>
              <label className="text-white/80 block mb-2">Expected ROI</label>
              <div className="text-2xl font-bold gradient-text ">{expectedROI}</div>
              <div className="text-sm text-white/60">Per term</div>
            </div>
            <div>
              <label className="text-white/80 block mb-2">Potential Return</label>
              <div className="text-2xl font-bold gradient-text ">{potentialReturn}</div>
              <div className="text-sm text-white/60">Based on investment amount</div>
            </div>
          </div>
          <div className="mt-6">
            <Button className="w-full gradient-bg -strong" onClick={calculateROI}>
              Calculate
            </Button>
          </div>
        </div>
      </div>

      {/* Investment Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Starter Plan */}
        <div className="glass-effect rounded-xl p-6 hover- relative overflow-hidden group transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
            <div className="text-3xl font-bold gradient-text  mb-4">$500</div>
            <ul className="space-y-3 mb-6 text-white/80">
              <li>• 15% ROI per term</li>
              <li>• 3-month minimum term</li>
              <li>• Weekly reports</li>
              <li>• Basic portfolio management</li>
            </ul>
            <Button className="w-full gradient-bg -strong">Get Started</Button>
          </div>
        </div>

        {/* Advanced Plan */}
        <div className="glass-effect rounded-xl p-6 hover- relative overflow-hidden group transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-2">Advanced</h3>
            <div className="text-3xl font-bold gradient-text  mb-4">$2,500</div>
            <ul className="space-y-3 mb-6 text-white/80">
              <li>• 25% ROI per term</li>
              <li>• 6-month minimum term</li>
              <li>• Daily reports</li>
              <li>• Advanced portfolio optimization</li>
            </ul>
            <Button className="w-full gradient-bg -strong">Get Started</Button>
          </div>
        </div>

        {/* Professional Plan */}
        <div className="glass-effect rounded-xl p-6 hover- relative overflow-hidden group transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-pink-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
            <div className="text-3xl font-bold gradient-text  mb-4">$5,000</div>
            <ul className="space-y-3 mb-6 text-white/80">
              <li>• 35% ROI per term</li>
              <li>• 6-month minimum term</li>
              <li>• Real-time updates</li>
              <li>• Dedicated account manager</li>
            </ul>
            <Button className="w-full gradient-bg -strong">Get Started</Button>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="glass-effect rounded-xl p-6 hover- relative overflow-hidden group transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-orange-400/10 to-red-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
            <div className="text-3xl font-bold gradient-text  mb-4">$10,000</div>
            <ul className="space-y-3 mb-6 text-white/80">
              <li>• 45% ROI per term</li>
              <li>• Custom term length</li>
              <li>• Priority support</li>
              <li>• Custom portfolio strategy</li>
            </ul>
            <Button className="w-full gradient-bg -strong">Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
}