import {Navbar} from "@/components/Navbar"
import { ThemeToggle } from "../components/ThemeToggle"
import { BackgroundEffects } from "@/components/BackgroundEffects"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectSection"
import { Awards_Acheivements } from "../components/Awards_Acheivements"
import { ContactSection } from "../components/ContactSection"

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
          <SkillsSection/>
          <ProjectsSection/>
          <Awards_Acheivements/>
          <ContactSection/>
          
        </main>


        {/*Footer */}

    </div>
  )
}