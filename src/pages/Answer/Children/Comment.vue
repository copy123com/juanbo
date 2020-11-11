<template>
   <div>
     <a-comment>
      <template slot="actions">
        <span key="comment-basic-like">
          <a-tooltip title="+1">
            <a-icon type="like" :theme="action === 'liked' ? 'filled' : 'outlined'" @click="like" />
          </a-tooltip>
          <span style="padding-left: '8px';cursor: 'auto'">
            {{ likes }}
          </span>
        </span>
        <span key="comment-basic-dislike">
          <a-tooltip title="-1">
            <a-icon
              type="dislike"
              :theme="action === 'disliked' ? 'filled' : 'outlined'"
              @click="dislike"
            />
          </a-tooltip>
          <span style="padding-left: '8px';cursor: 'auto'">
            {{ dislikes }}
          </span>
        </span>
        <span key="comment-basic-reply-to" @click="replys">评论</span>
      </template>
      <a slot="author">{{list.nickname}}</a>
      <a-avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="avatar"
        slot="avatar"
      />
      
      <div slot="content" style="padding:10px;box-sizing: border-box;">
       <div>{{list.title}}</div>
       <div><img style=" width: 100%;" :src="list.imgurl1" alt=""></div>
       <div>{{list.content}}</div>
      </div>
      <a-tooltip slot="datetime" :title="moment().format('YYYY-MM-DD HH:mm:ss')">
        <span>{{ moment().startOf('hour').fromNow() }}</span>
      </a-tooltip>
    </a-comment>
    <div class="Box" v-if="isComment!=400" >
       <Reply :num=num :chilList="chilList"></Reply>
    </div>
    <CommentTextarea :id="list.id"  class="textareaBox"  :type="ctype" :name="name" :cisShow="isShow" @submit="csubmit" @canel="ccanel"></CommentTextarea>

   </div>
   
</template>

<script>
import moment from 'moment'
import Reply from './Reply'
import CommentTextarea from './CommentTextarea'
import axios from 'axios'
import store from '../../../store/index'
export default {
  props:{
    list:{
      type:Object,
      default:{}
    }
  },
  data() {
    return {
      likes: 0,
      dislikes: 0,
      action: null,
      moment,
      name:'Han Solo',
      isShow:false,
      ctype:false,
      num:3,
      isComment:'',
      token:'',
      pid:'',
      chilList:[]
    };
  },
  created(){
    this.getList()
  },
  methods: {
    //获取该文章评论
    getList(){
      this.token = localStorage.getItem('token');
      axios.defaults.headers.common['token'] = this.token;
      axios.get(`https://test.zhihao1.cn/api/reply/getfind?pid=${this.list.id}`).then((res,req)=>{
        
        this.isComment = res.data.code;
        //把获取的数组排序
        let PidData = res.data.data.sort();
        console.log(PidData);
        //把数组反转，让新添加的数据显示在最上面
        this.chilList = PidData.reverse();
        console.log(this.chilList);
      })
    },
    //回答的好likes加1
    like() {
      this.likes = 1;
      this.dislikes = 0;
      this.action = 'liked';
    },
    //回答不好likes加1
    dislike() {
      this.likes = 0;
      this.dislikes = 1;
      this.action = 'disliked';
    },
    //点击回复并让issShow为true，使子组件显示
    replys(){
      this.isShow = !this.isShow;
      this.ctype = !this.ctype;
      console.log(this.isShow+'1')
    },
    //子组件点击提交返回来的数据
    csubmit(res,rep){
      this.isShow = rep;
      this.pid = res.get('pid');
      let data = {};
      data.context =  res.get('context');
      data.imgurl1 =  res.get('img');
      data.nickname = localStorage.getItem('nickName');
      console.log(data.nickname);
      this.chilList.push(data);
      this.getList();
    },
     //子组件点击取消返回来的数据
    ccanel(rep){
      this.isShow = rep
    },
    
    //向后台获取数据
    
  },
  components:{
    Reply,
    CommentTextarea
  }
}
</script>

<style scoped>
.Box{
  padding: 0 15px;
}
.textareaBox{
  margin-bottom: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
}
</style>