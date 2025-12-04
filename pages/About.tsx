import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Shield, Users, Clock, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      <div className="bg-stone-900 text-white py-20 text-center">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Our Story</h1>
            <p className="text-xl text-stone-300 max-w-2xl mx-auto">Building trust and homes in Louisiana since 1995.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-8 md:p-12 max-w-4xl mx-auto">
            <div className="prose prose-stone max-w-none">
                <h3 className="text-2xl font-bold text-stone-900 mb-4">A Family Tradition</h3>
                <p className="mb-6 text-stone-600 leading-relaxed">
                    Founded in 1995 by Stephanie and Tim Duplantis, {COMPANY_INFO.name} began with a simple mission: 
                    to provide high-quality manufactured and modular homes to our community with transparency and integrity.
                    Over 30 years later, we are still family-owned and operated, maintaining the same commitment to customer satisfaction 
                    that launched our business.
                </p>
                <p className="mb-6 text-stone-600 leading-relaxed">
                    We understand that buying a home is one of the biggest decisions you will make. That is why our team 
                    focuses on education rather than sales pressure. We want you to feel confident in your purchase, knowing 
                    that your home is built to last and backed by a local team that cares.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                    <div className="flex gap-4 items-start">
                        <div className="bg-emerald-100 p-3 rounded-lg text-primary"><Shield size={24} /></div>
                        <div>
                            <h4 className="font-bold text-stone-900">LHMA Members</h4>
                            <p className="text-sm text-stone-500">Proud members of the Louisiana Manufactured Housing Association.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="bg-emerald-100 p-3 rounded-lg text-primary"><Award size={24} /></div>
                        <div>
                            <h4 className="font-bold text-stone-900">BBB Accredited</h4>
                            <p className="text-sm text-stone-500">A+ Rating for our commitment to business ethics.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="bg-emerald-100 p-3 rounded-lg text-primary"><Users size={24} /></div>
                        <div>
                            <h4 className="font-bold text-stone-900">Local Team</h4>
                            <p className="text-sm text-stone-500">Our staff lives and works right here in Houma.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="bg-emerald-100 p-3 rounded-lg text-primary"><Clock size={24} /></div>
                        <div>
                            <h4 className="font-bold text-stone-900">Since 1995</h4>
                            <p className="text-sm text-stone-500">Over three decades of industry experience.</p>
                        </div>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-stone-900 mb-4">Our Commitment</h3>
                <p className="text-stone-600 leading-relaxed">
                    We don't just sell you a home; we help you build a life. From helping you find the perfect plot of land through 
                    our Land & Home packages to servicing your home years down the line with our in-house parts department, 
                    Gulf South Homes is your partner for the long haul.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
