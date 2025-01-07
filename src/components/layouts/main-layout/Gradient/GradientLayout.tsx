'use client'

import { useEffect, useState, useRef } from 'react';
import styles from "./GradientLayout.module.scss";

export default function GradientLayout() {
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const speed = 0.2;

    const directionRef = useRef({ x: speed, y: speed });
    const elementSize = 96;

    useEffect(() => {
        let animationFrameId: number; // Указываем тип number

        const animate = () => {
            setOffset(prev => {
                let newOffset = {
                    x: prev.x + directionRef.current.x,
                    y: prev.y + directionRef.current.y
                };

                // Проверяем границы по X
                if (newOffset.x >= (window.innerWidth / 2) - (elementSize / 2)) {
                    directionRef.current.x = -speed;
                    newOffset.x = (window.innerWidth / 2) - (elementSize / 2);
                } else if (newOffset.x <= -(window.innerWidth / 2) + (elementSize / 2)) {
                    directionRef.current.x = speed;
                    newOffset.x = -(window.innerWidth / 2) + (elementSize / 2);
                }

                // Проверяем границы по Y
                if (newOffset.y >= (window.innerHeight / 2) - (elementSize / 2)) {
                    directionRef.current.y = -speed;
                    newOffset.y = (window.innerHeight / 2) - (elementSize / 2);
                } else if (newOffset.y <= -(window.innerHeight / 2) + (elementSize / 2)) {
                    directionRef.current.y = speed;
                    newOffset.y = -(window.innerHeight / 2) + (elementSize / 2);
                }

                return newOffset;
            });
            animationFrameId = requestAnimationFrame(animate); // Сохраняем идентификатор
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId); // Отменяем анимацию по идентификатору
        };
    }, []);

    return (
        <div className={styles.gradientAnim}>
            <div className={styles.gradientLayout}>

                <div
                    className="absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-[128px] opacity-15"
                    style={{
                        transform: `translate(${offset.x}px, ${offset.y + 40}px)`,
                        transition: 'transform 0.1s ease-out'
                    }}
                />

                <div
                    className="absolute top-0 -right-4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-15 hidden sm:block"
                    style={{
                        transform: `translate(${159 + offset.x}px, ${offset.y + 35}px)`,
                        transition: 'transform 0.1s ease-out'
                    }}
                />

                <div
                    className="absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-15"
                    style={{
                        transform: `translate(${306 - offset.x}px, ${offset.y + 13}px)`,
                        transition: 'transform 0.1s ease-out'
                    }}
                />

                <div
                    className="absolute -bottom-10 right-20 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-[128px] opacity-15 hidden sm:block"
                    style={{
                        transform: `translate(${359 - offset.x}px, ${offset.y - 5}px)`,
                        transition: 'transform 0.1s ease-out'
                    }}
                />
            </div>
        </div>
    )
}