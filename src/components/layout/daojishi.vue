<template>
<section>
    <video  id="v1" src="https://yumeng-1304208569.cos.ap-chengdu.myqcloud.com/video/pexels-rostislav-uzunov-7385122.mp4" muted autoplay loop>
    </video>
    
    <div class="neon">YU MENG Y BLOG</div>
</section>

<section>
    <div class="content">
        <h2>这是一个清晨</h2>
        <p>
            zaiadkuhaksdbakjsdbaksjdaksjhdkajsak]
        </p>
       
    </div>
</section>

</template>
<script lang="ts" setup>

    // var video= document.getElementById('v1');
    //         video!.PlaybackRate = 1.5;
            
</script>

<style lang="scss"  scoped>

.neon {
  color: #cce8f8;
  font-size: 9.5rem;
  font-family: 'Pacifico', cursive;
  text-transform: uppercase;
  animation: shining 0.2s alternate infinite;
  margin-top: 10px;
  position:absolute;
  z-index:999999;
}
@keyframes shining {
  from {
    text-shadow: 0 0 10px rgba(182, 211, 207, 0.9),
      0 0 30px rgba(182, 211, 207, 0.3), 0 0 12px rgba(15, 115, 223, 0.5),
      0 0 21px rgba(15, 115, 223, 0.9), 0 0 34px rgba(15, 115, 223, 0.8),
      0 0 54px rgba(15, 115, 223, 0.9);
  }
  to {
    text-shadow: 0 0 6px rgba(182, 211, 207, 1),
      0 0 30px rgba(182, 211, 207, 0.4), 0 0 12px rgba(15, 115, 223, 0.6),
      0 0 22px rgba(15, 115, 223, 0.8), 0 0 38px rgba(15, 115, 223, 0.9),
      0 0 60px rgba(15, 115, 223, 1);
  }
}

section{
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 100px;
}

section video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
}
</style>