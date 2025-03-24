import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TradingViewChart from '@/components/TradingViewChart';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:flex items-center">
        <div className="max-w-2xl">
          <div className="animate-fade-in space-y-8">
            <div className="inline-flex items-center rounded-full px-4 py-1 bg-gradient-to-r from-blue-400/10 to-purple-400/10 backdrop-blur-sm border border-blue-400/20">
              <span className="text-sm text-blue-400">Now supporting 100+ cryptocurrencies</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
              <span className="text-white">Trade Crypto with </span>
              <span className="gradient-text">Confidence</span>
            </h1>
            <p className="text-xl leading-8 text-white/80 max-w-lg">
              Experience professional-grade crypto trading with advanced tools, real-time data, and bank-grade security.
            </p>
            <div className="flex items-center gap-x-6">
              <Link to="/signup">
                <Button
                  size="lg"
                  className="gradient-bg hover:scale-105 transition-all duration-300 relative overflow-hidden group px-8"
                >
                  <span className="relative z-10">Start Trading</span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"></div>
                </Button>
              </Link>
              <Link to="/markets">
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-effect hover:bg-white/10 px-8"
                >
                  View Markets
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-auto lg:w-1/2 relative">
          <div className="glass-effect rounded-2xl p-1" style={{ height: "500px" }}>
            <TradingViewChart />
          </div>
        </div>
      </div>
    </div>
  );
}