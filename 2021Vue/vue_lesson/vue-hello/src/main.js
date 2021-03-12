import Vue from 'vue'
// 每个组件都是一个模块
// vue 组件都可以默认导入
import App from './App.vue'

Vue.config.productionTip = false
// 关闭 vue 生产模式的提示

new Vue({
  render: h => h(App),
}).$mount('#app')

// 利用 vue 类的实例，将 App 组件的内容展示到页面中的 #app 内 
