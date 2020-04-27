<template>
 <div>
    <nav-g class="zIndex"></nav-g>
    <div class="tab">
      <h3>我的问答</h3>
    </div>
    <Comment class="answerComment"></Comment>
    
 </div>
</template>

<script>
import Comment from './Children/Comment'
import navG from '@/components/front/navG'
export default {
  data() {
    return {
      datas: [
        {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          
        },
        {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          
        },
      ],
      isShow:true
    };
  },
    methods: {
     
  },
  components:{
    Comment,
    navG
  }
}
</script>

<style scoped>
.tab{
  width: 100%;;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height:44px;
  line-height:44px;
  background-color:rgb(92, 128, 202);
}
.tab h3{
  text-align: center;
  color: #fff;
}
.answerComment{
  margin-top: 44px;
}
.zIndex{
  z-index: 999;
}
</style>