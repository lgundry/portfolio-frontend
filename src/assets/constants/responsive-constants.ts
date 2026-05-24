// src/constants/responsive.ts
export const ResponsiveConstants = {
  small: {
    smallText: "12px",
    mediumText: "14px",
    largeText: "16px",
    spacing: 8,
  },
  medium: {
    smallText: "14px",
    mediumText: "16px",
    largeText: "18px",
    spacing: 12,
  },
  large: {
    smallText: "16px",
    mediumText: "18px",
    largeText: "20px",
    spacing: 16,
  },
} as const;

export type ScreenSize = keyof typeof ResponsiveConstants;
