import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import * as HeroIcons from '@heroicons/react/24/outline';
import TradingViewChart from '@/components/TradingViewChart';

const features = [
  {
    name: 'Lightning-Fast Trading',
    description: 'Execute trades instantly with our high-performance trading engine.',
    Icon: HeroIcons.BoltIcon,
    bgGradient: 'from-yellow-400/20 to-orange-500/20',
  },
  {
    name: 'Bank-Grade Security',
    description: 'Your assets are protected with military-grade encryption and secure cold storage.',
    Icon: HeroIcons.ShieldCheckIcon,
    bgGradient: 'from-green-400/20 to-emerald-500/20',
  },
  {
    name: 'Global Access',
    description: 'Trade from anywhere in the world with our reliable platform.',
    Icon: HeroIcons.GlobeAltIcon,
    bgGradient: 'from-blue-400/20 to-indigo-500/20',
  },
  {
    name: '24/7 Expert Support',
    description: 'Get help anytime with our dedicated support team of crypto experts.',
    Icon: HeroIcons.UserGroupIcon,
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
      
      {/* Gradient Overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-black/30 to-black/50" />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero section */}
        <div className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:flex items-center">
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
                      className="gradient-bg glow-strong hover:scale-105 transition-all duration-300 relative overflow-hidden group px-8"
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
        <div className="relative px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="glass-effect rounded-2xl p-8 text-center relative overflow-hidden group">
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
                      className="gradient-bg glow-strong hover:scale-105 transition-all duration-300 relative overflow-hidden group px-8"
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
    </div>
  );
}
