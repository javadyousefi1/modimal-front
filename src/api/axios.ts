
import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL
const config = {
    baseURL: `${apiUrl}/`
}

const axiosInstance = axios.create(config)

axiosInstance.interceptors.request.use(async (request) => {
    request.withCredentials = true
    return request
})

axiosInstance.interceptors.response.use(
    async (response) => {
        return Promise.resolve(response)
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axiosInstance
