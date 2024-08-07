import axios from "axios";

const BASE_HOST = "http://localhost:8082"

const axiosClient = axios.create(
    {
    baseURL: BASE_HOST
    }
)

export default axiosClient