"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDeviceType } from "../hooks/useDeviceType";

interface MobileRedirectProps {
  targetSection: string;
  children: React.ReactNode;
}

/**
 * Wrapper component that redirects mobile users to main page anchor
 * PC users see the dedicated page content
 */
export function MobileRedirect({
  targetSection,
  children,
}: MobileRedirectProps) {
  const router = useRouter();
  const { isMobile, isHydrated } = useDeviceType();

  useEffect(() => {
    if (isHydrated && isMobile) {
      router.replace(`/#${targetSection}`);
    }
  }, [isMobile, isHydrated, router, targetSection]);

  // Show nothing while redirecting on mobile
  if (isHydrated && isMobile) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center">
        <div className="text-white text-sm opacity-50">Redirecting...</div>
      </div>
    );
  }

  // PC: Show the actual page content
  return <>{children}</>;
}

export default MobileRedirect;
