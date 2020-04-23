<template>
  <div class="commentBox" v-if="cisShow">
      <h3>发表评论</h3>
      <textarea class="textareaclass" name=""  :placeholder="[types?'你回复'+name:'请填写评论内容']" v-model="commentText"></textarea>
      <button class="btn" @click="addComment">发表</button>
      <button class="btn" @click="canelComment">取消</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      commentText:''
    }
  },
  props:{
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
    
    addComment:function(){
      let _this = this;
      
      this.$emit('submit',_this.commentText,!_this.cisShow);
      this.commentText = "";
    },
    canelComment:function(){
      let _this = this;
      this.$emit("canel",!_this.cisShow);
      this.commentText = "";
    }
  }
}
</script>

<style>
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
</style>