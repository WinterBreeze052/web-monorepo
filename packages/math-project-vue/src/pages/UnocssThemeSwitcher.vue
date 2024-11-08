<script lang="ts" setup>
const onThemeChange = (e: string) => {
  document.body.className = e;
};
</script>

<template>
  <header flex items-center justify-center gap-2>
    <h2>主题切换</h2>
    <button @click="onThemeChange('default')">default</button>
    <button @click="onThemeChange('peaple')">peaple</button>
    <button @click="onThemeChange('spring')">spring</button>
    <button @click="onThemeChange('ocean')">海洋</button>
    <button @click="onThemeChange('sunset')">日落</button>
    <button @click="onThemeChange('forest')">森林</button>
    <button @click="onThemeChange('pastel')">粉彩</button>
  </header>

  <div mb-3 flex justify-center gap-2>
    <button bg-primary text-white>primary</button>
    <button bg-warning text-white>warning</button>
    <button bg-danger text-white>danger</button>
    <button bg-info text-white>info</button>
  </div>
</template>