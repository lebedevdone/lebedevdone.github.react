import axios from "axios";
import { API } from "../../env";
export const instanceAxios  = axios.create({
    baseURL: API
})