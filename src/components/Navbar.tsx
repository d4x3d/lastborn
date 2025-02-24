import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import * as HeroIcons from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/', icon: HeroIcons.HomeIcon },
  { name: 'Markets', href: '/markets', icon: HeroIcons.ChartBarIcon },
  { name: 'Dashboard', href: '/dashboard', icon: HeroIcons.UserIcon },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <nav className={`transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-black/50 backdrop-blur-md rounded-full mx-4 my-2' : 'bg-black/50 backdrop-blur-md'
      }`}>
        <div className="relative">
          <div className="relative px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex lg:flex-1">
                <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                  <img src="/images/icon.png" alt="Logo" className="h-8 w-8" />
                  <span className="text-xl font-bold gradient-text glow">
                    JayeCane
                  </span>
                </Link>
              </div>

              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <HeroIcons.Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="hidden lg:flex lg:gap-x-6">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full flex items-center gap-2 ${
                        isActive 
                          ? 'text-white glass-effect glow'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 animate-fade-in" />
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 items-center">
                <Link to="/login">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="glass-effect hover:bg-white/10 text-white px-6"
                  >
                    Log in
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button 
                    size="sm"
                    className="gradient-bg glow-strong hover:scale-105 transition-all duration-300 relative overflow-hidden group px-6"
                  >
                    <span className="relative z-10">Sign up</span>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"></div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-50 transform transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className="fixed inset-x-4 top-4 glass-effect rounded-2xl">
          <div className="flex items-center justify-between p-6">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <img src="/images/icon.png" alt="Logo" className="h-8 w-8" />
              <span className="text-xl font-bold gradient-text glow">
                JayeCane
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-full p-2.5 text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <HeroIcons.XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-2 flow-root">
            <div className="space-y-2 px-6 pb-6">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`-mx-3 flex items-center gap-2 rounded-full px-4 py-3 text-base font-semibold transition-colors duration-300 ${
                      isActive
                        ? 'glass-effect glow text-white'
                        : 'text-white/80 hover:bg-white/5 hover:text-white'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
              <div className="mt-6 space-y-3">
                <Link
                  to="/login"
                  className="block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button 
                    variant="outline" 
                    className="w-full justify-center glass-effect hover:bg-white/10 text-white"
                  >
                    Log in
                  </Button>
                </Link>
                <Link
                  to="/signup"
                  className="block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button 
                    className="w-full justify-center gradient-bg glow-strong hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Sign up</span>
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
