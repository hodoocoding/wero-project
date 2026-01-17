import React from "react";
import Image from "next/image";
import { MapPin, Mail, ArrowUpRight } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-brand-black text-white pt-24 pb-8 border-t border-white/10"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Left: CTA */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6 leading-none">
                Let's <br /> Start{" "}
                <span className="text-brand-accent">Execution.</span>
              </h2>
              <p className="text-gray-400 max-w-md text-base">
                Ready to prove results in the field? <br />
                Contact us for a partnership built on trust and action.
              </p>
            </div>

            <div className="mt-12">
              <a
                href="mailto:master@bbpartners.co.kr"
                className="inline-flex items-center gap-3 text-xl md:text-2xl font-bold hover:text-brand-accent transition-colors group"
              >
                master@bbpartners.co.kr
                <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Info */}
          <div className="bg-white/5 p-8 md:p-12 border border-white/10">
            <div className="space-y-12">
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                  ADDRESS
                </h4>
                <div className="flex items-start gap-3">
                  <MapPin
                    className="text-brand-accent shrink-0 mt-1"
                    size={20}
                  />
                  <p className="text-lg leading-relaxed">
                    123 Creative Avenue, Gangnam-gu,
                    <br />
                    Seoul, South Korea
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                  INQUIRIES
                </h4>
                <div className="flex items-start gap-3">
                  <Mail className="text-brand-accent shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-lg font-medium">
                      master@bbpartners.co.kr
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Response within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Footer Logo */}
          <div className="opacity-60 hover:opacity-100 transition-opacity">
            <Image
              src="/images/bblogo_white.png"
              alt="BB Partners"
              width={120}
              height={32}
              className="object-contain"
            />
          </div>
          <p className="text-xs text-gray-600 uppercase tracking-widest">
            © 2025 BB PARTNERS. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
