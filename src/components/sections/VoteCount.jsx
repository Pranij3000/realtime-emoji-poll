import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function VoteCount() {
  const [total, setTotal] = useState(24);
  const [animated, setAnimated] = useState(0);
  const counter = useRef({ value: 0 });

  useEffect(() => {
    const counterAnimation = () => {
      gsap.to(counter.current, {
        value: total,
        duration: 1.5,
        roundProps: "value",
        onUpdate: () => {
          setAnimated(counter.current.value);
        },
      });
    };
    counterAnimation();
  }, [total]);
  return (
    <section className="vote-count bg-background dark:bg-dark-background">
      <div className="container mx-auto px-3 pt-10 pb-5 text-center">
        <h2 className="text-title dark:text-dark-title text-2xl lg:text-3xl font-bold mb-4">Total Vote Count: </h2>
        <strong className="text-8xl text-text dark:text-dark-text">{animated}</strong>
      </div>
    </section>
  );
}
