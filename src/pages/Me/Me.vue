<!-- 我 -->
<template>
   <div>
      <header class="h-box">
         <img src="./../../assets/logo.png" alt="">
         <a href="/login">
            <span>登录</span>
         </a>
      </header>

      <div class="content-box">
         <h1>我的</h1>
            <ul class="content-list">
               <li class="content-item">
                  <a href="#">
                     <img src="./../../assets/logo.png" alt="">
                     <span>学习周报</span>
                  </a>
               </li>
               <li class="content-item">
                  <a href="#">
                     <img src="./../../assets/logo.png" alt="">
                     <span>作业互助</span>
                  </a>
               </li>
               <li class="content-item">
                  <a href="#">
                     <img src="./../../assets/logo.png" alt="">
                     <span>单词听写</span>
                  </a>
               </li>
               <li class="content-item">
                  <a href="#">
                     <img src="./../../assets/logo.png" alt="">
                     <span>我的图书</span>
                  </a>
               </li>
            </ul>

            <ul class="nav-box">
               <li class="nav-item">
                  <a href="#">
                     <img src="./../../assets/logo.png" alt="">
                     <span>设置</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a href="#">
                     <img src="./../../assets/logo.png" alt="">
                     <span>消息中心</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a href="#">
                     <img src="./../../assets/logo.png" alt="">
                     <span>更换主题</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a href="#">
                     <img src="./../../assets/logo.png" alt="">
                     <span>帮助与反馈</span>
                  </a>
               </li>

            </ul>
      </div>
      
   </div>
</template>

<script>
export default {
    data () {
       return {
       };
    },

    components: {},

    methods: {}
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
   .h-box
      background-color #569adb
      height 100px
      display flex
      font-size 14px
      align-items center
      padding 0px 20px
      img 
         width 60px
         height 60px
         border-radius 50%
      a
         color #fff
      .content-box
         width 100%
         height 100%
         padding 30px 0px
   .content-box
      background-color #97a9d9
      font-size 14px
      .content-list
         padding 0px 20px
         display flex
         justify-content space-between
         flex-wrap wrap
         .content-item
         a
            display flex
            flex-direction column
            align-items center
            color #000
            width 70px
            img 
               width 50px
               height 50px
               border-radius 50%
               margin-bottom 5px
      h1
         font-weight normal
         font-size 20px
         padding 10px 20px
      .nav-box
         margin-top 200px
         margin-bottom 50px
         padding-bottom 60px
         .nav-item
            background-color #ffffff
            border-bottom 1px solid #999
            a
               display flex
               align-items center
               padding 10px 20px
               color #333
            img 
               width 40px
               height 40px
               border-radius 50%
               margin-right 15px
</style>