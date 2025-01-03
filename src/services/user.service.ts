import { axiosWithAuth } from "@/api/api.interceptors";
import { API_URL } from "@/config/api.config";
import { IUser } from "@/shared/types/user.interface";

class UserService {
    async getProfile() {
        const {data} = await axiosWithAuth<IUser>({
            url: API_URL.users(''),
            method: 'GET'
        })

        return data
    }

    async getAll() {
        const {data} = await axiosWithAuth<IUser[]>({
            url: API_URL.users('/get-all'),
            method: 'GET'
        })

        return data || []
    }
}

export const userService = new UserService()