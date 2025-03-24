import * as HeroIcons from '@heroicons/react/24/outline';

const stats = [
  { value: '$12B+', label: 'Trading Volume', icon: HeroIcons.BanknotesIcon },
  { value: '2M+', label: 'Active Traders', icon: HeroIcons.UserGroupIcon },
  { value: '150+', label: 'Countries', icon: HeroIcons.GlobeAltIcon },
  { value: '99.9%', label: 'Uptime', icon: HeroIcons.ChartBarIcon },
];

export default function StatsSection() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold gradient-text sm:text-4xl">
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
              <div key={stat.label} className="glass-effect rounded-xl p-8 hover- relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <dt className="flex flex-col items-center gap-4">
                  <IconComponent className="h-8 w-8 text-blue-400" />
                  <span className="text-4xl font-bold gradient-text">{stat.value}</span>
                  <span className="text-sm text-white/80">{stat.label}</span>
                </dt>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}