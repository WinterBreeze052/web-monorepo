<script lang="ts" setup>
import type { MessageBoxProps } from './index.ts'

const {
  closeable = true,
  showCancle = true,
  showConfirm = true,
  showIcon = true,
} = defineProps<MessageBoxProps>()

const emit = defineEmits(['cancel', 'confirm'])

function handleCancle() {
  emit('cancel')
}

function handleConfirm() {
  emit('confirm')
}
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex justify-center items-center bg-[#3e36487a]"
  >
    <div class="relative w-full max-w-md mx-4 bg-white rounded-xl shadow-lg p-6">
      <!-- 关闭按钮 -->
      <div v-if="closeable" class="absolute top-4 right-4 text-2xl cursor-pointer" @click="handleCancle">
        ×
      </div>

      <!-- 弹窗内容 -->
      <div class="flex items-start gap-3 text-lg">
        <!-- 图标 -->
        <div v-if="showIcon" class="flex-shrink-0 text-2xl text-primary mb-3">
          <!-- 这里可以替换为一个图标组件 -->
          <i class="fas fa-info-circle"></i>
        </div>

        <div class="flex-1">
          <p v-if="title" class="font-semibold text-xl text-gray-800">
            {{ title }}
          </p>
          <div class="mt-2 text-gray-600 break-words">
            {{ content }}
          </div>
        </div>
      </div>

      <!-- 操作按钮 -->
      <div class="mt-6 flex justify-center gap-8">
        <button
          v-if="showCancle"
          class="px-6 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          @click="handleCancle"
        >
          取消
        </button>
        <button
          v-if="showConfirm"
          class="px-6 py-2 rounded-md bg-primary text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark"
          @click="handleConfirm"
        >
          确定
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-primary {
  background-color: #3498db; /* 主要颜色 */
}

.bg-primary-dark {
  background-color: #2980b9; /* 按钮悬停时的深色 */
}

.text-primary {
  color: #3498db; /* 主要颜色的文字 */
}
</style>
