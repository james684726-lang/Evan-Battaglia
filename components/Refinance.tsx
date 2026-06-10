// components/Refinance.tsx
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, RefreshCw, ArrowRight, Phone, Mail } from 'lucide-react';

const Refinance = () => {
  return (
    <section className="py-16 m-6 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Refinance</h2>
            <div className="w-20 h-1 bg-secondary mb-6"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Lower your rate, shorten your term, or tap into equity. We'll run the numbers together so you know it makes sense.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Rate reduction to save monthly</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Shorten your loan term</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Cash-out for home improvements or debt consolidation</span>
              </div>
            </div>

            <Link href="/apply" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light transition">
              Check Your Savings <ArrowRight size={18} />
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/img/home/ho2.jpg"
                alt="Home refinance savings"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 bg-secondary text-white p-4 rounded-xl shadow-lg">
              <p className="font-bold text-2xl">💰</p>
              <p className="text-sm">Lower Payments</p>
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

export default Refinance;