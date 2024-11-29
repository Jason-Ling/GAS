<script setup lang="ts">
import { ref } from "vue"
import { useGlobalStore } from "@/stores/GlobalStore"
import type { Games } from "@/interface/global"

const activeIndex = ref("Home")

const globalStore = useGlobalStore()
globalStore.getNavList()
const navList: Array<Games> = globalStore.navList
</script>

<template>
  <div>
    <el-container>
      <el-header style="padding: 0px;">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          router
        >
          <el-menu-item>
            <img
              style="width: 120px"
              src="./assets/logo-white.png"
              alt="logo"
            />
          </el-menu-item>
          <el-menu-item index="Home" style="width: 120px">首页</el-menu-item>
          <el-menu-item
            v-for="item in navList"
            :key="item.gid"
            :index="item.path"
            :route="{ name: item.path, query: { gid: item.gid } }"
            style="width: 120px"
          >
            {{ item.name }}
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
      <!-- <el-footer style="background-color: black; height: 200px">
        <div class="common-layout">
          <el-container>
            <el-aside width="40%" style="height: 200px;">
              <img src="./assets/logo.png" alt="logo" class="image-center" />
            </el-aside>
            <el-main>Main</el-main>
          </el-container>
        </div>
      </el-footer> -->
    </el-container>
  </div>
</template>
<style lang="css">
a {
  text-decoration: none;
}
</style>
