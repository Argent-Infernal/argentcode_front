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
    SiDocker, SiHtml5, SiCss3
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";

import { useScroll } from "@/Providers/ScrollProvider";
import styles from './mystack-section.module.scss'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Title from "@/components/ui/Custom/Title";
import AnimatedSection from "@/components/ui/Custom/AnimatedSection/AnimatedSection";
import Image from 'next/image';

const STACK = [
    {title: 'HTML', icon: 'stack_icons/html.svg'},
    {title: 'CSS', icon: 'stack_icons/css.svg'},
    {title: 'Typescript', icon: 'stack_icons/typescript.svg'},
    {title: 'Tailwind CSS', icon: 'stack_icons/tailwind.svg'},
    {title: 'React', icon: 'stack_icons/react.svg'},
    {title: 'NextJS', icon: 'stack_icons/nextjs.svg'},
    {title: 'Shadcn UI', icon: 'stack_icons/shadcn.svg'},
    {title: 'Material UI', icon: 'stack_icons/mui.svg'},
    {title: 'ReduxJS', icon: 'stack_icons/redux.svg'},
    {title: 'NestJS', icon: 'stack_icons/nestjs.svg'},
    {title: 'PostgreSQL', icon: 'stack_icons/postgresql.svg'},
    {title: 'MySQL', icon: 'stack_icons/mysql.svg'},
    {title: 'Prisma', icon: 'stack_icons/prisma.svg'},
    {title: 'Docker', icon: 'stack_icons/docker.svg'},
    // {title: 'Typescript', icon: SiTypescript},
    // {title: 'Tailwind CSS', icon: RiTailwindCssFill},
    // {title: 'React', icon: FaReact},
    // {title: 'NextJS', icon: RiNextjsFill},
    // {title: 'Shadcn UI', icon: SiShadcnui},
    // {title: 'Material UI', icon: SiMui},
    // {title: 'ReduxJS', icon: SiRedux},
    // {title: 'Formik', icon: SiFormik},
    // {title: 'Styled Components', icon: SiStyledcomponents},
    // {title: 'NestJS', icon: SiNestjs},
    // {title: 'PostgreSQL', icon: DiPostgresql},
    // {title: 'MySQL', icon: SiMysql},
    // {title: 'Prisma', icon: SiPrisma},
    // {title: 'Docker', icon: SiDocker},
]

export default function MyStackSection() {
    const { sectionRefs } = useScroll();

    return (
        <section ref = {sectionRefs.mystackSection} className={styles.wrapper}>
            <AnimatedSection className='w-full'>
                <Title>Мой Стек Технологий</Title>

                <div className={styles.gridContainer}>
                    {STACK.map((item, index) => (
                        <Card key={index} className={styles.card}>
                            <CardContent className={styles.cardContent}>
                                <div className={styles.icon}>
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <h5 className={styles.label}>{item.title}</h5>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </AnimatedSection>
        </section>
    );
}