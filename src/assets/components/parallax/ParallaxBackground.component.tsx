import { useEffect, useRef, useState } from "react";
import './ParallaxBackground.component.css';

interface Props {
  speed?: number; // 1.0 = same as scroll, >1 = faster, <1 = slower
  /** URL for the dark-mode background image (optional) */
  darkImage?: string;
  /** URL for the light-mode background image (optional) */
  lightImage?: string;
  className?: string;
}

export default function ParallaxBackground({ speed = 1.3, darkImage, lightImage, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const latestY = useRef(0);
  const rafId = useRef<number | null>(null);

  // Keep track of which background to use. Start with a best-effort initial value (client-only).
  const [bgSrc, setBgSrc] = useState<string | undefined>(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return darkImage ?? undefined;
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? (lightImage ?? darkImage) : darkImage ?? lightImage;
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mq = window.matchMedia('(prefers-color-scheme: light)');
      const handler = (e: MediaQueryListEvent | MediaQueryList) => {
        const isLight = 'matches' in e ? e.matches : mq.matches;
        setBgSrc(isLight ? (lightImage ?? darkImage) : (darkImage ?? lightImage));
      };

      // add listener
      try {
        // modern
        // @ts-ignore - types vary across environments
        mq.addEventListener?.('change', handler);
      } catch (err) {
        // fallback
        // @ts-ignore
        mq.addListener?.(handler);
      }

      // ensure correct initial value when props change
      handler(mq);

      return () => {
        try {
          // @ts-ignore
          mq.removeEventListener?.('change', handler);
        } catch (err) {
          // @ts-ignore
          mq.removeListener?.(handler);
        }
      };
    }
    return;
  }, [darkImage, lightImage]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Respect reduced motion: keep background static or fallback to simple background
      if (ref.current) ref.current.style.transform = 'translate3d(0,0,0)';
      return;
    }

    const onScroll = () => {
      latestY.current = window.scrollY;
      if (rafId.current == null) {
        rafId.current = window.requestAnimationFrame(() => {
          if (!ref.current) return;
          // negative so background moves up when page scrolls down
          const offset = -latestY.current * speed;
          ref.current.style.transform = `translate3d(0, ${offset}px, 0)`;
          rafId.current = null;
        });
      }
    };

    // Set initial position
    if (ref.current) ref.current.style.transform = 'translate3d(0, 0, 0)';

    window.addEventListener('scroll', onScroll, { passive: true });
    // also update on resize in case viewport size changes
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId.current != null) window.cancelAnimationFrame(rafId.current);
    };
  }, [speed]);

  const style = bgSrc ? { backgroundImage: `url(${bgSrc})` } : undefined;

  return (
    <div
      ref={ref}
      className={['parallax-bg', className].filter(Boolean).join(' ')}
      style={style}
      aria-hidden
    />
  );
}
