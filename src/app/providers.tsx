'use client'

import { PropsWithChildren, useState } from "react";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ThemeProvider } from "@/Providers/Theme.provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollProvider } from "@/Providers/ScrollProvider";
import {ModalProvider} from "@/Providers/Modal.provider";
import {PreloaderProvider} from "@/Providers/Preloader.provider";

export function Providers({children}: PropsWithChildren){
    const [client] = useState(
        new QueryClient({
            defaultOptions:{
                queries:{
                    refetchOnWindowFocus: false
                }
            }
        })
    )

    return (
        <QueryClientProvider client={client}>
            <ThemeProvider>
                <TooltipProvider>
                    <ScrollProvider>
                        <ModalProvider>
                            <PreloaderProvider>
                                {children}
                            </PreloaderProvider>
                        </ModalProvider>
                    </ScrollProvider>
                </TooltipProvider>
            </ThemeProvider>
        </QueryClientProvider>
    )
}