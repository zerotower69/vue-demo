<!--
 * @Author: zerotower69 zerotower@163.com
 * @Date: 2023-03-14 21:49:35
 * @LastEditors: zerotower69 zerotower@163.com
 * @LastEditTime: 2023-03-14 23:04:50
 * @FilePath: /loading-with-progress/src/components/Loading/Loading.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="el-overlay"></div>
  <div class="loading-container">
    <el-progress
      type="circle"
      :percentage="Math.floor(configData.percentage)"
      :status="configData.status"
    />
    <div class="status-text" :class="configData.status">
    {{ currentText }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive,ref } from "vue";
const props = defineProps({
    text:String,
    remove: Function,
    init: Function,
    successText: String,
    errorText:String
})
const configData = reactive({
  percentage: 0,
});

let interval = null;

const currentText = ref(props.text);

onMounted(() => {
  interval = setInterval(() => {
    configData.percentage =
      configData.percentage + (100 - configData.percentage || 0) / 100;
  }, 50);
  props.init?.(setStatus,props.remove)
});

function setStatus(status = true) {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }

  configData.percentage = 100;
  if (status) {
      configData.status = "success";
      currentText.value = props.successText;
  } else {
      configData.status = "exception";
      currentText.value = props.errorText;
  }
}
</script>

<style lang="scss" scoped>
.loading-container {
  display: flex;
  position: fixed;
  z-index: 9999;
  top:25vh;
  left:50vw;
  transform: translateX(-50%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.status-text {
    margin-top:22px;
    font-size:14px;
  color: rgba(70, 149, 255, 1);
  &.success {
    color: rgba(115, 209, 61, 1);
  }
  &.exception {
    color: red;
  }
}
.el-progress {
  :deep(.el-progress__text) {
    color: #fff;
  }
  .el-progress--line{
     margin-bottom: 15px;
  width: 350px;
  }
}
</style>
