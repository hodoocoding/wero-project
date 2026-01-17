import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
import { MobileRedirect } from "../../components/MobileRedirect";

export const metadata: Metadata = {
  title: "서비스",
  description:
    "이벤트 기획, 차량 관리, 프로페셔널 스태핑, 렌탈 서비스까지 - 럭셔리 브랜드 경험의 모든 것을 제공합니다. VIP 의전, 전시 기획, 공간 연출 전문.",
  keywords: [
    "이벤트 기획",
    "VIP 의전 서비스",
    "차량 관리",
    "전시 기획",
    "BTL 서비스",
    "스태핑 서비스",
    "공간 연출",
    "원예 설치",
    "쇼퍼 서비스",
  ],
  alternates: {
    canonical: "https://bbpartners.co.kr/services",
  },
  openGraph: {
    title: "서비스 | BB Partners",
    description:
      "럭셔리 브랜드를 위한 프리미엄 BTL 서비스. 이벤트 기획부터 VIP 의전까지.",
    url: "https://bbpartners.co.kr/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <MobileRedirect targetSection="services">
      <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-accent selection:text-black">
        <Navbar />
        <main className="pt-20">
          <Services />
        </main>
      </div>
    </MobileRedirect>
  );
}
