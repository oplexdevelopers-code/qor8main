import React, { useRef, useLayoutEffect, useEffect, useState } from 'react';
import { HeroCard, HeroCardProps } from './HeroCard';
import './ProductCoverflow.css';

export type ProductCardData = Omit<HeroCardProps, 'isDimmed' | 'revealDelay'>;

interface ProductCoverflowProps {
  products: ProductCardData[];
  activeTabId: string;
}

const CARD_WIDTH = 320;
const CARD_GAP = 24;
const STEP = CARD_WIDTH + CARD_GAP;

// Decorative depth-perspective rays converging toward the carousel's center,
// visible at the open edges and glowing softly through the frosted glass cards.
const RAY_COLORS = ['0, 85, 255', '124, 58, 237', '13, 148, 136', '234, 88, 12', '22, 163, 74', '0, 85, 255'];
const RAY_Y_POSITIONS = [-20, -2, 16, 34, 50, 66, 84, 102, 120];

interface DragState {
  dragging: boolean;
  startX: number;
  startScrollLeft: number;
  moved: boolean;
}

export const ProductCoverflow: React.FC<ProductCoverflowProps> = ({ products, activeTabId }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const dragState = useRef<DragState>({ dragging: false, startX: 0, startScrollLeft: 0, moved: false });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateCoverflow = () => {
    const container = trackRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const viewportCenter = containerRect.left + containerRect.width / 2;

    cardRefs.current.forEach((el) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.width === 0) return;
      const cardCenter = rect.left + rect.width / 2;
      const rawDelta = (cardCenter - viewportCenter) / rect.width;
      const delta = Math.max(-3, Math.min(3, rawDelta));
      const absDelta = Math.abs(delta);

      const rotateY = delta * -20;
      const translateZ = -absDelta * 90;
      const translateX = -delta * 10;
      const scale = 1 - Math.min(absDelta * 0.08, 0.28);
      const opacity = 1 - Math.min(absDelta * 0.24, 0.72);

      el.style.transform = `perspective(1400px) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
      el.style.opacity = `${opacity}`;
      el.style.zIndex = `${Math.round(200 - absDelta * 20)}`;
    });

    setCanScrollLeft(container.scrollLeft > 4);
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 4);
  };

  const requestUpdate = () => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      updateCoverflow();
    });
  };

  useLayoutEffect(() => {
    const container = trackRef.current;
    if (container) {
      // padding-left reserves extra room so the first/last card can reach true
      // center (see ProductCoverflow.css); skip straight past that buffer here
      // so the carousel still looks full at rest instead of showing a gap.
      const restGap = 28;
      const padLeft = parseFloat(getComputedStyle(container).paddingLeft) || 0;
      container.scrollLeft = Math.max(0, padLeft - restGap);
    }
    updateCoverflow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTabId, products.length]);

  useEffect(() => {
    const container = trackRef.current;
    if (!container) return;
    container.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    updateCoverflow();
    return () => {
      container.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollByCards = (dir: -1 | 1) => {
    trackRef.current?.scrollBy({ left: dir * STEP, behavior: 'smooth' });
  };

  // Mouse drag-to-scroll (touch and trackpad already scroll the track natively)
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return;
    const container = trackRef.current;
    if (!container) return;
    dragState.current = { dragging: true, startX: e.clientX, startScrollLeft: container.scrollLeft, moved: false };
    container.setPointerCapture(e.pointerId);
    container.classList.add('dragging');
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const state = dragState.current;
    const container = trackRef.current;
    if (!state.dragging || !container) return;
    const dx = e.clientX - state.startX;
    if (Math.abs(dx) > 3) state.moved = true;
    container.scrollLeft = state.startScrollLeft - dx;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const state = dragState.current;
    const container = trackRef.current;
    if (!container || !state.dragging) return;
    container.releasePointerCapture(e.pointerId);
    state.dragging = false;
    container.classList.remove('dragging');
  };

  const onCardClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragState.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className="product-coverflow">
      <button
        type="button"
        className={`coverflow-nav-btn coverflow-nav-left ${!canScrollLeft ? 'is-hidden' : ''}`}
        onClick={() => scrollByCards(-1)}
        aria-label="Show previous solutions"
        tabIndex={canScrollLeft ? 0 : -1}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div
        ref={trackRef}
        className="product-coverflow-track"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onCardClickCapture}
      >
        <svg className="coverflow-rays" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {RAY_Y_POSITIONS.map((y, i) => (
            <line
              key={`l-${i}`}
              x1="0" y1={y} x2="50" y2="50"
              stroke={`rgba(${RAY_COLORS[i % RAY_COLORS.length]}, 0.18)`}
              strokeWidth="0.12"
            />
          ))}
          {RAY_Y_POSITIONS.map((y, i) => (
            <line
              key={`r-${i}`}
              x1="100" y1={y} x2="50" y2="50"
              stroke={`rgba(${RAY_COLORS[(i + 2) % RAY_COLORS.length]}, 0.18)`}
              strokeWidth="0.12"
            />
          ))}
        </svg>

        {products.map((card, i) => (
          <HeroCard
            key={card.id}
            ref={(el) => { cardRefs.current[i] = el; }}
            {...card}
            isDimmed={false}
            revealDelay={`${i * 50}ms`}
          />
        ))}
      </div>

      <button
        type="button"
        className={`coverflow-nav-btn coverflow-nav-right ${!canScrollRight ? 'is-hidden' : ''}`}
        onClick={() => scrollByCards(1)}
        aria-label="Show next solutions"
        tabIndex={canScrollRight ? 0 : -1}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
};

export default ProductCoverflow;
