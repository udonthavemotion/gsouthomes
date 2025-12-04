import React from 'react';
import { COMPANY_INFO, MOCK_HOMES, TESTIMONIALS } from '../constants';
import Button from '../components/Button';
import HomeCard from '../components/HomeCard';
import { Award, Truck, Wrench, DollarSign, Map, ShieldCheck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const featuredHomes = MOCK_HOMES.filter(h => h.isFeatured).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center bg-stone-900 overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-70"
          >
            <source src="/assets/video/catalog-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/30 to-transparent"></div>
        </div>

        <div className="relative z-10 container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {COMPANY_INFO.tagline}
            </h1>
            <p className="text-lg sm:text-xl text-stone-200 mb-10 font-light max-w-2xl mx-auto">
              Providing Louisiana families with high-quality modular and manufactured homes since {COMPANY_INFO.founded}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/catalog" className="text-lg px-10 py-4">
                View Our Homes
              </Button>
              <Button variant="secondary" to="/contact" className="text-lg px-10 py-4">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Icon Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">Why Gulf South Homes?</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              We aren't just selling homes; we are building communities. Here is what sets our family-owned business apart.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {[
              { icon: <Award size={32} />, title: "Family Owned", desc: "Local values since 1995" },
              { icon: <Truck size={32} />, title: "Delivery & Setup", desc: "Professional installation included" },
              { icon: <DollarSign size={32} />, title: "Financing Available", desc: "Easy approval process" },
              { icon: <Wrench size={32} />, title: "Parts & Service", desc: "In-house support team" },
              { icon: <Map size={32} />, title: "Land/Home Packages", desc: "Turnkey property solutions" },
              { icon: <ShieldCheck size={32} />, title: "Huge Inventory", desc: "Top manufacturers only" },
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-4 sm:p-6 rounded-xl hover:bg-stone-50 transition-colors">
                <div className="bg-emerald-100 text-primary p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-stone-900 mb-1 sm:mb-2 text-sm sm:text-base">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-stone-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Homes */}
      <section className="py-16 sm:py-20 bg-stone-50 border-y border-stone-200">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4">
            <div className="text-center sm:text-left w-full sm:w-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">Featured Models</h2>
              <p className="text-stone-600">Explore our most popular floor plans.</p>
            </div>
            <Link to="/catalog" className="hidden sm:flex items-center text-primary font-medium hover:text-emerald-800 whitespace-nowrap">
              View All Inventory <span className="ml-2">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredHomes.map(home => (
              <HomeCard key={home.id} home={home} />
            ))}
          </div>
          
          <div className="mt-8 sm:mt-10 sm:hidden">
            <Button to="/catalog" fullWidth variant="outline">View All Inventory</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-primary overflow-hidden relative">
        <div className="container relative z-10">
          <div className="text-center mb-12 sm:mb-16 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">What Our Neighbors Say</h2>
            <p className="text-emerald-100 max-w-2xl mx-auto">Trusted by families across South Louisiana.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-6 sm:p-8 rounded-xl shadow-xl">
                <div className="flex text-amber-500 mb-4">
                  {[...Array(t.rating)].map((_, r) => <Star key={r} size={16} fill="currentColor" />)}
                </div>
                <p className="text-stone-700 mb-6 italic text-sm sm:text-base">"{t.text}"</p>
                <div>
                  <p className="font-bold text-stone-900">{t.name}</p>
                  <p className="text-sm text-stone-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-stone-900 text-white py-10 sm:py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Ready to find your dream home?</h3>
            <p className="text-stone-400 text-sm sm:text-base">Visit our lot in Houma or give us a call today.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Button variant="secondary" onClick={() => window.location.href=`tel:${COMPANY_INFO.phone}`}>
              Call {COMPANY_INFO.phone}
            </Button>
            <Button variant="outline" to="/contact" className="border-stone-500 text-stone-300 hover:border-white hover:text-white hover:bg-transparent">
              Get Directions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
