/*
 * @Author: zerotower69 zerotower@163.com
 * @Date: 2023-03-14 21:48:11
 * @LastEditors: zerotower69 zerotower@163.com
 * @LastEditTime: 2023-03-14 21:59:42
 * @FilePath: /loading-with-progress/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEPlus
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import ElementPlus from "element-plus";

import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).mount('#app')
