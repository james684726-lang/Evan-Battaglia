// components/FastResponseTimes.tsx
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Zap, ArrowRight, Phone, Mail, Clock, Rocket } from 'lucide-react';

const FastResponseTimes = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 m-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative order-2 md:order-1">
            <div className="relative h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/img/home/ho3.jpg"
                alt="Fast response times"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-xl shadow-lg">
              <p className="font-bold text-2xl">⚡</p>
              <p className="text-sm">Same Day</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Fast Response Times</h2>
            <div className="w-20 h-1 bg-secondary mb-6"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Questions get answered the same day because timing matters in real estate.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-primary">Same-day responses</h3>
                  <p className="text-gray-600">I never leave you waiting</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-primary">24-48 hour pre-approval</h3>
                  <p className="text-gray-600">Fast turnaround when you need it</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Rocket className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-primary">Quick closings</h3>
                  <p className="text-gray-600">I work efficiently to meet your timeline</p>
                </div>
              </div>
            </div>

            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light transition">
              Get a Quick Response <ArrowRight size={18} />
            </Link>
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

export default FastResponseTimes;