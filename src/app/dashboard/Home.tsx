'use client'
import AboutSection from "@/components/sections/about/about.section";
import MainSection from "@/components/sections/main/main.section";
import MyStackSection from "@/components/sections/mystack.section";
import PortfolioSection from "@/components/sections/portfolio/portfolio.section";
import { saveTokenStorage } from "@/services/auth/auth-token.service";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

    const searchParams = useSearchParams()

    useEffect(()=>{
        const accessToken = searchParams.get('accessToken')

        if (accessToken) {
            saveTokenStorage(accessToken)
        }
    }, [searchParams])

    return (
        <div>
            <MainSection/>
            <AboutSection/>
            <MyStackSection/>
            <PortfolioSection/>
        </div>
    )
}