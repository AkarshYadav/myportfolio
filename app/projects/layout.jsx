import Footer from "@/components/Footer";

export const metadata = {
  title: "Akarsh's | Projects"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
