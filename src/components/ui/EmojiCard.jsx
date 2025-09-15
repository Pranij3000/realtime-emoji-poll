export default function EmojiCard({ icon, votes }) {
  return (
    <>
      <button className="mx-auto flex gap-2 items-center justify-center cursor-pointer border-1 border-gray-400 rounded-2xl w-fit py-4 pl-2 pr-4 bg-white dark:bg-gray-700">
        <span className="icon text-6xl">{icon}</span>
        <strong className="text-4xl">{votes}</strong>
      </button>
    </>
  );
}
