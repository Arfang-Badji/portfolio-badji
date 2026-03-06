import { useEffect, useState } from "react";

interface CounterProps { end: number; duration?: number }

const Counter = ({ end, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default Counter;