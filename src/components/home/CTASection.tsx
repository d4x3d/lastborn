import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <div className="relative px-6 py-32 sm:py-40 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="glass-effect rounded-2xl p-8 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold gradient-text  sm:text-4xl mb-6">
              Ready to start trading?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join millions of traders and investors on the most trusted cryptocurrency trading platform.
            </p>
            <div className="flex items-center justify-center gap-x-6">
              <Link to="/signup">
                <Button
                  size="lg"
                  className="gradient-bg -strong hover:scale-105 transition-all duration-300 relative overflow-hidden group px-8"
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
  );
}