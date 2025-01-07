import styles from './Footer.module.scss'
import ContactLink from "@/components/ui/Custom/ContactLink";
import { FaGithub,FaTelegram } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.wrapper}>
            <div className={styles.footer}>
                ArgentCode.ru &copy; {currentYear} Все права защищены
                <ContactLink icon={<FaGithub/>} text='GitHub' link='https://github.com/Argent-Infernal' />
                <ContactLink icon={<FaTelegram/>} text='Telegram' link='https://t.me/argentcode' />
            </div>
        </div>
    )
}