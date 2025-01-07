import { PropsWithChildren } from "react";
import styles from './MainLayout.module.scss'
import Header from "./Header/Header";
import Footer from "./footer/Footer";
import GradientLayout from "@/components/layouts/main-layout/Gradient/GradientLayout";

export default function MainLayout({children}:PropsWithChildren<{}>) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.layout}>
                <GradientLayout />
                <Header/>
                <main>{children}</main>
                <Footer/>
            </div>
        </div>
    )
}