'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ADMIN_URL, PUBLIC_URL } from "@/config/url.config"
import { useProfile } from "@/hooks/queries/users/useProfile"
import { authService } from "@/services/auth/auth.service"
import { useMutation } from "@tanstack/react-query"
import { LoaderCircle, LogOut } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import styles from './Header.module.scss'

export function HeaderUserButtons() {
    const {user, isLoading, refetch} = useProfile()
    const router = useRouter()

    const {mutate: logOut} = useMutation({
        mutationKey: ['logout'],
        mutationFn: () => authService.logout(),
        onSuccess: () => {
            toast.success('Вы успешно вышли с аккаунта!')
            refetch()
            router.push(PUBLIC_URL.home())
        }
    })

    if (!user) 
        return (<></>)

    return (
        <>
            <DropdownMenuItem asChild>
                <Link href=''>{`Форум (В РАЗРАБОТКЕ)`}</Link>
            </DropdownMenuItem>

            {user.role === 'admin' && (
                <DropdownMenuItem asChild>
                    <Link href={ADMIN_URL}>Админ панель</Link>
                </DropdownMenuItem>
            )}

            <DropdownMenuItem onClick={() => logOut()}>
                Выйти с аккаунта
            </DropdownMenuItem>
        </>
    )
}

export function HeaderUser() {
    const {user, isLoading, refetch} = useProfile()

    return (
        <div className={styles.headerUser}>
            {isLoading ? (
                <LoaderCircle className="animate-spin text-muted-foreground"></LoaderCircle>
            ) : (
                user ? (
                    <DropdownMenu>

                        <DropdownMenuTrigger className="outline-none">
                            <Avatar>
                                <AvatarImage src={user.picture} alt={user.email} />
                                <AvatarFallback>{user.email}</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="mt-5">

                            <HeaderUserButtons/>

                        </DropdownMenuContent>
                    </DropdownMenu>
                    
                ) : (
                    <Link href={PUBLIC_URL.auth()}>
                        <Button variant='outline'>
                            <LogOut></LogOut>
                            Войти
                        </Button>
                    </Link>
                )
            )
            }
        </div>
    )
}