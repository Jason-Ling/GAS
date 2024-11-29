<script setup lang="ts">
import { useRoute } from "vue-router"
const route = useRoute()
</script>

<template>
  <h1>这里是游戏页面, gid: {{ route.query.gid }}</h1>
</template>
