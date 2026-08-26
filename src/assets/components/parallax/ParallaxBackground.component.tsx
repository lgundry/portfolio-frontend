import { useEffect, useRef } from "react";
import './ParallaxBackground.component.css';
import bg from '../../images/pexels-enginakyurt-5200063.jpg';

interface Props {
  speed?: number; // 1.0 = same as scroll, >1 = faster, <1 = slower
}

export default function ParallaxBackground({ speed = 1.3 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const latestY = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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

  return (
    <div
      ref={ref}
      className="parallax-bg"
      style={{ backgroundImage: `url(${bg})` }}
      aria-hidden
    />
  );
}
