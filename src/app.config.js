export default defineAppConfig({
  pages: [
    'pages/login/login',
    'pages/index/index',
    'pages/mine/mine'
  ],
  // 分包配置
  "subpackages": [
    {
      "root": "detailModule",
      "pages": [
        "pages/detail"
      ]
    }
  ],
  // 导航栏配置
  tabBar: {
    list: [{
      'iconPath': 'static/page.png',
      'selectedIconPath': 'static/page_on.png',
      pagePath: 'pages/index/index',
      text: '新闻'
    }, {
      'iconPath': 'static/mine.png',
      'selectedIconPath': 'static/mine_on.png',
      pagePath: 'pages/mine/mine',
      text: '我的'
    }],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  "style": "v2"
})
