import Sidebar from "./components/sections/sidebar";
import MainPageSection from "./components/sections/mainSection";
import Footer from "./components/sections/footer";

export default function Home() {
  return (
    <main className="relative w-full h-auto bg-darkBg text-text  p-5 font-manrope max-w-screen-xl sm:p-10 2xl:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-7 lg:gap-10 lg:grid-rows-1">
        <Sidebar />
        <MainPageSection />
      </div>
      <Footer />
    </main>
  );
}
