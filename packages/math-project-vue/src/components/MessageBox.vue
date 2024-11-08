<script setup lang="ts">
import { showMsg } from './MessageBox'

function openAleart() {
  showMsg({
    title: 'Alert标题',
    content: 'Alert-content 123456789',
    closeable: true,
    showCancle: true,
    onCancel: () => {
      console.log('Cancle :>>')
    },
    onConfirm: () => {
      console.log('Confirm :>>')
    },
  })
}
</script>

<template>
  <div>
    <hr>
    <br>
    <br>
    <button class="bg-red text-white btn" @click="openAleart">
      Alert
    </button>
  </div>
</template>
<style scoped></style>