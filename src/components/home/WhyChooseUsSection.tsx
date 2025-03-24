import * as HeroIcons from '@heroicons/react/24/outline';

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

export default function WhyChooseUsSection() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl font-bold gradient-text  sm:text-4xl">
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
            <div key={item.title} className="glass-effect rounded-xl p-6 hover- relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <IconComponent className="h-8 w-8 text-blue-400  mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/60">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}