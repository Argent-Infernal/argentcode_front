'use client'

import { useRouter } from 'next/navigation'
import styles from './Auth.module.scss'
import { Button } from '@/components/ui/button'
import { SERVER_URL } from '@/config/api.config'
import {FcGoogle} from 'react-icons/fc'
import {FaYandex, FaVk} from 'react-icons/fa'

export function Social() {
    const router = useRouter()

    return (
        <div className={styles.social}>

            <Button 
            variant='outline'
            onClick={()=> router.push(`${SERVER_URL}/auth/google`)}
            >
                <FcGoogle></FcGoogle>
                Продолжить через Google
            </Button>
            
            <Button 
            variant='outline'
            onClick={()=> router.push(`${SERVER_URL}/auth/yandex`)}
            >
                <FaYandex color='#FC3F1D'></FaYandex>
                Продолжить через Yandex
            </Button>

            <Button 
                variant='outline'
                onClick={()=> router.push(`${SERVER_URL}/auth/vk`)}
            >
                <FaVk color='#6495ED'></FaVk>
                Продолжить через ВК
            </Button>
        </div>
    )
}