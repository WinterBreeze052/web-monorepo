<script setup lang="ts">
import { ref } from 'vue'
// const baseURL = 'http://127.0.0.1:4523/m1/5224831-4891614-default'
const baseURL = import.meta.env.VITE_API_URL

const pet = ref()

async function getDate() {
  const res = await fetch(`${baseURL}/pet/1`)
  const json = await res.json()
  pet.value = json.data.name
}
</script>

<template>
  <div>
    <button btn @click="getDate">
      获取宠物数据
    </button>
    <div w-full>
      <div>宠物名称：{{ pet }}</div>
      <!-- <div>{{ pet?.category.name }}</div>
      <img v-for="(url, index) in pet?.photoUrls" :key="index" :src="url" alt=""> -->
    </div>
  </div>
</template>

<style scoped>

</style>
