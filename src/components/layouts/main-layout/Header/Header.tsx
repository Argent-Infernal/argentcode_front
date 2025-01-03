'use client'

import Link from 'next/link'
import styles from './Header.module.scss'
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { PUBLIC_URL } from '@/config/url.config';
import { useProfile } from '@/hooks/queries/users/useProfile';
import { useScroll } from '@/Providers/ScrollProvider';
import {HeaderUser} from './HeaderUser';
import {usePathname, useRouter} from "next/navigation";

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
                    <Button variant='ghost' onClick={()=>handleLink('mainSection')}>Главная</Button>
                    <Button variant='ghost' onClick={()=>handleLink('aboutSection')}>О себе</Button>
                    <Button variant='ghost' onClick={()=>handleLink('mystackSection')}>Мой стек</Button>
                    <Button variant='ghost' onClick={()=>handleLink('portfolioSection')}>Портфолио</Button>
                    <Button variant='ghost' onClick={()=>handleLink('experienceSection')}>Опыт работы</Button>
                </div>

                {/* Мобильное меню */}

                {/* <div className="md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant='ghost'>Меню</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='mt-5'>
                            {user ? (
                                <HeaderUserButtons/>
                            ) : (
                                <DropdownMenuItem asChild>
                                    <Link href={PUBLIC_URL.auth()}><Button variant='default' className="w-full">Войти</Button></Link>
                                </DropdownMenuItem>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div> */}

            </div>

            <div className={styles.navigation}>
                <HeaderUser/>
            </div>

            <div
                className={styles.scrollBorder}
                style={{ width: `${scrollPercent}%` }}
            />
        </header>
    )
}