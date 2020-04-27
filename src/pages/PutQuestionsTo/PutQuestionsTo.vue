<template>
<div>
 <header class="header">
   <a-icon type="left" class="iLeft" @click="back" />
    <h3 class="tab">我要提问</h3>
 </header>
   <a-form-model :model="form">
   <a-form-model-item>
      <a-input v-model="form.desc" type="textarea" placeholder="发表问题..." />
    </a-form-model-item>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
   <a-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture-card"
      :fileList="fileList"
      @preview="handlePreview"
      @change="handleChange"
    >
      <div v-if="fileList.length < 8" >
        <a-icon type="plus" />
        <div class="ant-upload-text">Upload</div>
      </div>
    </a-upload>
    <a-form-model-item class="button">
      <a-button @click="onSubmit">
      发表
    </a-button>
    </a-form-model-item>
  </a-form-model>
</div>
</template>

<script>
export default {
data() {
    return {
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        fileList:[]
      },
      previewVisible: false,
      previewImage: '',
      fileList: [],
    };
  },
  methods: {
    onSubmit() {
      this.form.desc='';
      this.fileList = [];
      this.$message.info('发表成功');
      this.$router.push('/home');
      console.log('submit!', this.form);
    },handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ fileList }) {
      var _this = this;
      this.fileList = fileList;
      console.log(fileList)
      if(fileList[0].response.name){
        fileList.map(item=>{              
          _this.form.fileList.push(item.response.url)
          
          })
      }  
    },
    back(){
      this.$router.back();
    }
  },
 
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

.ant-form{
  width 100%
  height 100%
.ant-input{
  margin 0
  padding 0
  width 100%
  height 250px
  border none
  outline none
}
.ant-upload-picture-card-wrapper{
  position absolute
  bottom 0
  right 0
  
}
.button{
 position absolute
 top 0
 right 0
 background-color none
}

}
</style>>

