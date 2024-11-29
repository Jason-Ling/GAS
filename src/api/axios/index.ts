import axios from "axios"
import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig, CreateAxiosDefaults } from "axios"
import { ElMessage } from "element-plus"
import { useGlobalStore } from "@/stores/GlobalStore"
import type { IResponse } from "../../interface/axios"

const config: CreateAxiosDefaults = {
    baseURL: 'http://127.0.0.1:4523/m1/1798267-2969375-default',
    timeout: 5000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
}

class Http {
    private instance: AxiosInstance
    public constructor(config: CreateAxiosDefaults) {
        // 实例化axios
        this.instance = axios.create(config)
        // 请求拦截器
        this.instance.interceptors.request.use((request: InternalAxiosRequestConfig) => {
            const globalStore = useGlobalStore()
            const token: string = globalStore.token
            if (token) {
                request.headers.Authorization = 'Bearer ' + token
            }
            return request
        }, (error) => {
            return Promise.reject(error)
        })
        // 响应拦截器
        this.instance.interceptors.response.use((response: AxiosResponse) => {
            if (response.status === 200) {
                if (response.data.code === 0) {
                    return response.data
                }
                ElMessage.error(response.data.message)
            }
            return Promise.reject(response.statusText)
        }, (error) => {
            ElMessage.error(error.message)
            return Promise.reject(error.message)
        })
    }

    public get<T>(url: string, config?: InternalAxiosRequestConfig): Promise<AxiosResponse<IResponse<T>>> {
        return this.instance.get(url, config)
    }

    public post<T1, T2>(url: string, data?: T2, config?: InternalAxiosRequestConfig): Promise<AxiosResponse<IResponse<T1>>> {
        return this.instance.post(url, data, config)
    }

    public put<T1, T2>(url: string, data?: T2, config?: InternalAxiosRequestConfig): Promise<AxiosResponse<IResponse<T1>>> {
        return this.instance.put(url, data, config)
    }

    public delete<T>(url: string, config?: InternalAxiosRequestConfig): Promise<AxiosResponse<IResponse<T>>> {
        return this.instance.delete(url, config)
    }
}


export default new Http(config)