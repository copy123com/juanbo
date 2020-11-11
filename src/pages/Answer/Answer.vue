<template>
 <div>
    <nav-g class="zIndex"></nav-g>
    <div class="tab">
      <h3>我的问答</h3>
    </div>
    <div v-for="(item,index) in listData" :key="index">
      <Comment class="answerComment" :list="item"></Comment>
    </div>
    
    
 </div>
</template>

<script>
import Comment from './Children/Comment'
import navG from '@/components/front/navG'
import axios from 'axios'
export default {
  data() {
    return {
      isShow:true,
      listData:{}
    };
  },
  created(){
    this.getData()
  },
  methods: {
    async getData(){
    let datas= await axios.get('https://test.zhihao1.cn/api/content/getall');
    let Data = datas.data.data;
    this.listData = Data.reverse();
   console.dir(this.listData)
  }
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