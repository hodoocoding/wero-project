import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import { MobileRedirect } from "../../components/MobileRedirect";

export const metadata: Metadata = {
  title: "문의하기",
  description:
    "더블비 파트너스에 문의하세요. 럭셔리 브랜드 경험 파트너십을 시작할 준비가 되어 있습니다. 이벤트 기획, BTL 실행, VIP 의전 서비스 문의.",
  keywords: [
    "이벤트 문의",
    "BTL 견적",
    "행사 대행 문의",
    "VIP 의전 문의",
    "럭셔리 이벤트 상담",
  ],
  alternates: {
    canonical: "https://bbpartners.co.kr/contact",
  },
  openGraph: {
    title: "문의하기 | BB Partners",
    description:
      "럭셔리 브랜드 경험 파트너십을 시작하세요. 이벤트 기획 및 BTL 실행 문의.",
    url: "https://bbpartners.co.kr/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <MobileRedirect targetSection="contact">
      <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-accent selection:text-black">
        <Navbar />
        <main className="pt-20">
          <Contact />
        </main>
      </div>
    </MobileRedirect>
  );
}
