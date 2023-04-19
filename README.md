# uni-v3-basic
uniapp + vue3 + vite 搭建项目的基础架构

#### 步骤过程记录（HbuilderX开发）

- 使用HbuilderX创建自带uni-ui模板的vue3项目（创建完成后发现有个.vite文件夹，所以猜想这个项目是vite构建的；一般情况下，不建议删除 .vite 文件夹下的空文件，因为它们是 Vite 构建工具生成的临时文件，如果误删可能会影响项目的构建和运行。）
- HbuilderX自带scss，若没下载运行后会自动下载scss插件
- 答疑：
  - uni_modules和node_modules的区别：
    - uni_modules用于存放与 uni-app 框架集成的组件库和插件；
    - node_modules是 npm 包管理器的默认安装目录，用于存放 npm 包及其依赖的模块。
  - uni_modules能和node_modules一样通过类似npm i指令下载依赖吗
    - 不能
  - App.vue中自带 /*每个页面公共css */ @import '@/uni_modules/uni-scss/index.scss';
    - 如果不需要用uni-ui写的辅助样式，建议删除。[详情](https://uniapp.dcloud.net.cn/component/uniui/uni-sass.html#%E4%BD%BF%E7%94%A8scss%E5%8F%98%E9%87%8F)
- npm init -y
- npm i pinia

