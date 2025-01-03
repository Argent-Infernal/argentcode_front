import React, { useRef, ReactNode } from "react";
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    delay?: number;
    className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
     children,
     delay = 0,
     className = "",
     ...props
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`section ${isVisible ? "visible" : ""} ${className}`}
            style={{ transitionDelay: `${delay}s` }}
            {...props}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;