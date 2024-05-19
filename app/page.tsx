import { Approach } from "@/components/approach";
import { Clients } from "@/components/client";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Grid } from "@/components/grid";
import { Hero } from "@/components/hero";
import { RecentProjects } from "@/components/recent-projects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <>
      <main className="relative flex flex-col justify-center items-center bg-black-100 mx-auto px-5 sm:px-10 overflow-hidden">
        <div className="w-full max-w-7xl">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          <Clients />
          <Experience />
          <Approach />
          <Footer />
        </div>
      </main>
    </>
  );
}
