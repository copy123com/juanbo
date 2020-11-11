<template>
  <div>
    <header class="header">
      <a-icon type="left" class="iLeft" @click="back" />
      <h3 class="tab">登录</h3>
    </header>
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
          'username',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
          placeholder="用户名"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
          type="password"
          placeholder="密码"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox
          v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
        >记住密码</a-checkbox>
        <a class="login-form-forgot" href>忘记密码</a>
        <a-button type="primary" html-type="submit" class="login-form-button">登录</a-button>或
        <a href="/register">立即注册</a>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { server } from '@/api/index'
import { Message } from 'ant-design-vue'
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit(e) {
      console.log('1');
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          server.getLogin(values).then((res) => {
            if (res.code === 200) {
              Message.loading('正在登陆...', 1).then(() => {
                if (!window.localStorage) {
                  Message.error('浏览器不支持localstorage')
                  return false
                } else {
                  Message.success('登陆成功！')
                  let token = res.data.token
                  let nickName = res.data.nickname
                  let headImg = res.data.headimgurl
                  let uid = res.data.id
                  localStorage.setItem('token', token)
                  localStorage.setItem('nickName', nickName)
                  localStorage.setItem('headImg', headImg)
                  localStorage.setItem('uid', uid)
                  this.$router.push({path:'/me'})
                }
              })
            }else if(res.code === 400){
              Message.error('邮箱不存在或密码错误')
            }
          })
        }
      })
    },
    //返回上一页
    back(){
      this.$router.back();
    },

  },
}
</script>

<style lang="stylus" scoped>
.header {
  display: flex;
  background-color: rgb(92, 128, 202);
  align-items: center;
  height: 2.346667rem;

  .tab {
    background-color: rgb(92, 128, 202);
    text-align: center;
    color: #fff;
    line-height: 2.346667rem;
    flex: 1;
    padding-right: 17px;
  }

  .iLeft {
    color: #fff;
    font-size: 16px;
    margin-left: 0.266667rem;
  }
}

>>>.login-form {
  padding: 10px;
}

#components-form-demo-normal-login .login-form {
  max-width: 300px;
}

#components-form-demo-normal-login .login-form-forgot {
  float: right;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>