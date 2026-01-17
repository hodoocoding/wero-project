"use client";
import React, { useState } from "react";

interface TextBlockProps {
  kor: string;
  eng: string;
}

const TextReveal: React.FC<TextBlockProps> = ({ kor, eng }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full transition-all duration-500">
        {/* Korean Text (Default) */}
        <div
          className={`relative transition-all duration-500 ease-in-out ${
            isHovered
              ? "opacity-0 translate-y-[-10px]"
              : "opacity-100 translate-y-0"
          }`}
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed break-keep">
            {kor.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>

        {/* English Text (Hover) */}
        <div
          className={`absolute top-0 left-0 right-0 transition-opacity duration-500 ease-in-out ${
            isHovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[10px]"
          }`}
        >
          <p className="text-lg md:text-xl text-brand-accent font-heading leading-relaxed">
            {eng.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-brand-black relative">
      <div className="container mx-auto px-6">
        {/* WHO WE ARE */}
        <div className="max-w-4xl mb-32">
          <h3 className="text-brand-accent font-bold tracking-widest uppercase mb-6 text-xs md:text-sm">
            WHO WE ARE
          </h3>
          <TextReveal
            kor={`더블비 파트너스는 Blood Brother의 마인드 위에 세워진 Best Brand Partner 입니다.\n우리는 15년이 넘는 럭셔리 & 프리미엄 브랜드 경험을 바탕으로,\n브랜드의 목표를 현실로 만드는 현장 중심 실행 파트너십을 지향합니다.`}
            eng={`BB Partners is a Best Brand Partner built upon the mindset of Blood Brother.\nWith over 15 years of experience across luxury and premium brands,\nwe strive to be a field-driven execution partnership that turns brand goals into reality.`}
          />
        </div>

        {/* VISION & MISSION Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 border-t border-white/10 pt-16">
          {/* VISION */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-brand-accent font-bold tracking-widest uppercase mb-6 text-xs md:text-sm">
              VISION
            </h3>
            <div className="mb-8">
              <h4 className="text-3xl md:text-4xl font-heading font-semibold text-white uppercase tracking-wide leading-tight">
                Be the first. <br />
                Be the lead.
              </h4>
            </div>
            <TextReveal
              kor={`더블비 파트너스의 비전은 기존의 방식을 따라가는 것이 아니라,\n누구보다 먼저 기준을 정의하고 그 기준을 실행으로 증명하는 조직이 되는 것입니다.\n우리는 럭셔리 경험의 실행 기준이 되어, 업계의 방향을 선도합니다.`}
              eng={`The vision of BB Partners is not to follow existing standards,\nbut to define new standards first — and prove them through execution.\nWe aim to become the execution benchmark in luxury brand experiences and a partner that leads the direction of the industry.`}
            />
          </div>

          {/* MISSION */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-brand-accent font-bold tracking-widest uppercase mb-6 text-xs md:text-sm">
              MISSION
            </h3>
            <div className="mb-8">
              <h4 className="text-3xl md:text-4xl font-heading font-semibold text-white uppercase tracking-wide leading-tight">
                Execution <br />
                Without Excuses.
              </h4>
            </div>
            <TextReveal
              kor={`더블비 파트너스의 미션은 어떤 상황에서도 변명하지 않고, 실행으로 답하는 것입니다.\n복잡한 요구와 높은 긴장도의 현장에서도 우리는 설명보다 행동을 선택합니다.\n모든 서비스 영역에서 결과로 신뢰를 증명하는 실행 파트너입니다.`}
              eng={`The mission of BB Partners is to respond through execution — without excuses, in any situation.\nEven in complex demands and high-pressure environments, we choose action over explanation.\nAcross every service domain, BB Partners stands as an execution partner that proves trust through results.`}
            />
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="mt-32">
          <h3 className="text-brand-accent font-bold tracking-widest uppercase mb-12 text-xs md:text-sm text-left">
            CORE VALUES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-dark p-8 border border-white/5 hover:border-brand-accent/50 transition-colors group">
              <h4 className="text-2xl md:text-3xl font-heading font-semibold text-white uppercase tracking-wide mb-4 group-hover:text-brand-accent transition-colors">
                Bold
              </h4>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 break-keep">
                결단력 있게 판단하고, 책임 있게 실행합니다.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors font-heading">
                Fully understanding the situation and making accountable
                decisions without hesitation.
              </p>
            </div>

            <div className="bg-brand-dark p-8 border border-white/5 hover:border-brand-accent/50 transition-colors group">
              <h4 className="text-2xl md:text-3xl font-heading font-semibold text-white uppercase tracking-wide mb-4 group-hover:text-brand-accent transition-colors">
                Built on Execution
              </h4>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 break-keep">
                말이 아닌 실행으로 증명합니다.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors font-heading">
                Results created in the field are the only true form of trust.
              </p>
            </div>

            <div className="bg-brand-dark p-8 border border-white/5 hover:border-brand-accent/50 transition-colors group">
              <h4 className="text-2xl md:text-3xl font-heading font-semibold text-white uppercase tracking-wide mb-4 group-hover:text-brand-accent transition-colors">
                Partnership
              </h4>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 break-keep">
                같은 편에서 끝까지 함께합니다.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors font-heading">
                We share responsibility until the outcome is complete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
