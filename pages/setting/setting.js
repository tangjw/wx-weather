// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    screenBrightness:50,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  switchChange(e) {
    console.log(e)
  },
  screenBrightnessChange(e){
   
    this.setScreenBrightness(e.detail.value)
  },

  screenBrightnessChanging(e) {
   
    this.setScreenBrightness(e.detail.value)
  },
  setScreenBrightness(val) {
    let that = this
    wx.setScreenBrightness({
      value: val / 100,
      success: function (res) {
        that.setData({
          screenBrightness: val,
        })
      },
    })
  },
  
})