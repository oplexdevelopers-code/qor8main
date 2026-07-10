import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTypewriter } from '../hooks/useTypewriter';
import './ShowcaseVideoSection.css';

interface TextSegment {
  text: string;
  target: 'heading' | 'subtext';
  emphasis?: boolean;
}

// One continuous typewriter pass across both the heading and the subtext
// below it — each segment is tagged with where it renders and whether it
// should be emphasized, so the accent words light up as they're typed.
const SEGMENTS: TextSegment[] = [
  { text: 'Complete Solutions. ', target: 'heading' },
  { text: 'No Compromise.', target: 'heading', emphasis: true },
  { text: "We're dedicated to providing solutions that actually work.\nEvolve with the times of ", target: 'subtext' },
  { text: 'automation', target: 'subtext', emphasis: true },
  { text: '.\nHand you back more ', target: 'subtext' },
  { text: 'time', target: 'subtext', emphasis: true },
  { text: ' → more ', target: 'subtext' },
  { text: 'freedom', target: 'subtext', emphasis: true },
  { text: ' → more ', target: 'subtext' },
  { text: 'transparency', target: 'subtext', emphasis: true },
];

const FULL_TEXT = SEGMENTS.map((seg) => seg.text).join('');

export const ShowcaseVideoSection: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.4,
    freezeOnceVisible: false,
  });
  const typed = useTypewriter(FULL_TEXT, {
    start: isIntersecting,
    speed: 30,
    startDelay: 300,
  });
  const isTyping = isIntersecting && typed.length < FULL_TEXT.length;

  let consumed = 0;
  const rendered = SEGMENTS.map((seg, i) => {
    const start = consumed;
    consumed += seg.text.length;
    const end = consumed;
    if (typed.length <= start) return null;
    const visible = typed.slice(start, Math.min(typed.length, end));
    const active = isTyping && typed.length < end;
    return { key: i, target: seg.target, emphasis: seg.emphasis, visible, active };
  }).filter((seg): seg is NonNullable<typeof seg> => seg !== null);

  const headingParts = rendered.filter((seg) => seg.target === 'heading');
  const subtextParts = rendered.filter((seg) => seg.target === 'subtext');

  return (
    <section
      className="showcase-video-section"
      ref={elementRef as React.RefObject<HTMLElement>}
      aria-label="Product Showcase"
    >
      <div className="showcase-video-text">
        <h2 className="showcase-video-heading">
          {headingParts.map((part) => (
            <span
              key={part.key}
              className={`${part.emphasis ? 'showcase-video-heading-accent' : ''} ${part.active ? 'typing' : ''}`}
            >
              {part.visible}
            </span>
          ))}
        </h2>
        <p className="showcase-video-subtext">
          {subtextParts.map((part) => (
            <span
              key={part.key}
              className={`${part.emphasis ? 'showcase-video-subtext-accent' : ''} ${part.active ? 'typing' : ''}`}
            >
              {part.visible}
            </span>
          ))}
        </p>
      </div>
      <div className="showcase-video-frame">
        <div className="showcase-video-inner">
          <video
            className="showcase-video"
            src="/videos/001.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ShowcaseVideoSection;
