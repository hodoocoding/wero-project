"use client";
import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export function useDeviceType() {
  // SSR 호환: 초기값은 false (PC로 가정)
  const [isMobile, setIsMobile] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkDevice();
    setIsHydrated(true);

    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return {
    isMobile,
    isPC: !isMobile,
    isHydrated,
  };
}

export default useDeviceType;
