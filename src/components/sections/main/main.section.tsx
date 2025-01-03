'use client'

import { useScroll } from '@/Providers/ScrollProvider';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import styles from './main-section.module.scss'
import AnimatedSection from "@/components/ui/Custom/AnimatedSection/AnimatedSection";

export default function MainSection() {
    const { sectionRefs } = useScroll();

    return (
        <section ref={sectionRefs.mainSection} className={styles.wrapper}>
            <AnimatedSection>
                <Image
                    src="/logo_main.svg"
                    alt="Argent Code"
                    width={450}
                    height={450}
                    priority
                />
            </AnimatedSection>
            <div className={styles.arrow}>
                <ArrowDown/>
            </div>
        </section>
    );
}