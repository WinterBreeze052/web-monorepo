<script setup lang="ts">
// import ZhihuHot from './components/ZhihuHot.vue'
</script>

<template>
  <h1>Hello Vue!</h1>
  <p>软件2341-49-韩洪宇</p>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <div class="nav">
    <RouterLink to="/" class="nav-link">
      主页
    </RouterLink>
    <RouterLink to="/zhihuhot" class="nav-link">
      知乎热榜
    </RouterLink>
    <RouterLink to="/dingzhen" class="nav-link">
      以赝顶真
    </RouterLink>
    <RouterLink to="/apifox" class="nav-link">
      Apifox-Pet
    </RouterLink>
    <RouterLink to="/i18n" class="nav-link">
      I18n
    </RouterLink>
    <RouterLink to="/thecountern" class="nav-link">
      计数器
    </RouterLink>
    <RouterLink to="/unocssthemeswitcher" class="nav-link">
      Unocss主题
    </RouterLink>
    <RouterLink to="/messagebox" class="nav-link">
      MessageBox
    </RouterLink>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: center; /* 水平居中 */
  gap: 1rem; /* 按钮之间的间距 */
}

.nav-link {
  padding: 10px 15px; /* 内边距 */
  background-color: #007bff; /* 背景颜色 */
  color: white; /* 字体颜色 */
  text-decoration: none; /* 去掉下划线 */
  border-radius: 5px; /* 圆角 */
  transition: background-color 0.3s; /* 背景颜色变化动画 */
}

.nav-link:hover {
  background-color: #0056b3; /* 悬停时的背景颜色 */
}
</style>