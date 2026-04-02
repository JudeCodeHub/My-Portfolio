import {Navbar} from "@/components/Navbar"
import { ThemeToggle } from "../components/ThemeToggle"
import { BackgroundEffects } from "@/components/BackgroundEffects"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/*Theme toggle*/}
        <ThemeToggle />

        {/*Background effects*/}
        <BackgroundEffects />


        {/*Navbar*/}

        <Navbar/>


        {/*Main content*/}
        <main>
          <HeroSection />
          <AboutSection />
          
        </main>


        {/*Footer */}

    </div>
  )
}