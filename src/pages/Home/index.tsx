import { AboutMarket } from "./components/AboutMarket";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Integrations } from "./components/Integrations";
import { OurOptions } from "./components/OurOptions";
import { Testimonials } from "./components/Testimonials";


export function Home() {
  return (
    <div className="min-h-screen flex flex-col py-10">

      <main className="flex-grow">
        <Hero />
        <Features />
        <Integrations />
        <OurOptions />
        <AboutMarket />
        <Testimonials />

      </main>

    </div>
  );
}
