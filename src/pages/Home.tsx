import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import * as HeroIcons from '@heroicons/react/24/outline';

const livePrices = [
  { symbol: 'BTC', name: 'Bitcoin', price: '45,321.00', change: '+5.2' },
  { symbol: 'ETH', name: 'Ethereum', price: '2,831.45', change: '+3.8' },
  { symbol: 'SOL', name: 'Solana', price: '98.76', change: '+7.2' },
  { symbol: 'BNB', name: 'Binance', price: '312.50', change: '-1.2' },
];

// ... (keep all other constant declarations)

export default function Home() {
  // ... (keep state and effect hooks)

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url("https://i.postimg.cc/Gm55Zz3P/background-v2.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4,
        }}
      />
      
      {/* Floating Crypto Icons */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {['/images/bitcoin-btc-logo.svg', '/images/ethereum-eth-logo.svg', '/images/solana-sol-logo.svg'].map((icon, index) => (
          <img
    bgGradient: 'from-purple-400/20 to-pink-500/20',
  },
];

const stats = [
  { value: '$12B+', label: 'Trading Volume', icon: HeroIcons.BanknotesIcon },
  { value: '2M+', label: 'Active Traders', icon: HeroIcons.UserGroupIcon },
  { value: '150+', label: 'Countries', icon: HeroIcons.GlobeAltIcon },
  { value: '99.9%', label: 'Uptime', icon: HeroIcons.ChartBarIcon },
];

const whyChooseUs = [
  {
    title: 'Advanced Security',
    description: 'Multi-signature wallets and regular security audits ensure your assets are always protected.',
    icon: HeroIcons.LockClosedIcon,
  },
  {
    title: 'Competitive Fees',
    description: 'Industry-leading fee structure with discounts for high-volume traders.',
    icon: HeroIcons.CurrencyDollarIcon,
  },
  {
    title: 'Powerful API',
    description: 'Robust API suite for automated trading and portfolio management.',
    icon: HeroIcons.CommandLineIcon,
  },
];

const partners = [
  '/images/Bank_of_America-Logo.wine.svg',
  '/images/PayPal-Logo.wine.svg',
  '/images/Binance-Logo.wine.svg',
  '/images/The_New_York_Times-Logo.wine.svg',
];

const testimonials = [
  {
    content: "The best crypto trading platform I've ever used. The interface is intuitive and the tools are powerful.",
    author: "Sarah Johnson",
    role: "Professional Trader",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    stats: { trades: '15K+', volume: '$2.5M', years: '5' }
  },
  {
    content: "Outstanding security features and customer support. I feel confident trading here.",
    author: "Michael Chen",
    role: "Crypto Investor",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    stats: { trades: '8K+', volume: '$1.2M', years: '3' }
  },
  {
    content: "The advanced charting tools have completely transformed my trading strategy.",
    author: "Alex Thompson",
    role: "Day Trader",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    stats: { trades: '20K+', volume: '$3.8M', years: '4' }
  }
];

export default function Home() {
  const [currentPriceIndex, setCurrentPriceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPriceIndex((prev) => (prev + 1) % livePrices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url("https://i.postimg.cc/Gm55Zz3P/background-v2.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4,
        }}
      />
      
      {/* Floating Crypto Icons */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {['/images/bitcoin-btc-logo.svg', '/images/ethereum-eth-logo.svg', '/images/solana-sol-logo.svg'].map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt="crypto"
            className="absolute animate-float opacity-20"
            style={{
              width: '80px',
              height: '80px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-black/30 to-black/50" />

      {/* Content */}
      <div className="relative z-10">
        {/* Live Price Ticker */}
        <div className="w-full overflow-hidden bg-gradient-to-r from-black/50 via-blue-900/30 to-black/50 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex items-center justify-between animate-slide-left">
              {livePrices.map((coin, index) => (
                <div 
                  key={coin.symbol}
                  className={`flex items-center space-x-4 transition-opacity duration-500 ${
                    index === currentPriceIndex ? 'opacity-100' : 'opacity-60'
                  }`}
                >
                  <img 
                    src={`/images/${coin.symbol.toLowerCase()}.svg`}
                    alt={coin.name}
                    className="h-6 w-6"
                  />
                  <div>
                    <span className="text-white font-medium">{coin.symbol}</span>
                    <span className="text-white/60 mx-2">${coin.price}</span>
                    <span className={coin.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                      {coin.change}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero section */}
        <div className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 md:py-40 lg:flex items-center">
            <div className="max-w-2xl">
              <div className="animate-fade-in space-y-8">
                <div className="inline-flex items-center rounded-full px-4 py-1 bg-gradient-to-r from-blue-400/10 to-purple-400/10 backdrop-blur-sm border border-blue-400/20">
                  <span className="text-sm text-blue-400">Now supporting 100+ cryptocurrencies</span>
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
                  <span className="text-white">Trade Crypto with </span>
                  <span className="gradient-text glow-strong">Confidence</span>
                </h1>
                <p className="text-xl leading-8 text-white/80 max-w-lg">
                  Experience professional-grade crypto trading with advanced tools, real-time data, and bank-grade security.
                </p>
                <div className="flex items-center gap-x-6">
                  <Link to="/signup">
                    <Button 
                      size="lg" 
                      className="gradient-bg glow-strong hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                    >
                      <span className="relative z-10">Start Trading</span>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"></div>
                    </Button>
                  </Link>
                  <Link to="/markets">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="glass-effect hover:bg-white/10"
                    >
                      View Markets
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-auto lg:w-1/2 relative">
              <div className="glass-effect rounded-2xl p-1 animate-float">
                <img 
                  src="/images/bitcoin-btc-logo.svg"
                  alt="Trading Interface"
                  className="w-full h-auto rounded-xl glow-strong"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold gradient-text glow sm:text-4xl">
                Trusted by traders worldwide
              </h2>
              <p className="text-lg text-white/60">
                Join millions of traders and investors on our platform
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.label} className="glass-effect rounded-xl p-8 hover-glow relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <dt className="flex flex-col items-center gap-4">
                      <IconComponent className="h-8 w-8 text-blue-400 glow" />
                      <span className="text-4xl font-bold gradient-text glow">{stat.value}</span>
                      <span className="text-sm text-white/80">{stat.label}</span>
                    </dt>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>

        {/* Why Choose Us section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold gradient-text glow sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="text-lg text-white/60">
              Industry-leading features designed for serious traders
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="glass-effect rounded-xl p-6 hover-glow relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <IconComponent className="h-8 w-8 text-blue-400 glow mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold gradient-text glow sm:text-4xl">
              Everything you need to trade cryptocurrency
            </h2>
            <p className="text-lg text-white/60">
              Advanced features wrapped in a simple, intuitive interface
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const IconComponent = feature.Icon;
              return (
                <div 
                  key={feature.name} 
                  className={`glass-effect rounded-xl p-6 hover-glow relative overflow-hidden group transition-all duration-300 hover:scale-105`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <IconComponent className="h-8 w-8 text-blue-400 glow mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">{feature.name}</h3>
                    <p className="text-white/60">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partners section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold gradient-text glow sm:text-4xl">
              Trusted Partners
            </h2>
            <p className="text-lg text-white/60">
              Working with industry leaders to provide the best service
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((logo, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 hover-glow">
                <img src={logo} alt="Partner" className="h-12 w-auto mx-auto filter brightness-0 invert opacity-80" />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials section */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold gradient-text glow sm:text-4xl">
                Trusted by Professional Traders
              </h2>
              <p className="text-lg text-white/60">
                Hear from our community of successful traders
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="glass-effect rounded-xl p-8 hover-glow relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="h-16 w-16 rounded-full ring-2 ring-blue-500/50 glow" 
                      />
                      <div>
                        <h3 className="text-lg font-bold gradient-text">{testimonial.author}</h3>
                        <p className="text-blue-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-lg text-white/90 mb-6">{testimonial.content}</p>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                      <div className="text-center">
                        <p className="text-sm text-white/60">Trades</p>
                        <p className="text-lg font-bold gradient-text">{testimonial.stats.trades}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-white/60">Volume</p>
                        <p className="text-lg font-bold gradient-text">{testimonial.stats.volume}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-white/60">Years</p>
                        <p className="text-lg font-bold gradient-text">{testimonial.stats.years}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="relative mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
          <div className="glass-effect rounded-2xl p-8 max-w-3xl mx-auto text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold gradient-text glow sm:text-4xl mb-6">
                Ready to start trading?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Join millions of traders and investors on the most trusted cryptocurrency trading platform.
              </p>
              <div className="flex items-center justify-center gap-x-6">
                <Link to="/signup">
                  <Button 
                    size="lg" 
                    className="gradient-bg glow-strong hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Create Account</span>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"></div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
