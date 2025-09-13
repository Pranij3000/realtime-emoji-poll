import Header from "./../sections/Header";
export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
