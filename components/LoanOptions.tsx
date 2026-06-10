// components/LoanOptions.tsx
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, FileText, ArrowRight, Phone, Mail } from 'lucide-react';

const LoanOptions = () => {
  const loanTypes = [
    { name: 'Conventional', description: 'Standard loans with competitive rates', icon: '🏦' },
    { name: 'FHA', description: 'Low down payment options', icon: '🏠' },
    { name: 'VA', description: 'For veterans and military families', icon: '🪖' },
    { name: 'Jumbo', description: 'For high-value properties', icon: '💎' },
    { name: 'Niche Investor', description: 'Portfolio loans and unique situations', icon: '📊' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 m-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Content Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Loan Options</h2>
            <div className="w-20 h-1 bg-secondary mb-6"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Conventional, FHA, VA, Jumbo, and niche investor products. If it exists, I'll help you access it.
            </p>

            <div className="space-y-4 mb-8">
              {loanTypes.map((loan, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-2xl">{loan.icon}</span>
                  <div>
                    <h3 className="font-bold text-primary">{loan.name}</h3>
                    <p className="text-sm text-gray-600">{loan.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/apply" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light transition">
              Find Your Loan <ArrowRight size={18} />
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/img/home/ho5.jpg"
                alt="Various mortgage loan options"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-secondary text-white p-4 rounded-xl shadow-lg">
              <p className="font-bold text-2xl">📋</p>
              <p className="text-sm">Many Options</p>
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Call me directly</p>
              <a href="tel:6309890215" className="text-xl font-bold text-primary">630.989.0215</a>
            </div>
          </div>
          <div className="w-px h-10 bg-gray-300 hidden sm:block"></div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Email me anytime</p>
              <a href="mailto:chmairbnb@outlook.com" className="text-lg font-medium text-primary">chmairbnb@outlook.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanOptions;