<script setup lang="ts">
import type { ZhiHuHot, ZhiHuHotList } from '../types/zhihu'
import { onMounted, ref } from 'vue'

const list = ref<ZhiHuHot[]>([])

const getData = async () => {
  const url = '/api/v3/feed/topstory/hot-lists/total'
  const response = await fetch(url, { mode: 'no-cors' })
  const res: ZhiHuHotList = await response.json()
  list.value = res.data
}

onMounted(() => {
  getData()
})

const toggleHot = (id: number) => {
  window.open(`https://www.zhihu.com/question/${id}`)
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <section v-for="(item, index) in list" :key="item.id" class="h-52 flex cursor-pointer justify-between border border-gray-300 rounded bg-[#d3f3fa] p-4 transition-colors duration-300 hover:bg-[#63e5ff]" @click="toggleHot(item.target.id)">
      <span class="mr-4 text-2xl font-bold line-height-5">{{ index + 1 }}</span>
      <div class="h-full flex flex-1 flex-col justify-around">
        <h2 class="line-clamp-1 overflow-hidden text-ellipsis text-lg font-semibold">
          {{ item.target.title }}
        </h2>
        <p class="line-clamp-3 overflow-hidden text-ellipsis text-sm text-gray-600">
          {{ item.target.excerpt }}
        </p>
        <div class="text-start text-xs text-gray-800">
          {{ item.detail_text }}
        </div>
      </div>
      <img :src="item.children[0].thumbnail" alt="" class="h-[100px] w-[100px] rounded object-cover">
    </section>
  </div>
</template>

<style scoped>
.line-height-5 {
  line-height: 20px;
}
</style>

<!-- <template>
  <div class="list">
    <section v-for="(item, index) in list" :key="item.id" class="hot" @click="toggleHot(item.target.id)">
      <span class="list-span">{{ index + 1 }}</span>
      <div class="list-context">
        <h2 class="ellipsis_2">
          {{ item.target.title }}
        </h2>
        <p class="ellipsis_1">
          {{ item.target.excerpt }}
        </p>
        <div style="text-align:start;">
          {{ item.detail_text }}
        </div>
      </div>
      <img :src="item.children[0].thumbnail" alt="" class="image">
    </section>
  </div>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hot {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #d3f3fa;
  cursor: pointer;
  transition: background-color 0.3s;
  height: 200px;

}

.hot:hover {
  background-color: #63e5ff;
}

.index {
  font-size: 24px;
  font-weight: bold;
  margin-right: 16px;
}

.content {
  flex: 1;
}

.title {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px 0;
}

.excerpt {
  font-size: 14px;
  color: #666;
  margin: 0 0 8px 0;
}

.detail_text {
  font-size: 12px;
  color: #333;
  margin: 0;
}

.thumbnail {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
}

.list-span {
  line-height: 20px;
}

.list-context {
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-around;
  width: 70%;
}

.ellipsis_2 {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.ellipsis_1 {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.image {
  height: 200px;
  width: 300px;
}
</style>
 -->
