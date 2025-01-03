import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiNestjs, SiPrisma, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { DiPostgresql } from "react-icons/di";

import { useScroll } from "@/Providers/ScrollProvider";
import styles from './mystack-section.module.scss'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Title from "@/components/ui/Custom/Title";
import AnimatedSection from "@/components/ui/Custom/AnimatedSection/AnimatedSection";

const MYSTACK = [
    { title: 'NextJS', description: 'Фреймворк для React, который позволяет создавать серверные приложения и статические сайты с помощью рендеринга на стороне сервера и статической генерации.', icon: RiNextjsFill },
    { title: 'NestJS', description: 'Прогрессивный фреймворк для создания эффективных серверных приложений на Node.js, использующий TypeScript и вдохновленный архитектурой Angular.', icon: SiNestjs },
    { title: 'React', description: 'Библиотека для создания пользовательских интерфейсов, позволяющая строить многоразовые компоненты и управлять состоянием приложения.', icon: FaReact },
    { title: 'TypeScript', description: 'Язык программирования, разработанный Microsoft, который расширяет возможности JavaScript, добавляя статическую типизацию. Это позволяет разработчикам выявлять ошибки на этапе компиляции, улучшает автозаполнение в редакторах и делает код более предсказуемым и понятным.', icon: SiTypescript },
    { title: 'Tailwind CSS', description: 'Утилитарный CSS-фреймворк, который позволяет быстро создавать кастомные дизайны без необходимости показа стилей в файлах CSS.', icon: RiTailwindCssFill },
    { title: 'SCSS', description: 'Препроцессор CSS, который добавляет возможности, такие как вложенность, переменные и миксины, для более организованного и масштабируемого кода.', icon: BsFiletypeScss },
    { title: 'PostgreSQL', description: 'Мощная объектно-реляционная система управления базами данных с открытым исходным кодом, известная своей надежностью и поддержкой сложных запросов.', icon: DiPostgresql },
    { title: 'Prisma', description: 'Современный ORM для Node.js и TypeScript, который упрощает работу с базами данных, предоставляя типизированный доступ к данным и миграции.', icon: SiPrisma },
];

export default function MyStackSection() {
    const { sectionRefs } = useScroll();

    return (
        <section ref = {sectionRefs.mystackSection} className={styles.wrapper}>
            <AnimatedSection>
                <Title>Мой Стек Технологий</Title>

                <div className={styles.gridCols}>
                    {MYSTACK.map((item, index) => (
                        <div key={index} className={styles.cardStack}>
                            <>
                                <div className={styles.cardIcon}>
                                    <div className={styles.icon}>
                                        {<item.icon />}
                                    </div>
                                </div>
                                <Card className={styles.card}>
                                    <CardHeader>
                                        <CardTitle>{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{item.description}</p>
                                    </CardContent>
                                </Card>
                            </>
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </section>
    );
}