<template>
  <div class="bigBox">
    <div>
      <a-list
        class="comment-list"
        :header="`共 ${data.length} 条回复`"
        itemLayout="horizontal"
        :dataSource="data.slice(0,2)"
        extra="horizontal"
        type="flex"
        justify="end"
        v-if="isshow"
      >
        <a-list-item slot="renderItem" slot-scope="item">
          <a-comment :author="item.author" :avatar="item.avatar">
            <p slot="content">{{ item.content }}</p>
            <a-tooltip slot="datetime" :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
              <span>{{ item.datetime.fromNow() }}</span>
            </a-tooltip>
          </a-comment>
        </a-list-item>
      </a-list>
       <a-list
        class="comment-list"
        :header="`共 ${data.length} 条回复`"
        itemLayout="horizontal"
        :dataSource="data"
        extra="horizontal"
        type="flex"
        justify="end"
        v-else
      >
        <a-list-item slot="renderItem" slot-scope="item">
          <a-comment :author="item.author" :avatar="item.avatar">
            <p slot="content">{{ item.content }}</p>
            <a-tooltip slot="datetime" :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
              <span>{{ item.datetime.fromNow() }}</span>
            </a-tooltip>
          </a-comment>
        </a-list-item>
      </a-list>
    </div>
    <div class="more"  @click="more">{{isshow?'查看更多':'收起'}}</div>
  </div>

</template>
<script>
import moment from 'moment'
export default {
  props:{
    num:{
      type:Number
    }
  },
  data() {
    return {
      data: [
        {
          author: 'Han Solo',
          avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: moment().subtract(1, 'days')
        },
        {
          author: 'Han Solo',
          avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: moment().subtract(2, 'days')
        },
        {
          author: 'Han Solo',
          avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: moment().subtract(2, 'days')
        },
        {
          author: 'Han Solo',
          avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: moment().subtract(2, 'days')
        }
      ],
      moment,
      isshow:true
    }
    
  },
  methods: {
    more(){
      this.isshow=!this.isshow
    }
  }
}
</script>
<style lang="stylus" scoped>
  

  .more
    width 100px
    line-height 30px
    margin 0 auto
    text-align center
    border-radius 15px
    border 1px solid #ccc
    margin-bottom 50px
</style>