import { useState } from "react";

export default function VoteCount() {
  const [total, setTotal] = useState(24);
  return (
    <section className="vote-count bg-background dark:bg-dark-background">
      <div className="container mx-auto px-3 pt-10 pb-5 text-center">
        <h2 className="text-title dark:text-dark-title text-2xl lg:text-3xl font-bold mb-4">Total Vote Count: </h2>
        <strong className="text-8xl text-text dark:text-dark-text">{total}</strong>
      </div>
    </section>
  );
}
