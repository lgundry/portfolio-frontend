// src/hooks/useResponsive.ts
import { useEffect, useState } from "react";
import { ResponsiveConstants, ScreenSize } from "constants/responsive";

export function useResponsive() {
  const [screenSize, setScreenSize] = useState<ScreenSize>("large");

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width <= 640) setScreenSize("small");
      else if (width <= 1024) setScreenSize("medium");
      else setScreenSize("large");
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return ResponsiveConstants[screenSize];
}
