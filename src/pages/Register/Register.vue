<template>
<div>
  <header class="header">
   <a-icon type="left" class="iLeft" @click="back" />
    <h3 class="tab">注册</h3>
 </header>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item v-bind="formItemLayout" label="邮箱">
      <a-input
        v-decorator="[
          'email',
          {
            rules: [
              {
                type: 'email',
                message: '请填写正确的邮箱地址',
              },
              {
                required: true,
                message: '邮箱不能为空',
              },
            ],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="密码" has-feedback>
      <a-input
        v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: '密码不能为空',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          },
        ]"
        type="password"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="确认密码" has-feedback>
      <a-input
        v-decorator="[
          'confirm',
          {
            rules: [
              {
                required: true,
                message: '请再次填写密码',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          },
        ]"
        type="password"
        @blur="handleConfirmBlur"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout">
      <span slot="label">
        昵称
      </span>
      <a-input
        v-decorator="[
          'nickname',
          {
            rules: [{ required: true, message: '昵称不能为空', whitespace: true }],
          },
        ]"
      />
    </a-form-item>
    <a-form-item
      v-bind="formItemLayout"
      label="验证码"
    >
      <a-row :gutter="8">
        <a-col :span="12">
          <a-input
            v-decorator="[
              'captcha',
              { rules: [{ required: true, message: '验证码不能为空' }] },
            ]"
          />
        </a-col>
        <a-col :span="12">
          <a-button>获取验证码</a-button>
        </a-col>
      </a-row>
    </a-form-item>
    <a-form-item v-bind="tailFormItemLayout">
      <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
        我已阅读
        <a href="">
          协议
        </a>
      </a-checkbox>
    </a-form-item>
    <a-form-item v-bind="tailFormItemLayout">
      <a-button type="primary" html-type="submit">
        Register
      </a-button>
    </a-form-item>
  </a-form>
</div>
</template>

<script>

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
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' });
  },
  methods: {
    //表单验证通过调用的函数
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    //校验两次输入的密码是否一致
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('您输入的两个密码不一致！');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
    handleWebsiteChange(value) {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.autoCompleteResult = autoCompleteResult;
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
.box{
  width: 100%;
  overflow: hidden;
}

</style>