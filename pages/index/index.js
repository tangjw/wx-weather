let messages = require('../../data/messages.js')
//let bmap = require('../../lib/bmap-wx.js')
let utils = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hello: "Hello World!",
    showHeartbeat: true,
    bcgImg: false,
    bcgColor: '#40a7e7',
    // bcgColor: '#cccccc',
    message: '',
    cityDatas: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("onLoad")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log("onReady")
    //setData
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log("onShow")
    //切换message
    this.setData({
      message:messages.messages()
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log("onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log("onPullDownRefresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("onReachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    console.log("onShareAppMessage")
  },

})


//index.js
//获取应用实例
// const app = getApp()

// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })