import { portfolioService } from "@/services/portfolio.service"
import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"


export const useGetPortfolioList = () => {
    const {data: portfolioList, isLoading} = useQuery({
        queryKey: ['get portfolio items for dashboard'],
        queryFn: () => portfolioService.getAll()
    })

    return useMemo(
        () => ({
            portfolioList,
            isLoading
        }),[portfolioList, isLoading]
    )
}