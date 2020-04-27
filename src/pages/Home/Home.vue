<!-- 首页 -->
<template>
   <div class="homeBox">
      <ul>
         <li>
            <router-link to="/list" class="divs">
               <p>文</p>
               <span>待定</span>
            </router-link>  
            <router-link to="/list" class="divs">
               <p>Aa</p>
               <span>英语作文</span>
            </router-link>   
             
         </li>
         <li class="biglogo">
            <router-link to="/putquestionsto" class="routers">
               <p>
                  <img src="../../assets/img/photograph.jpg" alt="">
               </p>
               <span>发布问题</span>
            </router-link>
         </li>
         <li>
            <router-link to="/calculator" class="divs">
               <i class="fa fa-calculator" aria-hidden="true"></i>
               <span>计算器</span>
             </router-link>   
            <router-link to="/list" class="divs">
               <i class="fa fa-book" aria-hidden="true"></i>
               <span>古诗文</span>
             </router-link>   
         </li>
         
      </ul>
   </div>
</template>

<script>

export default {
    data () {
       return {
        
       };
    },

    components: {
      
    },
    methods: {
       
    },
   
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">

.homeBox{
   width 100%
   height 100%
   position fixed
   background-image linear-gradient(to bottom,#5e82cb,#3466c0)
   padding-top 8rem
   
   ul{
      display flex
      flex-direction column
   }
   li{
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    .divs{
      display flex
      flex 1
      flex-direction column
      justify-content center
      align-items center
      span{
         margin-top .4rem
         font-size 14px;
         color #000
       } 
       i{
         width 3.466667rem
         height 3.466667rem
         line-height 3.466667rem
         text-align center
         font-size 38px
         background-color #fff
         border-radius 50%
         }
      p{
         width 3.466667rem
         height 3.466667rem
         line-height 3.466667rem
         text-align center
         color #3a5e9c
         border-radius 50%
         border 1px solid #FFF
         background-color #fff
       }  
     }
   }
   .biglogo{
      display flex
      flex-direction column
      .routers{
         p{
            width 7.466667rem
            height 7.466667rem
            background-color #8497b0
            border-radius 50%
            line-height 7.466667rem
            display flex
            justify-content center
            align-items center
            border 2px solid #fff
           
         }
         span{
            display block
            color #000
            text-align center
         }
      }
   }
}

</style>