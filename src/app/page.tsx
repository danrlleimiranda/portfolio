import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-full">
      <Header />
      <Hero />
    </main>
  );
}
