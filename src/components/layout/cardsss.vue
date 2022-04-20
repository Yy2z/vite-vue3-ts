<script setup lang="ts" >
  //    import $ = require("jquery");
  // "use strict";

  // $('.book').on('click', function () {
  //   $(this).toggleClass('book--expanded');
  // });
     
 </script>
<template >
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
     <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700i" rel="stylesheet">
<div class="wrapper">
  <div class="book">
  <div class="book__cover">
    <div class="header-image"><div class="overlay"></div></div>
    <div class="title-wrap">
      <h1 class="article-title">Dark House</h1>
    </div>
    <p class="book__cover-exerpt">
       
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae accusamus, numquam nihil dicta illum, atque deserunt quas quasi nulla, fugiat ipsum voluptas vel laudantium autem. Tempora veniam labore error dolores facere, nostrum suscipit modi, necessitatibus nulla sequi, neque quidem vero.
<br/><br/>
      <span class="social">
       <a class="fa fa-github" href="https://github.com/yujunyan1216"></a>
       <!-- <i class="fa fa-weixin"></i> -->
       <a class="fa fa-weibo" href="https://weibo.com/u/6819590593"></a>
       <!-- <a class="fa fa-xueqiu" href="https://xueqiu.com/u/1180701711">1</a> -->
      </span>
  
    </p>
    
  
  </div>
    <div class="book__content">
      <p><span class="drop-cap">O</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias est incidunt odit ea adipisci animi nihil voluptates iure beatae explicabo asperiores enim ex placeat itaque minus error temporibus voluptate corporis suscipit commodi voluptatibus praesentium molestiae, perspiciatis nulla. Accusantium harum nisi maiores, velit perferendis, nesciunt ad, porro sequi aliquid maxime molestias!</p>
      <p>	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nobis fuga delectus tempore. Odio ipsa voluptate ex nobis ratione consequatur dignissimos dolorum culpa, ipsam sit dolorem itaque excepturi, natus sed deleniti incidunt ipsum asperiores! Molestiae cumque quam nulla, nam inventore. Necessitatibus blanditiis cumque laboriosam, id, ad unde quo ipsum nulla.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum accusantium velit expedita, minima sapiente unde magnam dicta. Consequuntur cumque numquam sed deserunt, quidem officia illo blanditiis ipsum, commodi distinctio quam molestias dolore, doloremque corporis? Rem ad recusandae delectus accusamus, harum quisquam perferendis dolor aut consectetur nesciunt atque laborum ab dolores.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, neque, magnam. Impedit deleniti ad alias, unde vero quis mollitia, tenetur minima porro, officia iusto quae harum labore nostrum aliquid aut maxime, architecto in reprehenderit. Doloribus pariatur quam fuga sed modi veniam, vel corporis magnam quis eius cumque voluptate, dolore repellendus labore nobis, voluptatibus dicta sapiente doloremque! Enim dicta totam debitis cumque similique, natus, consequatur quidem cum incidunt, sint quos. Ea.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident voluptatum possimus dolores nesciunt natus quaerat quas quo quam obcaecati ducimus totam quia sint, et nobis nisi tenetur id aspernatur quibusdam molestiae reprehenderit sed incidunt. Voluptas error necessitatibus sed inventore, quasi facilis, est. Asperiores atque laboriosam inventore quis eos nulla. Fuga neque odit maiores facilis voluptas nemo numquam, eos amet molestias.</p>
    </div>
    
  </div>
 
</div>
   

</template>

 <style lang="scss" scoped> 
 *{
  margin: 0;
  padding: 0;
 
}
// body {
//   background-image: url(https://yumeng-1304208569.cos.ap-chengdu.myqcloud.com/background/pixel.gif);
//   font-family: 'Roboto Condensed', sans-serif;
//   overflow: hidden; 
//   z-index: 999;   
// }
.mr2 {
  margin-right: 1rem;
}
.ml2 {
  margin-left: 1rem;
}
.article-title {
  font-size: 2.5rem;
  line-height: 1;
 font-family: 'Roboto Condensed', sans-serif;
  text-align: center;
  letter-spacing: 0.025em;
  transition: font-size 0.45s ease-in-out, color 0.3s ease-out;
}
.header-image {
  height: 70px;
  //background-image: url(https://yumeng-1304208569.cos.ap-chengdu.myqcloud.com/background/pixel.gif);
  background-size: cover;
  background-position: center;
  margin-bottom: 3rem;
  position: relative;
  transition: all 0.45s ease-in-out;
  border-style:none;
    // background: rgba(255, 255, 255, 0.2);
    //-webkit-backdrop-filter: blur(8px);
    //backdrop-filter: blur(8px);
    //  border-radius: 25px;  //使边缘成为弧形
    // box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
    // padding: 0 0px 0 1px;
}
.overlay {
  transition: all 0.3s ease-in-out;
//   background: ;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.title-wrap {
  transform: translateY(0);
  transition: transform 0.45s ease-in;
}
.drop-cap {
  font-size: 55px;
  line-height: 28px;
}
.wrapper {
  background-image: url(https://yumeng-1304208569.cos.ap-chengdu.myqcloud.com/background/pixel.gif);
  background-size:cover ;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  
}
.book__cover-exerpt {
  color: #06141d;
  padding: 1rem 1.5rem;
  line-height: 2.0;
  text-align: center;
  opacity: 1;
  max-width: 370px;
  margin: 0 auto;
  display: block;
  transition: all 0.25s ease-in-out;
}
 
.book__cover {
  height: 100%;
  width: 100%;
}
.book__content {
  text-align: justify;
  word-wrap: break-word;
  font-size: 1.1rem;
  opacity: 0;
  transition: all 1.5s ease-in-out;
  max-width: 700px;
  margin: 0 auto 6rem;
  padding: 0 2rem;
}
.book__content p {
  line-height: 1.8;
  color: #3a3a3a;
  margin-bottom: 2.5rem;
}
.book {
  overflow: hidden;
  background: white;
  height: 400px;
  width: 350px;
  box-shadow: 0 15px 30px -10px #ccc;
  transition: all 0.5s ease-in-out;
  border-style:none;
    background: rgba(255, 255, 255, 0.3);
    -webkit-backdrop-filter: blur(6px);//毛玻璃
    backdrop-filter: blur(6px);
    border-radius: 25px;  //使边缘成为弧形
    //box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
     padding: 0 0px 0 1px;
}
.social{
  height: 100px;
  width: 10px;
  

}
.book:hover {
  box-shadow: 0 6px 50px 10px #cfcfcf;
}
.book--expanded {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}
.book--expanded .overlay {
  opacity: 0.95;
}
.book--expanded .article-title {
  color: white;
  font-size: 64px;
  letter-spacing: 0.05em;
}
.book--expanded .title-wrap {
  transform: translateY(-300px);
  color: white;
}
.book--expanded .book__cover-exerpt {
  opacity: 0;
}
.book--expanded .book__cover {
  height: 460px;
  margin-bottom: 6rem;
}
.book--expanded .book__content {
  opacity: 1;
}
.book--expanded .header-image {
  height: 100%;
}
span{
   margin: auto;
}
span .fa {
   font-size: 30px;
   margin-right: 30px;
   text-decoration:none;
  color: rgb(37, 37, 37);
  //align-items: center;
  //justify-content: center;
   //text-align: center;
}</style>