import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { loadEnv } from 'vite';//加载进入全局变量
import path from 'path';//导入项目的目录
import markdown from 'vite-plugin-md';
import Inspect from 'vite-plugin-inspect';
import Pages from 'vite-plugin-pages'
const markdownRenderer = require('markdown-it')();
import markdownPrism from 'markdown-it-prism'// 引入markdwon代码块处理
const mdConfig = require('./src/common/config/md.config');
const mdPlugin = require('vite-plugin-markdown');
// markdown文件高亮样式
import hljs from 'highlight.js';
export default ({ command, mode, }) =>{
  return defineConfig({
   
    plugins: [
      
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      // mdPlugin.plugin({
      //   mode: ['html']
      // }),
      markdown({
        markdownItOptions: {
            html: true,
            linkify: true,
            typographer: true,
            xhtmlOut: true,
            highlight: (str: any, lang: any) => {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return '<pre class="hljs"><code>' +
                            hljs.highlight(lang, str, true).value +
                            '</code></pre>';
                    } catch (__) {
                    }
                }
                return '<pre class="hljs"><code>' + markdownRenderer.utils.escapeHtml(str) + '</code></pre>';
            }
        },
        markdownItSetup(md) {
            mdConfig(md);
            // md.use(require('markdown-it-anchor'))
            // md.use(require('markdown-it-prism'))
        },
        wrapperClasses: 'markdown-container',
    }),
    Pages({
        pagesDir: 'pages',
        extensions: ['vue', 'md'],
    }),
    Inspect(),
    ],
    
    //服务器配置
    server:{
      host: '127.0.0.1',
      port:Number(loadEnv(mode,process.cwd()).VITE_APP_PORT),
      strictPort: true,//端口被占用直接退出
      https:false,//默认用http方式
      open:true,
      proxy:{
        '/api':{
          target: loadEnv(mode,process.cwd()).VITE_APP_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/,'')
        },
      },
  
    hmr:{
      overlay:true
    }
    },
    resolve:{
      alias:{
        '@':path.resolve(__dirname,'./src')
      }
    },
    css:{
      preprocessorOptions:{
        scss:{
          additionalData:'@import "@/assets/styles/global.scss";'

        }
      }
    },
    
    build:{
      chunkSizeWarningLimit: 1500,
      rollupOptions:{
        output:{
          manualChunks(id){
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      }
    }
  }) 
}