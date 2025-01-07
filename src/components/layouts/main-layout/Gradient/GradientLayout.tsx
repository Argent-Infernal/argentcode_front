'use client'

import styles from "./GradientLayout.module.scss";
import GradientElement from "@/components/layouts/main-layout/Gradient/GradientElement";

const GradientElements = [
    {startX: 0, startY: 40, className:'bg-primary opacity-15'},
    {startX: 159, startY: 35, className:'bg-cyan-300 opacity-15'},
    {startX: 306, startY: 13, className:'bg-cyan-300 opacity-15'},
    {startX: 359, startY: 5, className:'bg-primary opacity-15'},
]

export default function GradientLayout() {

    return (
        <div className={styles.gradientAnim}>
            <div className={styles.gradientLayout}>
                {GradientElements.map((el, index) => (
                    <GradientElement
                        key={index}
                        startX={el.startX}
                        startY={el.startY}
                        positionRandom={true}
                        className={el.className}
                    />
                ))}
            </div>
        </div>
    )
}