import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Works from "../../components/Works";
import { MobileRedirect } from "../../components/MobileRedirect";

export const metadata: Metadata = {
  title: "포트폴리오",
  description:
    "BMW, Audi 등 프리미엄 자동차 브랜드와 함께한 럭셔리 이벤트 포트폴리오. FRIEZE Seoul, BMW Ladies Championship, 신차 발표회 등 주요 프로젝트 수행.",
  keywords: [
    "BMW 이벤트",
    "Audi 행사",
    "자동차 전시회",
    "FRIEZE Seoul",
    "BMW Ladies Championship",
    "신차 발표회",
    "COEX 전시",
    "KINTEX 행사",
    "DDP 이벤트",
    "럭셔리 브랜드 포트폴리오",
  ],
  alternates: {
    canonical: "https://bbpartners.co.kr/portfolio",
  },
  openGraph: {
    title: "포트폴리오 | BB Partners",
    description:
      "프리미엄 자동차 브랜드와 함께한 럭셔리 이벤트 및 브랜드 경험 포트폴리오.",
    url: "https://bbpartners.co.kr/portfolio",
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <MobileRedirect targetSection="portfolio">
      <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-accent selection:text-black">
        <Navbar />
        <main className="pt-20">
          <Works />
        </main>
      </div>
    </MobileRedirect>
  );
}
