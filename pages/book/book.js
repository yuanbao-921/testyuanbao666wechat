Page({
  data: {
    swiperList:[
      {
      imageUri:'../../images/team1.png',
      type:'url',
      target:'http://baidu.com'
      },
      {
      imageUri:'../../images/team2.png',
      type:'product',
      target:'https://www.bilibili.com/'
      },
      {
      imageUri:'../../images/team3.png',
      type:'url',
      target:'http://baidu.com'
      },
      {
        imageUri:'../../images/team4.png',
        type:'url',
        target:'http://baidu.com'
      }
    ],
    current:0,



  },

  onLoad(options) {
  wx.request({
    url: 'url',
})
  },

  onReady() {

  },
})