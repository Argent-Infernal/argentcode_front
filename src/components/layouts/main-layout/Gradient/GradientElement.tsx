'use client'

import {useEffect, useRef, useState} from "react";
import {getRandomInt} from "@/lib/utils";
import {useIsMobile} from "@/hooks/use-mobile";

interface GradientElementProps {
    startX: number;
    startY: number;
    positionRandom: boolean;
    className?: string;
}

export default function GradientElement({startX, startY, positionRandom, className}: GradientElementProps) {
    const [offset, setOffset] = useState({
        x: positionRandom ? getRandomInt(1, window.innerWidth) : startX,
        y: positionRandom ? getRandomInt(1, window.innerHeight) : startY
    });
    const speed = 0.5;

    // Рандомизация начального направления
    const directionRef = useRef({
        x: Math.random() < 0.5 ? speed : -speed, // Рандомизируем направление по X
        y: Math.random() < 0.5 ? speed : -speed  // Рандомизируем направление по Y
    });

    const isMobile = useIsMobile()

    const elementSize = isMobile ? 200 : 384

    useEffect(() => {
        let animationFrameId: number;

        const animate = () => {
            setOffset(prev => {
                let newOffset = {
                    x: prev.x + directionRef.current.x,
                    y: prev.y + directionRef.current.y
                };

                // Проверяем границы по X
                if (newOffset.x >= (window.innerWidth) + (elementSize/2)) {
                    directionRef.current.x = -speed;
                    newOffset.x = (window.innerWidth) - (elementSize);
                } else if (newOffset.x <= (-elementSize)) { // Левая граница
                    directionRef.current.x = speed;
                    newOffset.x = 0;
                }

                // Проверяем границы по Y
                if (newOffset.y >= (window.innerHeight) + (elementSize/2)) {
                    directionRef.current.y = -speed;
                    newOffset.y = (window.innerHeight) - (elementSize);
                } else if (newOffset.y <= (-elementSize)) { // Верхняя граница
                    directionRef.current.y = speed;
                    newOffset.y = 0;
                }

                return newOffset;
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div
            className={`absolute top-0 -left-4 md:w-[30rem] md:h-[30rem] w-72 h-72 rounded-full mix-blend-multiply filter blur-[128px] bg-primary opacity-15 ${className}`}
            style={{
                transform: `translate(${offset.x}px, ${offset.y}px)`,
                transition: 'transform 0.1s ease-out'
            }}
        />
    )
}