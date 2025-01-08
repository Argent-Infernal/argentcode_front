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
        x: Math.random() < 0.5 ? speed : -speed,
        y: Math.random() < 0.5 ? speed : -speed
    });

    const isMobile = useIsMobile()

    const elementSize = isMobile ? 200 : 500

    useEffect(() => {
        let animationFrameId: number;

        const animate = () => {
            setOffset(prev => {
                let newOffset = {
                    x: prev.x + directionRef.current.x,
                    y: prev.y + directionRef.current.y
                };

                // Проверяем границы по X
                if (newOffset.x >= (window.innerWidth)) {
                    directionRef.current.x = -speed;
                    newOffset.x = (window.innerWidth);
                } else if (newOffset.x <= (0)) { // Левая граница
                    directionRef.current.x = speed;
                    newOffset.x = 0;
                }

                // Проверяем границы по Y
                if (newOffset.y >= (window.innerHeight)) {
                    directionRef.current.y = -speed;
                    newOffset.y = (window.innerHeight);
                } else if (newOffset.y <= (0)) { // Верхняя граница
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

            className={`absolute rounded-full mix-blend-multiply filter blur-[128px] ${className}`}
            style={{
                width: `${elementSize}px`,
                height: `${elementSize}px`,
                transform: `translate(${offset.x}px, ${offset.y}px)`,
                transition: 'transform 0.1s ease-out'
            }}
        />
    )
}