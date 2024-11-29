// 与后端业务一一对应
export interface IResponse<T> {
    code: number
    message: string
    data: T
}