
import { IPortfolioItem } from "@/shared/types/portfolio.interface";
import axios from "axios";

class PortfolioService {
    private baseUrl: string = "/api/portfolio";

    async getAll(): Promise<IPortfolioItem[]> {
        try {
            const response = await axios.get<IPortfolioItem[]>(this.baseUrl);
            return response.data;
        } catch (error) {
            console.error("Ошибка при получении всех элементов портфолио:", error);
            throw error;
        }
    }

    async getById(id: string): Promise<IPortfolioItem> {
        try {
            const response = await axios.get<IPortfolioItem>(`/api/portfolio?id=${id}`);
            return response.data;
        } catch (error) {
            console.error(`Ошибка при получении элемента портфолио с ID ${id}:`, error);
            throw error;
        }
    }
}

export const portfolioService = new PortfolioService()