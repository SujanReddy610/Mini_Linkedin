import { useEffect, useRef } from 'react';

export const useMouseTilt = (elementRef, sensitivity = 10) => {
  const tiltRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!elementRef.current) return;

      const { clientX, clientY } = event;
      const { left, top, width, height } = elementRef.current.getBoundingClientRect();

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const deltaX = (clientX - centerX) / (width / 2);
      const deltaY = (clientY - centerY) / (height / 2);

      tiltRef.current.x = deltaX * -sensitivity;
      tiltRef.current.y = deltaY * -sensitivity;

      elementRef.current.style.transform = `translate(${tiltRef.current.x}px, ${tiltRef.current.y}px)`;
    };

    const handleMouseLeave = () => {
      if (elementRef.current) {
        elementRef.current.style.transform = `translate(0px, 0px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [elementRef, sensitivity]);
};