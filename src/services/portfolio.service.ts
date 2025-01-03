import { axiosClassic } from "@/api/api.interceptors";
import { API_URL } from "@/config/api.config";
import { IPortfolioItem } from "@/shared/types/portfolio.interface";

class PortfolioService {

    async getAll() {
        const {data} = await axiosClassic<IPortfolioItem[]>({
            url: API_URL.portfolio('/list'),
            method: 'GET'
        })

        return data || []
    }

    async getById(id:string) {
        const {data} = await axiosClassic<IPortfolioItem>({
            url: API_URL.portfolio(`/one?id=${id}`)
        })

        return data
    }
}

export const portfolioService = new PortfolioService()