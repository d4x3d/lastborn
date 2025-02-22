import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import * as HeroIcons from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Lightning-Fast Trading',
    description: 'Execute trades instantly with our high-performance trading engine.',
    Icon: HeroIcons.BoltIcon,
  },
  {
    name: 'Bank-Grade Security',
    description: 'Your assets are protected with military-grade encryption and secure cold storage.',
    Icon: HeroIcons.ShieldCheckIcon,
  },
  {
    name: 'Global Access',
    description: 'Trade from anywhere in the world with our reliable platform.',
    Icon: HeroIcons.GlobeAltIcon,
  },
  {
    name: '24/7 Expert Support',
    description: 'Get help anytime with our dedicated support team of crypto experts.',
    Icon: HeroIcons.UserGroupIcon,
  },
];

const stats = [
  { value: '$12B+', label: 'Trading Volume' },
  { value: '2M+', label: 'Active Traders' },
  { value: '150+', label: 'Countries' },
  { value: '99.9%', label: 'Uptime' },
];

const testimonials = [
  {
    content: "The best crypto trading platform I've ever used. The interface is intuitive and the tools are powerful.",
    author: "Sarah Johnson",
    role: "Professional Trader",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "Outstanding security features and customer support. I feel confident trading here.",
    author: "Michael Chen",
    role: "Crypto Investor",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "The advanced charting tools have completely transformed my trading strategy.",
    author: "Alex Thompson",
    role: "Day Trader",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Content */}
      <div className="relative z-10">
        {/* Hero section */}
        <div className="relative isolate overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url("https://i.postimg.cc/Gm55Zz3P/background-v2.png")`, // Update this with your image name
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
              <div className="animate-fade-in">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl animate-slide-up">
                  Trade Crypto with
                  <span className="bg-gradient-to-r from-purple via-pink to-teal bg-clip-text text-transparent"> Confidence</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 animate-slide-up-delayed">
                  Experience professional-grade crypto trading with advanced tools, real-time data, and bank-grade security.
                </p>
                <div className="mt-10 flex items-center gap-x-6 animate-slide-up-delayed-2">
                  <Link to="/signup">
                    <Button variant="gradient" size="lg" className="transform hover:scale-105 transition-all duration-300">
                      Start Trading
                    </Button>
                  </Link>
                  <Link to="/markets">
                    <Button variant="outline" size="lg" className="transform hover:scale-105 transition-all duration-300 border-purple hover:bg-purple/10">
                      View Markets
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 backdrop-blur-sm bg-white/5">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Trusted by traders worldwide
              </h2>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col bg-gradient-to-br from-purple/5 to-teal/5 p-8 hover:from-purple/10 hover:to-teal/10 transition-colors duration-300">
                  <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">{stat.label}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-purple dark:text-teal">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 backdrop-blur-sm bg-white/5">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-teal">Trading Made Simple</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to trade cryptocurrency
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => {
                const IconComponent = feature.Icon;
                return (
                  <div key={feature.name} className="group hover:scale-105 transition-transform duration-300">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                      <IconComponent className="h-5 w-5 flex-none text-teal group-hover:text-pink transition-colors duration-300" aria-hidden="true" />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>

        {/* Testimonials section */}
        <div className="py-24 sm:py-32 backdrop-blur-sm bg-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-teal">Testimonials</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Trusted by traders worldwide
              </p>
            </div>
            <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg ring-1 ring-purple/10 hover:ring-purple/20 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center gap-4 mb-4">
                      <img src={testimonial.image} alt={testimonial.author} className="h-12 w-12 rounded-full" />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                        <p className="text-sm text-teal">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-lg leading-6 text-gray-900 dark:text-white">{testimonial.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8 backdrop-blur-sm bg-white/5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Ready to start trading?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              Join millions of traders and investors on the most trusted cryptocurrency trading platform.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/signup">
                <Button variant="gradient" size="lg" className="transform hover:scale-105 transition-all duration-300">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
