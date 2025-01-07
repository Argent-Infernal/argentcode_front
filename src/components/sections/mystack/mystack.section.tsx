import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
    SiNestjs,
    SiPrisma,
    SiTypescript,
    SiShadcnui,
    SiMui,
    SiRedux,
    SiFormik,
    SiStyledcomponents,
    SiMysql,
    SiDocker
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { DiPostgresql } from "react-icons/di";

import { useScroll } from "@/Providers/ScrollProvider";
import styles from './mystack-section.module.scss'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Title from "@/components/ui/Custom/Title";
import AnimatedSection from "@/components/ui/Custom/AnimatedSection/AnimatedSection";

const STACK_FRONTEND = [
    {title: 'NextJS', icon: RiNextjsFill},
    {title: 'Shadcn UI', icon: SiShadcnui},
    {title: 'React', icon: FaReact},
    {title: 'Tailwind CSS', icon: RiTailwindCssFill},
    {title: 'SCSS', icon: BsFiletypeScss},
    {title: 'Material UI', icon: SiMui},
    {title: 'ReduxJS', icon: SiRedux},
    {title: 'Formik', icon: SiFormik},
    {title: 'Styled Components', icon: SiStyledcomponents},
]

const STACK_BACKEND = [
    {title: 'NestJS', icon: SiNestjs},
    {title: 'PostgreSQL', icon: DiPostgresql},
    {title: 'MySQL', icon: SiMysql},
    {title: 'Prisma', icon: SiPrisma},
    {title: 'Docker', icon: SiDocker},
]

export default function MyStackSection() {
    const { sectionRefs } = useScroll();

    return (
        <section ref = {sectionRefs.mystackSection} className={styles.wrapper}>
            <AnimatedSection className='w-full'>
                <Title>Мой Стек Технологий</Title>

                <div className={styles.gridContainer}>
                    <div>
                        <h2>Frontend</h2>

                        <div className='mt-5'>
                            {STACK_FRONTEND.map((item, index) => (
                                <Card key={index} className={styles.card}>
                                    <CardContent className={styles.cardContent}>
                                        <div className={styles.icon}>{<item.icon/>}</div>
                                        <h3>{`- ${item.title}`}</h3>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2>Backend</h2>

                        <div className='mt-5'>
                            {STACK_BACKEND.map((item, index) => (
                                <Card key={index} className={styles.card}>
                                    <CardContent className={styles.cardContent}>
                                        <div className={styles.icon}>{<item.icon/>}</div>
                                        <h3>{`- ${item.title}`}</h3>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
}