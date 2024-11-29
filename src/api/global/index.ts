import Http from "@/api/axios"
import type { Games } from "@/interface/global"


export function getGlobalNav() {
    return Http.get<Array<Games>>("/mock/getGlobalNav")
}