// pages/chapter one/section1-4/section1-4.js
const initShaders = require('../../../utils/initShaders.js')
const shaders = require('./shaders.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    const query = wx.createSelectorQuery()//创建一个节点查询器
    query.select('#myCanvas').node().exec((res) => {//获取id=canvas的节点
      const canvas = res[0].node//获取canvas对象
      const gl = canvas.getContext('webgl')//获取webgl渲染上下文
      console.log(initShaders)
      initShaders.initShaders(gl,shaders.vShader,shaders.fShader);//初始化着色器
      
      gl.clearColor(0, 0, 0, 1)//设置背景色
      gl.clear(gl.COLOR_BUFFER_BIT)//使用背景色清理颜色缓存区
      gl.drawArrays(gl.POINT,0,1);
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})