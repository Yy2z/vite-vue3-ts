import { createApp } from 'vue';
import App from './App.vue';
import { store, key } from './store';
import router from './router';//注入路由
//注入ui组件库
import ElementPlus, { ElNotification } from 'element-plus';
import 'element-plus/dist/index.css';
// import 'amfe-flexible/index.js'
// import VueMarkdownEditor from '@kangc/v-md-editor';
// import '@kangc/v-md-editor/lib/style/base-editor.css';
// import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
// import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// import Prism from 'prismjs';
// import $ from 'jquery';
// import  mavonEditor from "mavon-editor";
// import "mavon-editor/dist/css/index.css";
//import marked from 'marked';


// // highlightjs
// import hljs from 'highlight.js';
//import '@/assets/font-awesome/css/font-awesome.css';

 

import * as ElIcons from '@element-plus/icons';

import { start,close} from "@/script/utils/nprogress";
//import { Script } from 'vm';


// VueMarkdownEditor.use(vuepressTheme, {
//     Prism,
//   });

const app = createApp(App);

Object.keys(ElIcons).forEach(key => {
    app.component(key,ElIcons[key]);
    
});
app.use(ElementPlus);
app.use(store,key);
app.use(router);
app.mount('#app');
//app.use(marked)


//设置路由导航
router.beforeEach((to,from,next)=>{
    start();

    if(to.meta.title){
        document.title = String (to.meta.title)
    }else document.title = '羽蒙Y'


    //路由出错处理
    if(to.matched.length===0&&!to.name){
        ElNotification({
            title:'错误提示',
            message: `【${to.fullPath}】路径找不到对应页面默认切换到首页...`,
            type: 'error',
            duration:3000
        })
        router.push('/home')
    }


    next()
})

//路由加载结束后执行
router.afterEach(()=>{
    close()
})