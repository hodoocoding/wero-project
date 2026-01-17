import React from "react";
import Image from "next/image";
import { MapPin, Mail, ArrowUpRight } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-brand-black text-white pt-32 pb-8 border-t border-white/10"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          {/* Left: CTA - Premium "Execution" Pattern */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tighter mb-8 leading-none">
                Let's <br /> Start{" "}
                <span className="text-brand-accent">Execution.</span>
              </h2>
              <p className="text-gray-400 max-w-md text-lg leading-relaxed">
                Ready to prove results in the field? <br />
                Contact us for a partnership built on trust and action.
              </p>
            </div>

            <div className="mt-16">
              <a
                href="mailto:master@bbpartners.co.kr"
                className="inline-flex items-center gap-4 text-2xl md:text-3xl font-bold hover:text-brand-accent transition-colors duration-300 group"
              >
                master@bbpartners.co.kr
                <ArrowUpRight
                  size={32}
                  className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
            </div>
          </div>

          {/* Right: Info Card with Glassmorphism */}
          <div className="glass p-10 md:p-14 hover-glow">
            <div className="space-y-14">
              <div>
                <h4 className="text-xs font-bold text-brand-accent/80 uppercase tracking-widest mb-5">
                  ADDRESS
                </h4>
                <div className="flex items-start gap-4">
                  <MapPin
                    className="text-brand-accent shrink-0 mt-1"
                    size={22}
                  />
                  <p className="text-xl leading-relaxed">
                    123 Creative Avenue, Gangnam-gu,
                    <br />
                    Seoul, South Korea
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-brand-accent/80 uppercase tracking-widest mb-5">
                  INQUIRIES
                </h4>
                <div className="flex items-start gap-4">
                  <Mail className="text-brand-accent shrink-0 mt-1" size={22} />
                  <div>
                    <p className="text-xl font-medium">
                      master@bbpartners.co.kr
                    </p>
                    <p className="text-sm text-gray-500 mt-3">
                      Response within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Footer Logo */}
          <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/images/bblogo_white.png"
              alt="BB Partners"
              width={140}
              height={36}
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
