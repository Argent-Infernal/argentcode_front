'use client'

import styles from './ImagesGallery.module.scss'
import React, { useState } from 'react';
import {Button} from "@/components/ui/button";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";
import { useModal } from '@/Providers/Modal.provider';
import ImageModal from '@/components/modals/Image.modal';


interface ImagesGalleryProps {
    className?: string
    images: string[]
}

const ImagesGallery: React.FC<ImagesGalleryProps> = ({className,images}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const { showModal } = useModal();

    const openImageModal = (path:string) => {
        showModal(
            <ImageModal
                imagePath={path}
            />
        );
    };

    return (
        <div className={className}>
            <div className={styles.imagesGallery}>
                <div className={styles.mainImage}>
                    <img onClick={()=>openImageModal(images[currentImageIndex])} className='rounded' src={images[currentImageIndex]} alt={`Product Image ${currentImageIndex + 1}`} />
                </div>
                <div className={styles.thumbnails}>
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {images.map((src, index) => (
                                <CarouselItem key={index} className={`basis-1/1 ${index == currentImageIndex ? "border-primary" : "border-none"}`}>
                                    <Image
                                        key={index}
                                        src={src}
                                        width={50}
                                        height={50}
                                        alt={`Thumbnail ${index + 1}`}
                                        onClick={() => setCurrentImageIndex(index)}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
                <div className={styles.buttons}>
                    <Button variant='ghost' onClick={handlePrev}>&lt;</Button>
                    <Button variant='ghost' onClick={handleNext}>&gt;</Button>
                </div>
            </div>
        </div>
    );
};

export default ImagesGallery;