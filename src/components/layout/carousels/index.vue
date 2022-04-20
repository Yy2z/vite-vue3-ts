<template>
    <el-carousel indicator-position="outside" class="carousels-box">
        <el-carousel-item v-for="item in carousels" :key="item">
            <img :src="item" :alt="item" class="set-el-img">
        </el-carousel-item>
    </el-carousel>
</template>
<script lang='ts' setup>
    import {ref, reactive} from 'vue';
    // 定义跑马灯效果图
    const carousels = reactive([
        // './src/assets/IMG_7335-1.jpg',
        'https://yumeng-1304208569.cos.ap-chengdu.myqcloud.com/image/IMG_7513-1.jpg',
        'https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF',
        'https://t7.baidu.com/it/u=3655946603,4193416998&fm=193&f=GIF'
    ])
</script>
<style lang="scss" scoped>
    .carousels-box{
         position：relative
      
        
        .set-el-img{
            width: 100%;
            height: 100%;
            
        }
    }
</style>