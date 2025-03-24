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

export default function TestimonialsSection() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold gradient-text  sm:text-4xl">
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
              className="glass-effect rounded-xl p-8 hover- relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-16 w-16 rounded-full ring-2 ring-blue-500/50 "
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
  );
}