export default function Header() {
  return (
    <header className="bg-background">
      <div className="container mx-auto px-3 py-5 flex justify-between gap-3">
        <h1 className="text-text text-2xl md:text-3xl flex-1">Realtime Emoji Poll</h1>
        <div className="buttons-wrapper flex-1"></div>
      </div>
    </header>
  );
}
