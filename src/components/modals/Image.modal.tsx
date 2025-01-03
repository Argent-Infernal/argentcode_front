"use client"

import {Card,CardContent} from "@/components/ui/card";
import Image from 'next/image';

interface ImageModalProps {
    imagePath: string
}

const ImageModal: React.FC<ImageModalProps> = ({imagePath}) => {
    return (
        <div className="relative flex items-center justify-center w-[960px] h-[540px] max-w-5xl rounded-md">
            <Card className="overflow-hidden">
                <CardContent>
                    <Image
                        src={imagePath}
                        alt="Изображение"
                        layout="fill"
                        quality={100}
                        objectFit="contain"
                    />
                </CardContent>
            </Card>
        </div>
    )
};

export default ImageModal;