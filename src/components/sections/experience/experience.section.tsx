'use client'

import { useScroll } from "@/Providers/ScrollProvider";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import styles from './experience-section.module.scss'
import Title from "@/components/ui/Custom/Title";
import AnimatedSection from "@/components/ui/Custom/AnimatedSection/AnimatedSection";

export default function ExperienceSection() {
    const { sectionRefs } = useScroll();

    return (
        <section ref={sectionRefs.experienceSection} className={styles.wrapper}>
            <AnimatedSection>
                <Title>Опыт работы</Title>

                <div className={styles.topBlock}>
                    <Card className={styles.card}>
                        <CardHeader>
                            <CardTitle>ООО "КОДМАРК"</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Работаю с 26.12.2024, Fullstack Разработчик
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </AnimatedSection>
        </section>
    );
}