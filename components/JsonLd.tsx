/**
 * JSON-LD Structured Data Component
 *
 * Provides search engines with explicit information about BB Partners
 * as a professional BTL/Event execution company.
 */

interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs?: string[];
  contactPoint?: {
    "@type": "ContactPoint";
    telephone: string;
    contactType: string;
    availableLanguage: string[];
  };
}

interface LocalBusinessSchema {
  "@context": "https://schema.org";
  "@type": "ProfessionalService";
  name: string;
  description: string;
  url: string;
  image: string;
  address: {
    "@type": "PostalAddress";
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  priceRange?: string;
  areaServed?: string;
  hasOfferCatalog?: {
    "@type": "OfferCatalog";
    name: string;
    itemListElement: Array<{
      "@type": "Offer";
      itemOffered: {
        "@type": "Service";
        name: string;
        description: string;
      };
    }>;
  };
}

// Organization Schema - 회사 정보
export function OrganizationJsonLd() {
  const schema: OrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BB Partners (더블비 파트너스)",
    url: "https://bbpartners.co.kr",
    logo: "https://bbpartners.co.kr/images/bblogo_white.png",
    description:
      "Blood Brother의 마인드로 럭셔리 브랜드 경험을 완성하는 실행 중심의 BTL 파트너. 15년 이상의 프리미엄 브랜드 이벤트 기획 및 운영 노하우 보유.",
    sameAs: [
      // Add social media links if available
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+82-2-XXX-XXXX",
      contactType: "customer service",
      availableLanguage: ["Korean", "English"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// LocalBusiness Schema - BTL 서비스 정보
export function LocalBusinessJsonLd() {
  const schema: LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "BB Partners",
    description:
      "프리미엄 자동차 브랜드 BTL 실행 전문 파트너. BMW, Audi 등 럭셔리 브랜드 이벤트 기획 및 운영.",
    url: "https://bbpartners.co.kr",
    image: "https://bbpartners.co.kr/images/bblogo_white.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Seoul",
      addressRegion: "Seoul",
      addressCountry: "KR",
    },
    priceRange: "$$$",
    areaServed: "South Korea",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "BTL Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "이벤트 기획 및 운영",
            description:
              "신차 발표회, VIP 이벤트, 럭셔리 브랜드 파티 등 프리미엄 이벤트 기획",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "전시 기획",
            description:
              "COEX, KINTEX, DDP 등 주요 전시장에서의 브랜드 전시 부스 기획 및 설치",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "차량 관리 및 의전",
            description:
              "프리미엄 차량 관리, VIP 의전 서비스, 쇼퍼 서비스 제공",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "공간 연출 및 원예",
            description:
              "이벤트 공간 디자인, 플로럴 데코레이션, 원예 설치 서비스",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Combined component for layout.tsx
export default function JsonLd() {
  return (
    <>
      <OrganizationJsonLd />
      <LocalBusinessJsonLd />
    </>
  );
}
