'use client';

import { useGetPortfolioList } from "@/hooks/queries/portfolio/useGetPortfolioList";
import { useScroll } from "@/Providers/ScrollProvider";
import styles from './portfolio-section.module.scss'
import Title from "@/components/ui/Custom/Title";
import PortfolioItem from "./PortfolioItem";
import AnimatedSection from "@/components/ui/Custom/AnimatedSection/AnimatedSection";

export default function PortfolioSection() {
    const { portfolioList, isLoading } = useGetPortfolioList()
    const { sectionRefs } = useScroll()

    return (
        <section ref = {sectionRefs.portfolioSection} className={styles.wrapper}>
            <AnimatedSection>
                <Title>Мои работы</Title>
                {portfolioList && portfolioList.length ? (
                    <div className={styles.gridPortfolio}>
                        {portfolioList.map((item, index) => (

                            <PortfolioItem item={item} key={index}/>

                        ))}
                    </div>
                ) : (
                    <div className="text-center mt-4">
                        <p>Работ пока нет. Загляните позже!</p>
                    </div>
                )}
            </AnimatedSection>
        </section>
    );
}