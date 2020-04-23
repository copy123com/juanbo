<template>
   <div>
     <a-comment>
      <template slot="actions">
        <span key="comment-basic-like">
          <a-tooltip title="Like">
            <a-icon type="like" :theme="action === 'liked' ? 'filled' : 'outlined'" @click="like" />
          </a-tooltip>
          <span style="padding-left: '8px';cursor: 'auto'">
            {{ likes }}
          </span>
        </span>
        <span key="comment-basic-dislike">
          <a-tooltip title="Dislike">
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
      <a slot="author">{{name}}</a>
      <a-avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
        slot="avatar"
      />
      <p slot="content">
        We supply a series of design principles, practical patterns and high quality design resources
        (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
      <a-tooltip slot="datetime" :title="moment().format('YYYY-MM-DD HH:mm:ss')">
        <span>{{ moment().startOf('hour').fromNow() }}</span>
      </a-tooltip>
    </a-comment>
    <Reply></Reply>
    <CommentTextarea class="textareaBox" :type="ctype" :name="name" :cisShow="isShow" @submit="csubmit" @canel="ccanel"></CommentTextarea>
   </div>
</template>

<script>
import moment from 'moment'
import Reply from './Reply'
import CommentTextarea from './CommentTextarea'
export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
      action: null,
      moment,
      name:'Han Solo',
      isShow:false,
      ctype:false
    };
  },
  methods: {
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
      console.log('回来'+rep)
    },
     //子组件点击取消返回来的数据
    ccanel(rep){
      this.isShow = rep
    }
  },
  components:{
    Reply,
    CommentTextarea
  }
}
</script>

<style>
.textareaBox{
  margin-bottom: 50px;
}
</style>