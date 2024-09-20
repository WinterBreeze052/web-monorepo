<script setup lang="ts">
import { onMounted } from 'vue'
import { useDark } from '../composables/uesDark'

const { enableDarkMode, disableDarkMode, applySavedTheme } = useDark()

onMounted(() => {
  applySavedTheme()
})
</script>

<template>
  <!-- <section class="bg-yellow rounded-md w-800px grid grid-cols-3 items-center gap-2">
    <div class="bg-pink h-10 place-content-center">1</div>
    <div bg-sky>2</div>
    <div>3</div>
    <div>4</div>
  </section> -->
  <div class="m-auto size-100 bg-pink hover:(bg-cyan text-4xl)" content-center transition-1000>
    <!-- <div class="i-carbon-bot" /> -->
    <div class="i-openmoji-blossom" />
  </div>
  <div>>>>>><<KSDJ(UFU)(A)</div>
  <div class="dark:bg-red">
    <div class="flex justify-center gap-5">
      <button @click="disableDarkMode">
        Light
      </button>
      <button @click="enableDarkMode">
        Dark
      </button>
    </div>
  </div>
</template>

<style scoped></style>
