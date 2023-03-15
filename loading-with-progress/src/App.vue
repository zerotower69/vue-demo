<!--
 * @Author: zerotower69 zerotower@163.com
 * @Date: 2023-03-14 21:48:11
 * @LastEditors: zerotower69 zerotower@163.com
 * @LastEditTime: 2023-03-14 23:05:11
 * @FilePath: /loading-with-progress/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import createLoading from "./components/Loading"
import { onMounted } from "vue";

onMounted(() => {
  const loading = createLoading(function (setStatus, remove) {
    setTimeout(() => {
      setStatus(false)
      // setTimeout(() => { 
      //   remove()
      // },3000)
        },4000)
   });
})
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
