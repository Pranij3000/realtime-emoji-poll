import { useState } from "react";

export default function EmojiCard({ icon, votes, setSelected }) {
	return (
		<>
			<button onClick={() => setSelected(icon)} className={` "bg-blue-400" "bg-white dark:bg-gray-700" mx-auto flex gap-2 items-center justify-center cursor-pointer border-1 border-gray-400 rounded-2xl w-fit py-4 pl-2 pr-4`}>
				<span className="icon text-6xl">{icon}</span>
				<strong className="text-4xl text-title dark:text-dark-title">{votes}</strong>
			</button>
		</>
	);
}
