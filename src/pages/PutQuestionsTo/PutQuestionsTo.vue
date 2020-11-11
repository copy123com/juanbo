<template>
<div>
 <header class="header">
   <a-icon type="left" class="iLeft" @click="back" />
    <h3 class="tab">我要提问</h3>
 </header>
   <a-form-model :model="form">
     <a-form-model-item>
      <a-input v-model="form.title" class="title" type="text" placeholder="请输入标题" />
    </a-form-model-item>
   <a-form-model-item>
      <a-input v-model="form.content" type="textarea" placeholder="发表问题..." />
    </a-form-model-item>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
   <a-upload
      :beforeUpload="beforeUpload"
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
import store from '../../store';
import axios from 'axios'
export default {
  
data() {
    return {
      form: {
        content:'',
        title:'',
        img:''
      },
      previewVisible: false,
      previewImage: '',
      fileList: [],
    };
  },
  methods: {
    //提交问题
    onSubmit() {
        let _this = this;
        _this.fileList.forEach((file)=>{
          //获取图片数据
          _this.form.img = file.originFileObj;
      });
      //对提交的信息进行判断
      if(this.form.title === ''){
         this.$message.info('标题不能为空');
         return;
      }else if(this.form.content === ''){
         this.$message.info('内容不能为空');
          return;
      }
      this.form.uid = localStorage.getItem('uid');
     let token = localStorage.getItem('token');
   
     let forms = _this.form;
     const formData = new FormData();
   formData.append('img',forms.img);
   formData.append('content',forms.content);
   formData.append('title',forms.title);
   formData.append('img',forms.img);
   formData.append('uid',forms.uid);
   const request = axios.create({
     baseURL:'https://test.zhihao1.cn/api'
   })
   request.interceptors.request.use(function (config) {
     config.headers = {
       'token':token,
       'Content-Type': 'multipart/form-data',
     }
     return config;
   },function(error){
     return Promise.reject(error)
   })
   this.$message.loading('正在提交',2).then(()=>{
      request({
      url:"/content/add",
      method:'post',
      data:formData
    }).then(res=>{
      console.log('2')
      if(res.status == 200){
        this.$message.success('提交成功');
        this.$router.push('/home');
        console.log(res)
      }
    }).catch(err=>{
      console.log(err)
    })
   })
    
      this.uploading = true;
    },


    handleCancel() {
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
      this.fileList = fileList;
    },

    beforeUpload(file){
      this.fileList = [...this.fileList, file];
      return false;
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
  border 1px solid #ccc
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
.title{
  height 2.833333rem
  margin-top .533333rem
}
}
</style>>

