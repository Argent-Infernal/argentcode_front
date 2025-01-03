import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { IPortfolioItem } from "@/shared/types/portfolio.interface";
import Image from "next/image";
import {useModal} from "@/Providers/Modal.provider";
import PortfolioModal from "@/components/modals/Portfolio.modal";
import StackIcon from "@/components/ui/Custom/StackIcon";
import styles from './portfolio-item.module.scss'
import Link from "next/link";
import {Button} from "@/components/ui/button";
import ImageModal from "@/components/modals/Image.modal";
import React from "react";

interface PortfolioItemProps {
    item: IPortfolioItem;
}

export default function PortfolioItem({ item }: PortfolioItemProps) {
    const { showModal } = useModal();

    const openImageModal = (path:string) => {
        showModal(
            <ImageModal
                imagePath={path}
            />
        );
    };

    return (
        <Card className={styles.cardWrapper}>
            <CardContent className={styles.cardContent}>

                {/* Image Section */}
                <div className={styles.imageSection}>
                    <div className={styles.imageSectionCard}>
                        <Carousel>
                            <CarouselContent>
                                {item.images.map((src, index) => (
                                    <CarouselItem key={index} onClick={() => openImageModal(src)}>
                                        <div className="relative w-full h-64">
                                            <Image
                                                src={src}
                                                alt={`${item.title} - ${index + 1}`}
                                                layout="fill"
                                                objectFit="contain"
                                                quality={100}
                                                className="rounded-xl"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>

                {/* Text Section */}
                <div className={styles.textSection}>

                    <Link href={`/portfolio/${item.id}`}><Button variant='link' className={styles.buttonLink}>{item.title}</Button></Link>

                    <p>{item.description}</p>
                    <div className={styles.stack}>
                        {item.stack.split(",").map((tech, index) => (
                            <StackIcon tech={tech} key={index} />
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}