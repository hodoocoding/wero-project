import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import { MobileRedirect } from "../../components/MobileRedirect";

export const metadata: Metadata = {
  title: "회사소개",
  description:
    "더블비 파트너스는 Blood Brother의 마인드로 15년 이상 프리미엄 브랜드 BTL 경험을 쌓아온 실행 전문 파트너입니다. BMW, Audi 등 럭셔리 자동차 브랜드와 함께합니다.",
  keywords: [
    "BTL 대행사",
    "이벤트 기획사",
    "럭셔리 브랜드 마케팅",
    "프리미엄 브랜드 파트너",
    "더블비 파트너스",
    "bbpartners",
  ],
  alternates: {
    canonical: "https://bbpartners.co.kr/about",
  },
  openGraph: {
    title: "회사소개 | BB Partners",
    description:
      "Blood Brother의 마인드로 럭셔리 브랜드 경험을 완성하는 실행 중심의 파트너입니다.",
    url: "https://bbpartners.co.kr/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <MobileRedirect targetSection="about">
      <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-accent selection:text-black">
        <Navbar />
        <main>
          <About />
        </main>
      </div>
    </MobileRedirect>
  );
}
