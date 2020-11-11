<template>
  <div class="bigBox">
    <div>
      <a-list
        class="comment-list"
        :header="`共 ${chilList.length} 条回复`"
        itemLayout="horizontal"
        :dataSource="chilList.slice(0,2)"
        extra="horizontal"
        type="flex"
        justify="end"
        v-if="isshow"
      >
        <a-list-item slot="renderItem" slot-scope="item">
          <a-comment :author="item.nickname" avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png">
            <div slot="content">
              <div><img style=" width: 100%;" :src="item.imgurl1" alt=""></div>  
              <div>{{ item.context }}</div>
            </div>
            <!-- <a-tooltip slot="datetime" :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
              <span>{{ item.datetime.fromNow() }}</span>
            </a-tooltip> -->
          </a-comment>
        </a-list-item>
      </a-list>
       <a-list
        class="comment-list"
        :header="`共 ${chilList.length} 条回复`"
        itemLayout="horizontal"
        :dataSource="chilList"
        extra="horizontal"
        type="flex"
        justify="end"
        v-else
      >
        <a-list-item slot="renderItem" slot-scope="item">
          <a-comment :author="item.nickname" avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png">
            <div slot="content">
              <div><img style=" width: 100%;" :src="item.imgurl1" alt=""></div>  
              <div>{{ item.context }}</div>
            </div>
            <!-- <a-tooltip slot="datetime" :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
              <span>{{ item.datetime.fromNow() }}</span>
            </a-tooltip> -->
          </a-comment>
        </a-list-item>
      </a-list>
    </div>
    <div class="more" v-if="chilList.length>2"  @click="more">{{isshow?'查看更多':'收起'}}</div>
  </div>

</template>
<script>
import moment from 'moment'
export default {
  props:{
    num:{
      type:Number
    },
    chilList:{
      type:Array,
      default:[]
    }
  },
  data() {
    return {
      
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