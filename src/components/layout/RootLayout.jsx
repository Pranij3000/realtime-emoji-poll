import Header from "./../sections/Header";
export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
