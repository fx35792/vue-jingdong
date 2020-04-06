
module.exports = {
  configureWebpack: {
    devServer: {
      port: 8888,
      open: true,
      host: '0.0.0.0',
      // mock数据
      before (app) {
        // 用户信息
        const userpoor = [
          { username: 'fanxin', password: '123' },
          { username: 'sunny', password: '123' }
        ]
        // 注册接口
        app.get('/api/register', (req, res) => {
          const { username, password } = req.query
          const userLength = userpoor.filter(v => v.username === username).length
          if (userLength > 0) {
            res.json({
              success: false,
              msg: '用户已存在'
            })
          } else {
            res.json({
              success: true,
              msg: '用户注册成功'
            })
          }
        })
        // 登录接口
        const tokenkey = 'xdclass'
        app.get('/api/login', (req, res) => {
          const { username, password } = req.query
          if (username === 'fanxin' && password === '123' || username === 'sunny' && password === '123') {
            res.json({
              code: 0,
              message: '登录成功',
              token: tokenkey + '-' + username + '-' + (new Date().getTime() + 60 * 60 * 1000)
            })
          } else {
            res.json({
              code: 1,
              message: '账号或密码错误'
            })
          }
        })

        // 首页轮播图数据
        app.get('/api/banner', (req, res) => {
          res.json({
            data: [{
              url: 'https://www.baidu.com',
              imageUrl: 'http://source.qunarzz.com/site/images/wns/20200323_qunar_dujia_banner750x192_5.jpg'
            }, {
              url: 'https://www.baidu.com',
              imageUrl: 'http://source.qunarzz.com/site/images/wns/20200331_qunar_dujia_750x192_gonggao.jpg'
            }]
          })
        })

        // 获取分类数据
        app.get('/api/rollingList', (req, res) => {
          res.json({
            data: [
              [
                {
                  url: 'https://www.baidu.com',
                  imageUrl: 'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                  label: '分类一'
                },
                {
                  url: 'https://www.baidu.com',
                  imageUrl: 'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                  label: '分类二'
                },
                {
                  url: 'https://www.baidu.com',
                  imageUrl: 'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                  label: '分类三'
                },
                {
                  url: 'https://www.baidu.com',
                  imageUrl: 'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                  label: '分类一'
                },
                {
                  url: 'https://www.baidu.com',
                  imageUrl: 'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                  label: '分类一'
                },
                {
                  url: 'https://www.baidu.com',
                  imageUrl: 'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                  label: '分类一'
                },
                {
                  url: 'https://www.baidu.com',
                  imageUrl: 'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                  label: '分类一'
                },
                {
                  url: 'https://www.baidu.com',
                  imageUrl: 'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                  label: '分类一'
                }
              ],
              [
                {
                  url: 'https://www.baidu.com',
                  imageUrl: 'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                  label: '分类九'
                },
                {
                  url: 'https://www.baidu.com',
                  imageUrl: 'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                  label: '分类一'
                },
                {
                  url: 'https://www.baidu.com',
                  imageUrl: 'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                  label: '分类一'
                },
                {
                  url: 'https://www.baidu.com',
                  imageUrl: 'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                  label: '分类一'
                },
                {
                  url: 'https://www.baidu.com',
                  imageUrl: 'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                  label: '分类一'
                },
                {
                  url: 'https://www.baidu.com',
                  imageUrl: 'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                  label: '分类一'
                },
                {
                  url: 'https://www.baidu.com',
                  imageUrl: 'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                  label: '分类一'
                },
                {
                  url: 'https://www.baidu.com',
                  imageUrl: 'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                  label: '分类一'
                }
              ]
            ]
          })
        })

        // 分类有侧内容数据
        app.get('/api/classify', (req, res) => {
          switch (req.query.type) {
            case '0':
              res.json({
                data: [
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '小米'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: 'oppo'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: 'vivo'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为'
                  }
                ]
              })
              break
            case '1':
              res.json({
                data: [
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为1'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为1'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为1'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为1'
                  }
                ]
              })
              break
            case '2':
              res.json({
                data: [
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为2'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为2'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为2'
                  },
                  {
                    imageUrl: 'http://img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg',
                    label: '华为2'
                  }
                ]
              })
              break
          }
        })
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: [
          './src/theme'
        ]
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
