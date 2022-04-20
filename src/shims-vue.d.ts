
declare module "codemirror";
declare module "hljs";

declare var VueMarkdownEditor 
declare module 'prismjs';
declare module 'showdown';
declare module 'vue-markdown';
declare module 'marked';
declare module 'markdown';
declare module "*.md" {
    import Vue from 'vue'
    export default Vue
}
declare module "*.config.ts" {
    import Vue from 'vue'
    export default Vue
}
