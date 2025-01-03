'use client'

import { useScroll } from "@/Providers/ScrollProvider";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import styles from './about-section.module.scss'
import Title from "@/components/ui/Custom/Title";
import AnimatedSection from "@/components/ui/Custom/AnimatedSection/AnimatedSection";

export default function AboutSection() {
    const { sectionRefs } = useScroll();

    return (
        <section ref={sectionRefs.aboutSection} className={styles.wrapper}>
            <AnimatedSection>
                <Title>О себе</Title>

                <div className={styles.topBlock}>
                    <Card className={styles.card}>
                        <CardHeader>
                            <CardTitle>Кратко о себе</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Я начинающий <span>Fullstack</span> разработчик.
                                С 14 лет изучаю программирование, начинал со скриптового языка Lua.
                                Пробовал делать игры на Unity, но в конце концов нашёл своё пристанище в веб-разработке.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className={styles.card}>
                        <CardHeader>
                            <CardTitle>Моё образование</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Я учусь в Нижневартовском Государственном Университете по направлению информатика и вычислительная техника</p>
                        </CardContent>
                    </Card>

                    <Card className={styles.card}>
                        <CardHeader>
                            <CardTitle>Мои взгляды на будущее</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Я стремлюсь к постоянному развитию и изучению новых технологий.
                                Мои цели включают создание инновационных веб-приложений и участие в значимых проектах,
                                которые могут принести пользу обществу.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </AnimatedSection>
        </section>
    );
}