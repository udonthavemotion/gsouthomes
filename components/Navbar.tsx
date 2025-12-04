import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Homes', path: '/catalog' },
    { name: 'Single-Wide', path: '/single-wide' },
    { name: 'Land & Home', path: '/land-home' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-stone-900/5' 
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      {/* Top Bar - Desktop Only */}
      <div className="hidden lg:block bg-stone-900 text-stone-300">
        <div className="container mx-auto px-6 xl:px-8">
          <div className="flex justify-between items-center py-2.5 text-xs font-medium tracking-wide">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              {COMPANY_INFO.address}
            </span>
            <div className="flex items-center space-x-6">
              <span className="text-stone-400">Mon-Fri: 8am - 5pm</span>
              <a 
                href={`tel:${COMPANY_INFO.phone}`} 
                className="flex items-center gap-2 text-white hover:text-primary transition-colors font-semibold"
              >
                <Phone size={14} className="text-primary" />
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 lg:h-24 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src="/assets/images/logo/logo.png" 
                alt="Gulf South Homes Logo" 
                className="h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold text-stone-900 leading-none font-display tracking-tight">
                GULF SOUTH
              </span>
              <span className="text-xs lg:text-sm font-semibold text-primary leading-none tracking-[0.2em] mt-0.5">
                HOMES INC
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                  isActive(link.path) 
                    ? 'text-primary' 
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/contact" 
              className={`text-sm font-semibold transition-colors ${
                isActive('/contact') ? 'text-primary' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Contact
            </Link>
            <Button variant="primary" to="/catalog" className="px-6 py-2.5 text-sm shadow-lg shadow-primary/20">
              Browse Homes
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                isOpen 
                  ? 'bg-stone-900 text-white' 
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-[80px] bg-white/98 backdrop-blur-xl shadow-2xl transition-all duration-500 ease-out ${
          isOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{ maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="space-y-1">
            {navLinks.map((link, idx) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
                style={{ 
                  animationDelay: `${idx * 50}ms`,
                  animation: isOpen ? 'fadeInUp 0.4s ease-out forwards' : 'none'
                }}
              >
                {link.name}
                <ChevronRight size={18} className={isActive(link.path) ? 'text-primary' : 'text-stone-400'} />
              </Link>
            ))}
            
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 ${
                isActive('/contact')
                  ? 'text-primary bg-primary/10'
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              Contact Us
              <ChevronRight size={18} className={isActive('/contact') ? 'text-primary' : 'text-stone-400'} />
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-stone-200 space-y-4">
            <Button to="/catalog" fullWidth onClick={() => setIsOpen(false)} className="py-4 text-base">
              Browse All Homes
            </Button>
            
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center justify-center gap-3 py-4 bg-stone-100 rounded-xl text-stone-900 font-semibold hover:bg-stone-200 transition-colors"
            >
              <Phone size={20} className="text-primary" />
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
