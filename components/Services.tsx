import React from "react";
import Image from "next/image";
import { Lightbulb, Car, UserCheck, Armchair } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Lightbulb size={32} />,
      title: "EXPERIENTIAL / CONTENTS",
      items: [
        "Concept, Design and execution of immersive brand experiences",
        "Brand partnership / Celebrity & Influencer communication",
        "Social media marketing / Digital contents creation",
      ],
      img: "/images/service-experiential.jpg",
    },
    {
      icon: <Car size={32} />,
      title: "VEHICLE MANAGEMENT",
      items: [
        "Professional logistics",
        "Car detailing / Showcase setting",
        "Company vehicle management",
      ],
      img: "/images/service-vehicle.jpg",
    },
    {
      icon: <UserCheck size={32} />,
      title: "PROFESSIONAL STAFFING",
      items: [
        "Brand Experience & Operation staff",
        "VIP Chauffeur / Premium Valet",
        "Executive Protection / Driving Instructor",
      ],
      img: "/images/service-staffing.jpg",
    },
    {
      icon: <Armchair size={32} />,
      title: "RENTAL SERVICE",
      items: ["Digital devices", "Luxury furniture rental for events"],
      img: "/images/service-rental.jpg",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-brand-dark relative overflow-hidden"
    >
      {/* Background Image - CLS prevention with fill */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/business-bg.jpg"
          alt="Business Background"
          fill
          sizes="100vw"
          className="object-cover opacity-20 object-[center_bottom]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-brand-dark/80"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tighter">
            EXPERIENTIAL / <br />
            <span className="text-brand-accent">CONTENTS CREATIVES</span>
          </h2>
          <p className="text-gray-400 max-w-sm mt-6 md:mt-0 pb-2 text-right">
            We provide comprehensive solutions from planning to field execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="group relative min-h-[450px] overflow-hidden border border-white/5 cursor-pointer"
            >
              {/* Background Image - Always visible, enhanced on hover */}
              <div className="absolute inset-0">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-all duration-700 ease-out
                    grayscale brightness-[0.3] 
                    group-hover:grayscale-0 group-hover:brightness-[0.6] group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                {/* Amber accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/0 to-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-10 flex flex-col h-full justify-between">
                {/* Top: Icon and Number */}
                <div className="flex justify-between items-start">
                  <div
                    className="text-brand-accent bg-brand-accent/10 backdrop-blur-sm p-3 rounded-full border border-brand-accent/20 
                    group-hover:bg-brand-accent group-hover:text-black transition-all duration-500"
                  >
                    {s.icon}
                  </div>
                  <span
                    className="text-white/10 font-display text-5xl font-bold 
                    group-hover:text-brand-accent/30 transition-colors duration-500"
                  >
                    0{idx + 1}
                  </span>
                </div>

                {/* Bottom: Title and Items */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3
                    className="text-xl md:text-2xl font-display font-bold text-white mb-4 
                    group-hover:text-brand-accent transition-colors duration-300"
                  >
                    {s.title}
                  </h3>
                  <ul className="space-y-2 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                    {s.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-300 text-sm flex items-start gap-2"
                      >
                        <span
                          className="w-1.5 h-1.5 bg-brand-accent mt-1.5 rounded-full shrink-0 
                          group-hover:scale-125 transition-transform duration-300"
                        ></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Hover indicator */}
                  <div
                    className="mt-6 flex items-center gap-2 text-brand-accent text-xs font-bold tracking-widest uppercase
                    opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100"
                  >
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Animated border on hover */}
              <div className="absolute inset-0 border-2 border-brand-accent/0 group-hover:border-brand-accent/50 transition-colors duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
