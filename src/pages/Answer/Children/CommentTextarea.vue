<template>
  <div class="commentBox" v-if="cisShow">
      <h3>发表评论</h3>
      <textarea class="textareaclass" name=""  :placeholder="[types?'你回复'+name:'请填写评论内容']" v-model="commentText">
       
      </textarea>
      <div class="bottomLayout">
        <input class="input" type="file" accept="img/*" >
        <div>
          <button class="btn" @click="addComment">发表</button>
          <button class="btn" @click="canelComment">取消</button>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {

  data(){
    return{
      commentText:'',
    }
  },
  props:{
    id:{
      type:Number
    },
    types:{
      type:Boolean,
      default(){
        return false
      }
    },
    name:{
      type:String,
      default(){
        return true
      }
    },
    cisShow:{
      type:Boolean,
      default(){
        return false
      }
    }
    
  },
  methods:{
    //点击发表评论
    addComment:function(e){
      console.log(this.id);
      let uid = localStorage.getItem('uid');
      
      let formList = new FormData();
      let img = e.path[2].children[0].files[0];
      if(img){
        formList.append('img',img);
      }
      formList.append('context',this.commentText);//评论内容
      formList.append('pid',this.id);//文章id
      formList.append('uid',uid);//用户id

      //添加评论
      axios.post('https://test.zhihao1.cn/api/reply/add',formList).then((res,req)=>{
        console.log(res);
      if(res.status == 200){
        this.$message.success('提交成功',1)
      }else{
          this.$message.error('提交失败')
      }
      
    });
     //把数据返回给父组件
      this.$emit('submit',formList,!this.cisShow);
      this.commentText = "";
    },
    //是否显示评论盒子
    canelComment:function(){
      let _this = this;
      this.$emit("canel",!_this.cisShow);
      this.commentText = "";
    },
    
  }
}
</script>

<style scoped>
.commentBox{
  overflow: hidden;
  position: fixed;
  bottom: 0px;
  width: 100%;
  background-color: #fff;
}
.textareaclass{
  width: 100%;
}
.btn{
  float: right;
  width: 80px;
  padding: 5px 20px;
  border-radius: 15px;
  background-color:rgb(92, 128, 202);
  border: none;
  color: #fff;
  margin: 0 5px;
}
.bottomLayout{
  display: flex;
  justify-content: space-between;
}
.bottomLayout .input{
  width: 50%;
}

</style>