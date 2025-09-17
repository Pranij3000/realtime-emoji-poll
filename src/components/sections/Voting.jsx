import { useState } from "react";
import EmojiCard from "../ui/EmojiCard";

export default function Voting() {
	const [selected, setSelected] = useState(false);
	const emoji = [
		{ icon: "🎉", votes: 4 },
		{ icon: "😂", votes: 4 },
		{ icon: "😍", votes: 4 },
		{ icon: "🚀", votes: 4 },
		{ icon: "🌈", votes: 4 },
		{ icon: "🔥", votes: 4 },
	];
	return (
		<section className="voting bg-background dark:bg-dark-background">
			<div className="container mx-auto px-3 py-5">
				<div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-[500px] mx-auto">
					{emoji.map((item, index) => (
						<EmojiCard key={index} icon={item.icon} votes={item.votes} setSelected={setSelected} selected={selected} />
					))}
				</div>
			</div>
		</section>
	);
}
