// components/HomePurchase.tsx
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Home, ArrowRight, Phone, Mail } from 'lucide-react';

const HomePurchase = () => {
  return (
    <section className="py-16 md:py-24 m-6 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative order-2 md:order-1">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/img/home/ho6.jpg"
                alt="Happy family buying their first home"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-xl shadow-lg">
              <p className="font-bold text-2xl">🏠</p>
              <p className="text-sm">First Time Buyer?</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Home Purchase</h2>
            <div className="w-20 h-1 bg-secondary mb-6"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              First-time buyer or move-up home, I'll guide you from pre-approval to closing with zero surprises.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Pre-approval process made simple</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Understanding your budget and options</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Smooth closing with no surprises</span>
              </div>
            </div>

            <Link href="/apply" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light transition">
              Get Pre-Approved <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="mt-12 bg-gray-50 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
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

export default HomePurchase;