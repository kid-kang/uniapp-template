# uni-v3-basic
uniapp + vue3 + vite 搭建项目的基础架构

#### 步骤过程记录（HbuilderX开发）

- 使用HbuilderX创建自带uni-ui模板的vue3项目（创建完成后发现有个.vite文件夹，所以猜想这个项目是vite构建的；一般情况下，不建议删除 .vite 文件夹下的空文件，因为它们是 Vite 构建工具生成的临时文件，如果误删可能会影响项目的构建和运行。）
- HbuilderX自带scss，若没下载运行后会自动下载scss插件
- HbuilderX自带状态管理（VueX, Pinia）,只需按要求引入即可。[详情](https://uniapp.dcloud.net.cn/tutorial/vue3-pinia.html#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86-pinia)
- 答疑：
  - uni_modules和node_modules的区别：
    - uni_modules用于存放与 uni-app 框架集成的组件库和插件；
    - node_modules是 npm 包管理器的默认安装目录，用于存放 npm 包及其依赖的模块。
  - uni_modules能和node_modules一样通过类似npm i指令下载依赖吗
    - 不能
  - App.vue中自带 /*每个页面公共css */ @import '@/uni_modules/uni-scss/index.scss';
    - 如果不需要用uni-ui写的辅助样式，建议删除。[详情](https://uniapp.dcloud.net.cn/component/uniui/uni-sass.html#%E4%BD%BF%E7%94%A8scss%E5%8F%98%E9%87%8F)
  - main.js中 `#ifndef VUE3` 和 `#endif` 之间的代码是用于 Vue 2.x 版本的，而 `#ifdef VUE3` 和 `#endif` 之间的代码则是用于 Vue 3.x 版本的。
- npm init -y、npn i dayjs
- 写request.js、store、公共样式、utils中的工具函数
- 本来还想把封装的request挂到全局变量上去，发现vue3 写法更繁琐，还不如直接引用request文件
- 配置pages.json文件，配置tabbar和分包
- 遇到的问题：
  - const store = useStore()不能放在export的函数外面
    - 这是因为 Vue 3 使用了基于 Proxy 的响应式系统，它的实现方式与 Vue 2 不同。在 Vue 2 中，Vue 使用了 Object.defineProperty 来劫持对象的属性，并在内部维护了一个依赖图来追踪属性之间的依赖关系。因此，在 Vue 2 中，你可以在组件外部使用 createStore 函数来创建一个 store 实例。
    - 但是在 Vue 3 中，由于基于 Proxy 的响应式系统的实现方式不同，Vue 需要在组件函数执行时才能创建实例化组件的上下文。这就意味着，如果你想在 JavaScript 文件中使用 useStore 函数获取一个 store 实例，你需要将其放在组件函数内部定义，以确保 Vue 能够正确地创建实例化组件的上下文。
  - 自定义导航栏发现背景色和手机状态栏时间颜色撞色了
    - 设置navigationBarTextStyle：导航栏标题颜色及状态栏前景颜色为black

