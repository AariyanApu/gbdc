import { useState, useEffect, useRef } from 'react';

function CounterUp({ target, time = 500, start = 0 }) {
  const [current, setCurrent] = useState(start);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    const handleScroll = () => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;
      if (elementTop < viewportHeight && elementBottom >= 0) {
        const increment = (target - start) / time;
        let frame = start;
        const handle = setInterval(() => {
          if (frame < target) {
            setCurrent(frame);
            frame += increment;
          } else {
            clearInterval(handle);
            setCurrent(target);
          }
        }, 1);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [target, time, start]);

  return <span ref={elementRef}>{Math.round(current)}</span>;
}

export default CounterUp;
