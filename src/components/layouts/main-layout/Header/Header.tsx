'use client'

import Link from 'next/link'
import styles from './Header.module.scss'
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { PUBLIC_URL } from '@/config/url.config';
import { useScroll } from '@/Providers/ScrollProvider';
import {usePathname, useRouter} from "next/navigation";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

const buttons = [
    {title: "Главная", link: "mainSection"},
    {title: "О себе", link: "aboutSection"},
    {title: "Мой стек", link: "mystackSection"},
    {title: "Портфолио", link: "portfolioSection"},
    {title: "Опыт работы", link: "experienceSection"},
]

export default function Header() {
    const { scrollToSection } = useScroll();
    const currentPath = usePathname();

    const router = useRouter();

    const [isSticky, setIsSticky] = useState(false)
    const [scrollPercent, setScrollPercent] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollY = window.scrollY
            const percent = (scrollY / totalHeight) * 100

            setIsSticky(scrollY > 0)
            setScrollPercent(percent)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleLink = (section:any) => {
        if (currentPath !== PUBLIC_URL.home())
            router.push(PUBLIC_URL.home())

        scrollToSection(section)
    };

    return (
        <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
            <div className={styles.navigation}>
                <Link href={PUBLIC_URL.home()}>
                    <Image
                        className='pointer-events-none'
                        src="/logo.svg"
                        alt="Argent Code"
                        width={150}
                        height={150}
                        priority
                    />
                </Link>
            </div>

            <div className={styles.navigation}>

                {/* Компьютерное меню */}

                <div className={styles.navsButtons}>
                    {buttons.map((button,index)=>(
                        <Button key={index} variant='ghost' onClick={()=>handleLink(button.link)}>{button.title}</Button>
                    ))}
                </div>

                {/* Мобильное меню */}

                <div className="md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant='ghost'>Меню</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='mt-5'>
                            {buttons.map((button,index)=>(
                                <DropdownMenuItem key={index} asChild>
                                    <Button variant='ghost' onClick={()=>handleLink(button.link)}>{button.title}</Button>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </div>

            <div className={styles.navigation}>
            {/*    <HeaderUser/>*/}
            </div>

            <div
                className={styles.scrollBorder}
                style={{ width: `${scrollPercent}%` }}
            />
        </header>
    )
}