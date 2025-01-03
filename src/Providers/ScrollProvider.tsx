import React, { createContext, useRef, useContext, ReactNode } from 'react';

type SectionRefs = {
    mainSection: React.RefObject<HTMLDivElement | null>;
    aboutSection: React.RefObject<HTMLDivElement | null>;
    mystackSection: React.RefObject<HTMLDivElement | null>;
    portfolioSection: React.RefObject<HTMLDivElement | null>;
    experienceSection: React.RefObject<HTMLDivElement | null>;
};

interface ScrollContextType {
    sectionRefs: SectionRefs;
    scrollToSection: (sectionKey: keyof SectionRefs) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

interface ScrollProviderProps {
    children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
    const sectionRefs: SectionRefs = {
        mainSection: useRef<HTMLDivElement | null>(null),
        aboutSection: useRef<HTMLDivElement | null>(null),
        mystackSection: useRef<HTMLDivElement | null>(null),
        portfolioSection: useRef<HTMLDivElement | null>(null),
        experienceSection: useRef<HTMLDivElement | null>(null)
    };

    const scrollToSection = (sectionKey: keyof SectionRefs) => {
        const ref = sectionRefs[sectionKey];
        if (ref.current) { // Проверяем только ref.current
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <ScrollContext.Provider value={{ sectionRefs, scrollToSection }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = (): ScrollContextType => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }
    return context;
};