<template>
  <div id="login">
    <img src="http://source.qunarzz.com/site/images/wns/20200323_qunar_dujia_banner750x192_5.jpg" alt="">
    <cube-form :model="model" :schema="schema" @submit="submitHandler"></cube-form>
  </div>
</template>
<script>
export default {
  name: 'Login',
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
          // 登录按钮
          {
            type: 'submit',
            label: '登录'
          }
        ]
      }
    }
  },
  methods: {
    popText (txt) {
      const toast = this.$createToast({
        txt: txt,
        type: 'txt'
      })
      toast.show()
    },
    async submitHandler (e) {
      e.preventDefault()
      const result = await this.$http('/api/login', { params: this.model })
      // console.log(result)
      try {
        if (result.code === 0) {
          const token = result.token
          this.popText(result.message)
          this.$store.commit('setToken', token)
          window.localStorage.setItem('token', token)
          if (this.$route.query.redirect) {
            this.$router.replace({ path: this.$route.query.redirect })
          } else {
            this.$router.replace({ path: '/bottomNav/home' })
          }
        } else {
          this.popText(result.message)
        }
      } catch (e) {
        // console.log(e)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  #login
    img
      width 100%
</style>
