import Sidebar from "./components/sections/sidebar";
import MainPageSection from "./components/sections/mainSection";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-darkBg text-text grid grid-cols-1 p-5 font-manrope max-w-screen-xl sm:p-10 lg:p-16 lg:grid-cols-7 lg:gap-10 lg:grid-rows-1  2xl:py-10">
      <Sidebar />
      <MainPageSection />
    </main>
  );
}
