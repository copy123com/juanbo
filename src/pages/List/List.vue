<template>
  <div class="listBox">
     <div class="tab">
       <h3>我的问答</h3>
     </div>
    <a-list itemLayout="horizontal" :dataSource="data" class="a-list">
    <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
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
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
]
export default {
  data() {
    return {
      data,
    };
  },
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
.listBox .a-list{
  margin-top: 44px;
}
</style>