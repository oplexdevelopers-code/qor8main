import { useEffect, useState } from 'react';

interface UseTypewriterOptions {
  /** Milliseconds between each character. */
  speed?: number;
  /** Delay before typing starts. */
  startDelay?: number;
  /** Gate on this — flip to true to (re)start typing, false to reset to empty. */
  start?: boolean;
}

/**
 * Types `text` out one character at a time. Resets to empty whenever
 * `start` goes false, so it can be replayed by re-triggering `start`
 * (e.g. from an IntersectionObserver each time a section re-enters view).
 */
export function useTypewriter(text: string, options: UseTypewriterOptions = {}) {
  const { speed = 55, startDelay = 0, start = true } = options;
  const [output, setOutput] = useState('');

  useEffect(() => {
    if (!start) {
      setOutput('');
      return;
    }

    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOutput(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
    };
  }, [text, speed, startDelay, start]);

  return output;
}
