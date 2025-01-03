"use client"

import React, { useState, ReactNode, useEffect } from 'react';
import Preloader from "@/components/ui/Custom/Preloader/Preloader";

export const PreloaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    }, []);

    return (
        <>
            {!loading ? (
                <Preloader/>
            ):(
                <>
                    {children}
                </>
            )}
        </>
    );
};