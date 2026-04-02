import {Navbar} from "@/components/Navbar"
import { ThemeToggle } from "../components/ThemeToggle"
import { BackgroundEffects } from "@/components/BackgroundEffects"

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


        {/*Footer */}

    </div>
  )
}