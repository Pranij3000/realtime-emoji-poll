import { useState } from "react";

export default function EmojiCard({ icon, votes, setSelected, isSelected }) {
  return (
    <>
      <button onClick={() => setSelected(icon)} className={`${isSelected ? "scale-120 shadow-xl bg-blue-100 dark:bg-gray-700" : ""} transition-all mx-auto flex gap-2 items-center justify-center cursor-pointer border-1 border-gray-400 rounded-2xl w-fit py-4 pl-2 pr-4`}>
        <span className="icon text-6xl">{icon}</span>
        <strong className="text-4xl text-title dark:text-dark-title">{votes}</strong>
      </button>
    </>
  );
}
