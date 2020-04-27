<template>
  <div class="listBox">
     <header class="header">
      <a-icon type="left" class="iLeft" @click="back" />
        <h3 class="tab">英语作文</h3>
    </header>
    <a-list itemLayout="horizontal" :dataSource="data" class="a-list" >
    <a-list-item slot="renderItem" slot-scope="item, index" :key="index" @click="listClick(item.id)">
      <a-list-item-meta
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      >
        <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
        <a-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </a-list-item-meta>
    </a-list-item>
  </a-list>
  </div>
</template>

<script>
  const data = [
  {
    id:'1',
    title: 'Ant Design Title 1',
  },
  {
    id:'4',
    title: 'Ant Design Title 2',
  },
  {
    id:'3',
    title: 'Ant Design Title 3',
  },
  {
    id:'2',
    title: 'Ant Design Title 4',
  },
]
export default {
  data() {
    return {
      data,
    };
  },
  methods:{
    listClick(res){
      this.$router.push('/listdetails')
      console.log(res)
    },
     back(){
      this.$router.back();
    }
  }
}

</script>

<style lang="stylus" scoped>
.header{
  display flex
  background-color rgb(92, 128, 202)
  align-items center
  height 2.346667rem
  .tab{
  background-color rgb(92, 128, 202)
  text-align center
  color #fff
  line-height 2.346667rem
  flex 1
  padding-right 17px
  
  }
  .iLeft{
    color #fff
    font-size 16px
    margin-left .266667rem
    
  }
}
</style>