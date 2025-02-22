import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
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
      <nav className={`mx-4 my-4 transition-all duration-300 ease-in-out ${
        scrolled ? 'scale-[0.97]' : ''
      }`}>
        <div className={`relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden transition-all duration-300 ${
          scrolled ? 'rounded-full shadow-lg shadow-indigo-500/20' : 'rounded-lg'
        }`}>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm mix-blend-overlay" />

          <div className="relative px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex lg:flex-1">
                <Link to="/" className="-m-1.5 p-1.5">
                  <span className="text-xl font-bold text-white">
                    CryptoTrade
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

              <div className="hidden lg:flex lg:gap-x-8">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full ${
                        isActive 
                          ? 'text-white bg-white/20'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white animate-fade-in" />
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 items-center">
                <ThemeToggle />
                <Link to="/login">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors duration-300"
                  >
                    Log in
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button 
                    size="sm"
                    className="bg-white text-indigo-600 hover:bg-white/90 transition-all duration-300"
                  >
                    Sign up
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
          className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-black/40"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className="fixed inset-x-4 top-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl">
          <div className="flex items-center justify-between p-6">
            <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="text-xl font-bold text-white">
                CryptoTrade
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-full p-2.5 text-white"
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
                        ? 'bg-white/20 text-white'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
              <div className="mt-6 mb-4 flex items-center justify-between px-3">
                <span className="text-sm font-medium text-white">Theme</span>
                <ThemeToggle />
              </div>
              <div className="mt-6 space-y-3">
                <Link
                  to="/login"
                  className="block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button 
                    variant="outline" 
                    className="w-full justify-center bg-white/10 border-white/20 text-white hover:bg-white/20"
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
                    className="w-full justify-center bg-white text-indigo-600 hover:bg-white/90"
                  >
                    Sign up
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
