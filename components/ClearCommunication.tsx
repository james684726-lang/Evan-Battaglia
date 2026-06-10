// components/ClearCommunication.tsx
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, MessageCircle, ArrowRight, Phone, Mail, Clock, Shield } from 'lucide-react';

const ClearCommunication = () => {
  return (
    <section className="py-16 md:py-24 bg-white m-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Clear Communication</h2>
            <div className="w-20 h-1 bg-secondary mb-6"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              No ghosting, no confusing updates. You'll know where your loan stands every step.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-primary">Real-time updates</h3>
                  <p className="text-gray-600">You'll never wonder about your loan status</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-primary">No confusing jargon</h3>
                  <p className="text-gray-600">I explain everything in plain English</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-primary">Full transparency</h3>
                  <p className="text-gray-600">You'll know all costs upfront</p>
                </div>
              </div>
            </div>

            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light transition">
              Start a Conversation <ArrowRight size={18} />
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/img/home/ho4.jpg"
                alt="Clear communication with clients"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-4 rounded-xl shadow-lg">
              <p className="font-bold text-2xl">💬</p>
              <p className="text-sm">Always Connected</p>
            </div>
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

export default ClearCommunication;