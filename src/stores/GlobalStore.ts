import { defineStore } from "pinia"
import { reactive, ref } from "vue"
import type { Games } from "@/interface/global"
import { getGlobalNav } from "@/api/global"

export const useGlobalStore = defineStore('globalStore', () => {
    let token = ref("")
    let gameId = ref(0)
    let navList: Array<Games> = reactive([
        {
            gid: 1,
            name: "原神",
            eName: "Genshin Impact",
            path: "GenshinImpact",
            description: "这是一款连续多年火热的划时代的开放世界多端游戏！"
        }
    ])
    async function getNavList() {
        const result = (await getGlobalNav()).data
        Object.assign(navList, result)
    }
    return { token, navList, getNavList }
})