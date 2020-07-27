<template>
  <div>
    <header class="header">
      <a-icon type="left" class="iLeft" @click="back" />
      <h3 class="tab">注册</h3>
    </header>
    <a-form-model :model="form" :rules="rules" ref="ruleForm" class="from-box">
      <a-form-model-item v-bind="formItemLayout" prop="email" label="邮箱">
        <a-input v-model="form.email" type="email" />
      </a-form-model-item>
      <a-form-model-item v-bind="formItemLayout" prop="password" label="密码" has-feedback>
        <a-input v-model="form.password" type="password" />
      </a-form-model-item>
      <a-form-model-item v-bind="formItemLayout" prop="confirm" label="确认密码" has-feedback>
        <a-input v-model="form.confirm" type="password" />
      </a-form-model-item>
      <a-form-model-item v-bind="formItemLayout" prop="name" label="昵称">
        <a-input v-model="form.name" type="text" />
      </a-form-model-item>
      <a-form-model-item v-bind="formItemLayout" prop="code" label="验证码">
        <a-input v-model="form.code" type="text" style="width:120px;margin-right:10px" />

        <a-button @click="getEmailCode" v-if="show">获取验证码</a-button>

        <a-button v-else disabled>{{count}}s</a-button>
      </a-form-model-item>
      <a-form-model-item v-bind="tailFormItemLayout" prop="checked">
        <a-checkbox v-model="form.checked">
          我已阅读
          <a href>协议</a>
        </a-checkbox>
      </a-form-model-item>
      <a-form-item v-bind="tailFormItemLayout">
        <a-button type="primary" @click="register">注册</a-button>
      </a-form-item>
    </a-form-model>
  </div>
</template>

<script>
import { server } from '@/api/index'
import { Message } from 'ant-design-vue'
import { isEmail } from '@/utils/index'
export default {
  data() {
    return {
      confirmDirty: false,

      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
      form: {
        email: '',
        password: '',
        confirm: '',
        name: '',
        code: '',
        checked: false,
      },
      rules: {
        email: [
          {
            required: true,
            message: '邮箱不能为空',
          },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
          },
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
          },
          {
            min: 6,
            message: '密码长度不能小于6位',
          },
          {
            max: 18,
            message: '密码长度不能超过18位',
          },
        ],
        confirm: [
          {
            required: true,
            message: '请再次填写密码',
          },
          {
            validator: this.compareToFirstPassword,
          },
        ],
        name: [
          { required: true, message: '请输入昵称' },
          { max: 12, message: '昵称过长' },
        ],
        code: [{ required: true, message: '请输入验证码' }],
        checked: [{ validator: this.checkedFlag }],
      },

      show: true,
      count: '',
      timer: null,
    }
  },
  methods: {
    //校验两次输入的密码是否一致
    compareToFirstPassword(rule, value, callback) {
      const form = this.form
      if (value && value !== form.password) {
        callback('您输入的两个密码不一致！')
      } else {
        callback()
      }
    },
    handleWebsiteChange(value) {
      let autoCompleteResult
      if (!value) {
        autoCompleteResult = []
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(
          (domain) => `${value}${domain}`
        )
      }
      this.autoCompleteResult = autoCompleteResult
    },
    checkedFlag(rule, value, callback) {
      const form = this.form
      form.checked = value
      if (form.checked == false) {
        callback('请认真阅读协议')
      } else {
        callback()
      }
    },
    back() {
      this.$router.back()
    },
    async getEmailCode() {
      //获取邮箱验证码
      if (this.form.email) {
        if (isEmail(this.form.email) === true) {
          await server.getEmailCode({ email: this.form.email }).then((res) => {
            console.log(res)
            if (res.code === 200) {
              Message.loading('验证码发送中...', 0.5).then(() => {
                Message.success('验证码发送成功！')
                const TIME_COUNT = 60
                if (!this.timer) {
                  this.count = TIME_COUNT
                  this.show = false
                  this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= TIME_COUNT) {
                      this.count--
                    } else {
                      this.show = true
                      clearInterval(this.timer)
                      this.timer = null
                    }
                  }, 1000)
                }
              })
            } else {
              Message.error('验证码发送失败，请联系管理员！')
            }
          })
        } else {
          Message.error('请填写正确的邮箱地址！')
        }
      } else {
        Message.error('邮箱不能为空!')
      }
    },

    async register() {//注册
      await this.$refs.ruleForm.validate((v) => {
        if (v) {
          server
            .getRegister({
              email: this.form.email,
              code: this.form.code,
              username: this.form.email,
              nickname: this.form.name,
              password: this.form.password,
            })
            .then((res) => {
              if (res.code === 200) {
                Message.loading('注册中...', 1).then(() => {
                  Message.success('注册成功！')
                  this.$router.push('/login')
                })
              } else {
                Message.error('注册失败，请联系管理员！')
              }
            })
        } else {
          Message.error('请按规则填写相应内容！')
        }
      })
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

.box {
  width: 100%;
  overflow: hidden;
}

.from-box {
  padding: 10px;
}
</style>