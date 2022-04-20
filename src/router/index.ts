import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LayOut from "@/components/layout/index.vue";

const routes : Array<RouteRecordRaw>=[
    {
        path: '/',
        component: LayOut,
        redirect: '/home',
        hidden:false,
        children:[
            {
                path: '/home',
                name: 'home',
                hidden:false,
                component: ()=>import("@/pages/home/index.vue"),
                meta:{
                    title: '首页',
                    icon: '',
                    index:'1'
                }
            },
            {
                path: '/photo',
                name: 'photo',
                hidden: false,
                component: ()=>import("@/pages/photo/index.vue"),
                meta:{
                    title: '照片',
                    icon: '',
                    index:'2'
                }
            },

            {
                path: '/articles',
                name: 'articles',
                component: ()=>import("@/pages/articles/index.vue"),
                meta:{
                    title: '文章',
                    icon: '',
                    index:'3'
                }
            },
           

            {
                path: '/about',
                name: 'about',
                component: ()=>import("@/pages/about/index.vue"),
                meta:{
                    title: '关于',
                    icon: '',
                    index:'4'
                }
            },
        ]
    },
    {
                    name:'/article/articlelist',
                    path: '/articlelist',
                    component: () => import('@/pages/articles/articlelist.vue'),
                },
                {
                    name:'/article/Details',
                    path: '/articlelist',
                    component: () => import('@/pages/articles/Details.vue'),
                },
    // {
    //     path: "/article/details",
    //     name: "articlesDetails",
    //     component: LayOut,
    //     redirect: "/article/Details",
    //     meta:{
    //         title: '文章',
    //         index: ''
    //     },
    //     children:[
    //         {
    //             path: "/article/Details",
    //             name: "article-info",
    //             hidden: false,
    //             meta:{
    //                 title: '文章详情',
    //                 index: '1'
    //             },
    //             component:()=> import("@/pages/articles/Details.vue")
    //         },
    //         {
    //             name:'/article/articlelist',
    //             path: '/articlelist',
    //             component: () => import('@/pages/articles/articlelist.vue'),
    //         },
        
    //     ]    
    // }
           
        
    
    
    // {
    //     path: '/articles/details',
    //     name: 'articlesDetails',
    //     hidden: false,
    //     component: ()=>import("@/pages/articles/Details.vue"),
    //     // meta:{
    //     //     title: '章',
    //     //     icon: '',
    //     //     index:'4'
    //     // }
    // },
]


const router = createRouter({
    history: createWebHashHistory(),
    
    routes
})

export default router;