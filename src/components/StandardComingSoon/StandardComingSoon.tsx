import ComingSoonContent from "../ComingSoonContent/ComingSoonContent";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function StandardComingSoon() {
  return (
    <>
      <main className="flex flex-col items-center justify-between min-h-screen p-5 lg:p-12">
        <Header />
        <ComingSoonContent />
        <Footer />
      </main>
    </>
  );
}
