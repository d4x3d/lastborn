import * as HeroIcons from '@heroicons/react/24/outline';

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

export default function FeaturesSection() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl font-bold gradient-text  sm:text-4xl">
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
              className={`glass-effect rounded-xl p-6 hover- relative overflow-hidden group transition-all duration-300 hover:scale-105`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10">
                <IconComponent className="h-8 w-8 text-blue-400  mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{feature.name}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}