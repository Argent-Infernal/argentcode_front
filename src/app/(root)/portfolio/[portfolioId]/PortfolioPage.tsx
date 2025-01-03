'use client'

import styles from './PortfolioPage.module.scss'
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import ImagesGallery from "@/components/ui/Custom/ImagesGallery/ImagesGallery";
import {useGetPortfolio} from "@/hooks/queries/portfolio/useGetPortfolio";
import {Loader} from "lucide-react";
import StackIcon from "@/components/ui/Custom/StackIcon";

export function Portfolio() {

    const {portfolio, isLoading} = useGetPortfolio();

    if (!portfolio) return;

    return (
        <div className={styles.wrapper}>
            {isLoading ? (
                <Loader />
            ): (
                <Card className={styles.cardWrapper}>
                    <CardHeader>
                        <CardTitle>{portfolio.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className={styles.cardContent}>
                            <div className={styles.cardImages}>
                                <div className={styles.imagesGallery}>
                                    <ImagesGallery images={portfolio.images}/>
                                </div>
                            </div>

                            <div className={styles.cardDesc}>
                                <h1>Описание:</h1>
                                {portfolio.description.split('\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className={styles.stack}>
                            {portfolio.stack.split(",").map((tech, index) => (
                                <StackIcon tech={tech} key={index}/>
                            ))}
                        </div>
                    </CardFooter>
                </Card>
            )}

        </div>
    )
}