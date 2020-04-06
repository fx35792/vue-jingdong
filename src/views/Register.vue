<template>
  <div id="register">
    <img src="http://source.qunarzz.com/site/images/wns/20200323_qunar_dujia_banner750x192_5.jpg" alt="">
    <cube-form :model="model" :schema="schema" @submit="submitHandler"></cube-form>
  </div>
</template>
<script>
export default {
  name: 'Register',
  data () {
    return {
      model: {
        username: '',
        password: ''
      },
      schema: {
        fields: [
          // 用户名
          {
            type: 'input',
            modelKey: 'username',
            label: '用户名',
            props: {
              placeholder: '请输入用户名'
            },
            rules: {
              required: true,
              type: 'string',
              min: 3,
              max: 15
            },
            trigger: 'blur',
            message: {
              required: '用户名不能为空',
              min: '用户名不能小于3个字符',
              max: '用户名不能大于15个字符'
            }
          },
          // 密码
          {
            type: 'input',
            modelKey: 'password',
            label: '密码',
            props: {
              placeholder: '请输入密码',
              type: 'password',
              eye: {
                open: false
              }
            },
            rules: {
              required: true
            }
          },
          // 注册按钮
          {
            type: 'submit',
            label: '注册'
          }
        ]
      }
    }
  },
  methods: {
    submitHandler (e) {
      // console.log(this.model)
      e.preventDefault()
      this.$http('/api/register', { params: this.model }).then(res => {
        // console.log(res)
        const toast = this.$createToast({
          txt: res.msg,
          type: 'txt'
        })
        toast.show()
      }).catch((e) => {
        // console.log(e)
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  #register
    img
      width 100%
</style>
