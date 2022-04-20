<template>

    <div class="k-1dg3ze">
        <div class="k-1dg3ze-imageList">
            <div class="k-1dg3ze-imageBox" v-for="(item,index) of classifylist" @click="tolist(index)" :key="item.id">
                <img :src="item.path" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import classifylist from '@/common/config';
import { useRouter } from 'vue-router';
let Router = useRouter()
const tolist = (index: any)=>{
    Router.push(`/articlelist?index=${index}`)
}
</script>
<style lang="scss" scoped>
.k-1dg3ze {
    padding: 30px 80px;
    .k-1dg3ze-imageList {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .k-1dg3ze-imageBox{
            cursor: pointer;
        }
        @media screen and (max-width: 750px) {
            .k-1dg3ze-imageBox {
                width: 100%;
                height: 650px;
                margin: 15px 0;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
        @media screen and (max-width: 1200px) and (min-width:750px) {
            .k-1dg3ze-imageBox {
                width: 48%;
                height: 300px;
                margin: 15px 0;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
        @media screen and (min-width: 1200px) {
            .k-1dg3ze-imageBox {
                width: 32%;
                height: 200px;
                margin: 15px 0;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }
}
</style>
<!-- <template>
    <div class="container-item">
        <span class="span-label"></span>
        <div class="item-info">
            <div class="img-left">
                <img src="https://t7.baidu.com/it/u=3655946603,4193416998&fm=193&f=GIF" alt="pic">
            </div>
            <div class="resume-right">
                <h3 class="resume-title" @click="goToInfo">vue的mixins模块使用，提高组件函数和数据的复用 vue的mixins模块使用，提高组件函数和数据的复用</h3>
                <div class="resume-detail">mixins:被执行的顺序：优先执行引用它的页面同名方法，然后在执行引用页面的方法</div>
            </div>
        </div>
        <div class="node-list-btn">
            <span>作者:羽蒙Y</span>
            <span>时间:2021-10-20</span>
            <vxe-button icon="fa fa-eye" status="success" @click="goToInfo">阅读全文</vxe-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter()
const goToInfo = ()=>{
    router.push({
        name:'articlesDetails'
    }
        
    )
}
</script>
<style lang="scss" scoped>
    .container-item{
        background-color: #fff;
        padding: 15px 15px 8px 15px;
        margin: 0 0 10px;
        border-radius: 4px;
        position: relative;
        .span-label{
            display: block;
            width: 7px;
            height: 40px;
            position: absolute;
            left: 0px;
            top: 15px;
            background-color: #017E66;
        }
        .item-info{
            // min-height: 170px;
            display: flex;
            .img-left{
                flex: 0 0 150px;
                width: 150px;
                height: 94px;
                border-radius: 4px;
                margin: 1px 20px 0 0;
                overflow: hidden;
                @include globalTransition();
                &:hover{
                    height: 105px;
                }
                img{
                    width: 100%;
                    height: 100%;
                    @include globalTransition();
                    &:hover{
                        transform: scale(2);
                    }
                }
            }
            .resume-right{
                line-height: 1;
                // 文章标题省略号
                .resume-title{
                    line-height: 20px;
                    padding: 0px !important;
                    margin: 0 0 5px 0;
                    @include muit-ellipsis(2);
                    @include common-title(left);
                    overflow: hidden;
                    &:hover{
                        // color: $text-color-main;
                        cursor: pointer;
                    }
                }
                .resume-detail{
                    @include muit-ellipsis(3)
                }
            }
        }
        .node-list-btn{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex-wrap: wrap;
            span{
                padding: 0 10px;
                font-size: 14px;
            }
        }
    }
</style> -->