import { useQuery } from "@tanstack/react-query";
import { portfolioService } from "@/services/portfolio.service";
import { useMemo } from "react";
import { useParams } from "next/navigation";

export function useGetPortfolio() {
    const params = useParams<{ portfolioId?: string }>();

    const {data: portfolio, isLoading} = useQuery({
        queryKey: ['get portfolio for dashboard'],
        queryFn: () => {
            if (params.portfolioId) {
                return portfolioService.getById(params.portfolioId);
            }
            throw new Error("Portfolio ID is undefined");
        },
        enabled: !!params.portfolioId,
    })

    return useMemo(
        () => ({
            portfolio,
            isLoading
        }),[portfolio, isLoading]
    )
}