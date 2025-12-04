import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';
import { MapPin, Phone, Clock, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">{COMPANY_INFO.name}</h3>
            <p className="mb-4 text-stone-400">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-sm text-stone-500">
              Serving Louisiana families since {COMPANY_INFO.founded}. Locally owned and operated.
            </p>
            <div className="flex mt-6 space-x-4">
              {/* Mock Social Icon */}
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/catalog" className="hover:text-white transition-colors">Our Homes</Link></li>
              <li><Link to="/land-home" className="hover:text-white transition-colors">Land & Home Packages</Link></li>
              <li><Link to="/financing" className="hover:text-white transition-colors">Financing Options</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Parts & Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white">{COMPANY_INFO.phone}</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between border-b border-stone-800 pb-2">
                <span>Mon - Fri</span>
                <span>{COMPANY_INFO.hours.weekdays}</span>
              </li>
              <li className="flex justify-between border-b border-stone-800 pb-2">
                <span>Saturday</span>
                <span>{COMPANY_INFO.hours.saturday}</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Sunday</span>
                <span>{COMPANY_INFO.hours.sunday}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
