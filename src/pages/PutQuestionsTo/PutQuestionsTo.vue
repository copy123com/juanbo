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
    onSubmit() {
        let _this = this;
        const formData = new FormData();
        _this.fileList.forEach((file)=>{
          _this.form.img = file.url || file.thumbUrl;
      });
      if(this.form.title === ''){
         this.$message.info('标题不能为空');
         return;
      }else if(this.form.content === ''){
         this.$message.info('内容不能为空');
          return;
      }
      this.form.uid = sessionStorage.getItem('uid');
     let token = this.$store.getters.getToken;
    //  axios.defaults.headers.common['Authorization'] = token;
    //  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencode;charset=UTF-8';
     let forms = _this.form;
     
    //  axios.post("/content/add",{forms}).then(res=>{
    //    console.log(res)
    //  })
   const request = axios.create({
     baseURL:'https://test.zhihao1.cn/api',
     withCredentials:false
   })
   request.interceptors.request.use(function (config) {
     config.headers = {
       'Authorization':token,
       'Content-Type':'multipart/form-data'
     }
     return config;
   },function(error){
     return Promise.reject(error)
   })
    
    request({
      url:"/content/add",
      method:'post'
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })


      this.$message.info('发表成功');
      this.$router.push('/home');
      //获取登录时保存的用户id
     
      console.log('submit!', this.form);

     
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

