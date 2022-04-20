//import Markdown from "@/components/markdown/markdown.md"
import { defineComponent } from 'vue'
import  vue01   from '@/components/markdown/markdown.md'
import  vue02   from '@/components/markdown/test.md'
export default defineComponent([
    {
        title: 'vue3.0+vite实现移动端自适应布局',
        article: vue01,
        summary: 'vue3.0+vite实现移动端自适应布局,安装postcss-pxtorem',
        author: 'zhangdisheng',
        time: '2022/3/11'
    },
    {
        title: '从0搭建一个vite+vue3项目',
        article: vue02,
        summary: '## 初始化vite使用npm:npm init vite@latest  * 使用Yarn: yarn create vite* 使用 PNPM:  pnpm create vite',
        author: 'zhangdisheng',
        time: '2022/3/11'
    }

])