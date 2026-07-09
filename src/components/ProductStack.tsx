import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { HeroCard, HeroCardProps } from './HeroCard';
import './ProductStack.css';

export type ProductCardData = Omit<HeroCardProps, 'isDimmed' | 'revealDelay'>;

interface ProductStackProps {
  products: ProductCardData[];
}

// Must match the --stack-index top formula in ProductStack.css.
const BASE_TOP = 88;
const STEP = 14;

// Mobile-only "wallet card" stack: each card pins to the top of the viewport in turn,
// fully readable, while earlier cards recede to a thin peeking sliver behind it.
// A side tracker lets you jump straight to any card instead of scrolling through all of them.
export const ProductStack: React.FC<ProductStackProps> = ({ products }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const shuffleTimerRef = useRef<number | null>(null);
  const clickTokenRef = useRef(0);
  // While a tracker click is driving the scroll, the scroll-position heuristic
  // below is frozen out — otherwise the many intermediate 'scroll' events fired
  // during the smooth-scroll animation recompute activeIndex against not-yet-
  // settled positions. It's only unfrozen by genuine user scroll input (wheel/
  // touch), not by detecting when our own programmatic scroll "finishes" —
  // that detection (scrollend / a timeout) can fire a frame or two before the
  // geometry is truly final, and the one trailing 'scroll' event that sneaks
  // through right as the freeze lifts can permanently misjudge which card is
  // on top, which is what caused the flicker-to-the-wrong-card bug.
  const autoScrollingRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [trackerVisible, setTrackerVisible] = useState(false);
  const [shuffleIndex, setShuffleIndex] = useState<number | null>(null);

  const updateActiveIndex = () => {
    if (autoScrollingRef.current) return;
    const clusterCutoff = BASE_TOP + products.length * STEP + 40;
    let best = 0;
    let bestTop = -Infinity;
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      if (top <= clusterCutoff && top > bestTop) {
        bestTop = top;
        best = i;
      }
    });
    setActiveIndex(best);
  };

  const requestUpdate = () => {
    if (autoScrollingRef.current) return;
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      updateActiveIndex();
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    updateActiveIndex();

    // Genuine user scroll intent — resume organic tracking immediately.
    const resumeTracking = () => { autoScrollingRef.current = false; };
    window.addEventListener('wheel', resumeTracking, { passive: true });
    window.addEventListener('touchmove', resumeTracking, { passive: true });

    const container = containerRef.current;
    let observer: IntersectionObserver | null = null;
    if (container && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => setTrackerVisible(entry.isIntersecting),
        { threshold: 0.05 }
      );
      observer.observe(container);
    }

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      window.removeEventListener('wheel', resumeTracking);
      window.removeEventListener('touchmove', resumeTracking);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (shuffleTimerRef.current !== null) window.clearTimeout(shuffleTimerRef.current);
      observer?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products.length]);

  // Brings the clicked card to the top of the stack, then plays a short
  // "shuffle in from the rail" animation once the scroll settles so the
  // card visibly slides in from the tracker's side rather than just appearing.
  const scrollToCard = (index: number) => {
    const el = itemRefs.current[index];
    if (!el) return;

    // Invalidate any still-pending completion from a previous click so a slow
    // 'scrollend'/timeout from an earlier tap can't fire after this one and
    // steal focus back.
    const token = ++clickTokenRef.current;

    // Claim the top spot immediately and freeze it there — see autoScrollingRef.
    autoScrollingRef.current = true;
    setActiveIndex(index);

    const rect = el.getBoundingClientRect();
    const targetTop = window.scrollY + rect.top - (BASE_TOP + index * STEP);
    const alreadyThere = Math.abs(targetTop - window.scrollY) < 2;

    if (shuffleTimerRef.current !== null) window.clearTimeout(shuffleTimerRef.current);

    const finishAndShuffle = () => {
      if (clickTokenRef.current !== token) return;
      setShuffleIndex(index);
      shuffleTimerRef.current = window.setTimeout(() => {
        if (clickTokenRef.current === token) setShuffleIndex(null);
      }, 750); // matches the shuffle-in animation duration in ProductStack.css
    };

    if (alreadyThere) {
      finishAndShuffle();
      return;
    }

    // 'scrollend' isn't supported everywhere yet, so race it against a timeout
    // fallback and only act on whichever fires first.
    let settled = false;
    const onScrollEnd = () => {
      if (settled) return;
      settled = true;
      window.removeEventListener('scrollend', onScrollEnd);
      finishAndShuffle();
    };
    window.addEventListener('scrollend', onScrollEnd, { once: true });
    window.setTimeout(onScrollEnd, 550);

    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  };

  const tracker = (
    <div className={`product-stack-tracker ${trackerVisible ? 'visible' : ''}`} aria-label="Jump to a solution">
      {products.map((card, i) => (
        <button
          key={card.id}
          type="button"
          className={`stack-tracker-dot ${activeIndex === i ? 'active' : ''}`}
          style={{ '--accent-rgb': card.accentRgb } as React.CSSProperties}
          onClick={() => scrollToCard(i)}
          aria-label={`Jump to ${card.title}`}
          aria-current={activeIndex === i}
        >
          <span className="stack-tracker-icon">{card.icon}</span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="product-stack" ref={containerRef}>
      {products.map((card, i) => (
        <div
          key={card.id}
          ref={(el) => { itemRefs.current[i] = el; }}
          className={`product-stack-item ${activeIndex === i ? 'active' : ''} ${shuffleIndex === i ? 'shuffle-in' : ''}`}
          style={{ '--stack-index': i } as React.CSSProperties}
        >
          <HeroCard {...card} isDimmed={false} revealDelay={`${i * 50}ms`} />
        </div>
      ))}

      {/* Portaled straight to <body> so position:fixed is relative to the real
          viewport — the hero section's reveal-on-scroll transform would otherwise
          make this an ancestor-relative containing block and the tracker would
          drift away with the page instead of staying pinned. */}
      {createPortal(tracker, document.body)}
    </div>
  );
};

export default ProductStack;
