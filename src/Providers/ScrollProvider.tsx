import React, { createContext, useRef, useContext, ReactNode } from 'react';

type SectionRefs = {
    mainSection: React.RefObject<HTMLDivElement>;
    aboutSection: React.RefObject<HTMLDivElement>;
    mystackSection: React.RefObject<HTMLDivElement>;
    portfolioSection: React.RefObject<HTMLDivElement>;
    experienceSection: React.RefObject<HTMLDivElement>;
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
        mainSection: useRef<HTMLDivElement>(null),
        aboutSection: useRef<HTMLDivElement>(null),
        mystackSection: useRef<HTMLDivElement>(null),
        portfolioSection: useRef<HTMLDivElement>(null),
        experienceSection: useRef<HTMLDivElement>(null)
    };

    const scrollToSection = (sectionKey: keyof SectionRefs) => {
        const ref = sectionRefs[sectionKey];
        if (ref && ref.current) {
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