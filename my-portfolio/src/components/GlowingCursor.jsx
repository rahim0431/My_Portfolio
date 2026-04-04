import React, { useEffect, useRef } from 'react';

const GlowingCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (prefersReducedMotion || !canHover) {
      return;
    }

    document.documentElement.classList.add('custom-cursor');

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let rafId;

    const animate = () => {
      x += (targetX - x) * 0.18;
      y += (targetY - y) * 0.18;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;

      const hue = Math.round((targetX / window.innerWidth) * 360);
      cursor.style.setProperty('--cursor-hue', hue);

      rafId = window.requestAnimationFrame(animate);
    };

    const handleMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.style.opacity = '1';
    };

    const handleDown = () => cursor.classList.add('is-pressed');
    const handleUp = () => cursor.classList.remove('is-pressed');
    const handleLeave = () => {
      cursor.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('mouseleave', handleLeave);

    animate();

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('mouseleave', handleLeave);
      document.documentElement.classList.remove('custom-cursor');
    };
  }, []);

  return (
    <div ref={cursorRef} className="glow-cursor" aria-hidden="true">
      <span className="glow-cursor__ring" />
      <span className="glow-cursor__dot" />
    </div>
  );
};

export default GlowingCursor;
