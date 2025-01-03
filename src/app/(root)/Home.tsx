'use client'
import AboutSection from "@/components/sections/about/about.section";
import MainSection from "@/components/sections/main/main.section";
import MyStackSection from "@/components/sections/mystack/mystack.section";
import PortfolioSection from "@/components/sections/portfolio/portfolio.section";
import ExperienceSection from "@/components/sections/experience/experience.section";

export default function Home() {

    return (
        <div>
            <MainSection/>
            <AboutSection/>
            <MyStackSection/>
            <PortfolioSection/>
            <ExperienceSection/>
        </div>
    )
}