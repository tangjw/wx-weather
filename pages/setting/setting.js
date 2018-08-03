// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    screenBrightness: '50',
    setting: { hiddenIndex:false},
    enableUpdate:true,
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
    console.log("setting onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log("setting onShow")
    this.getScreenBrightness()
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
    let dataset = e.currentTarget.dataset
    let switchparam = dataset.switchparam
    let setting = this.data.setting
    if (switchparam === 'hiddenIndex') {
      if (this.data.enableUpdate) {
        setting[switchparam] = !e.detail.value
        wx.showToast({
          title: '设置成功',
          icon: 'none',
          duration: 2000,
        })
      } else {
        setting[switchparam] = false
        wx.showToast({
          title: '无法使用该功能',
          icon: 'none',
          duration: 2000,
        })
      }
    } 

    this.setData({
      setting,
    })
    wx.setStorage({
      key: 'setting',
      data: setting,
    })
  },
  screenBrightnessChange(e) {

    this.setScreenBrightness(e.detail.value)
  },

  screenBrightnessChanging(e) {

    this.setScreenBrightness(e.detail.value)
  },
  setScreenBrightness(val) {
    let that = this
    wx.setScreenBrightness({
      value: val / 100,
      success: function(res) {
        that.setData({
          screenBrightness: val,
        })
      },
    })
  },
  //获取当前亮度
  getScreenBrightness() {
    let that = this
    wx.getScreenBrightness({
      success: function(res) {
        that.setData({
          screenBrightness: Number(res.value * 100).toFixed(0),
        })
      },
      fail: function(res) {
        that.setData({
          screenBrightness: '50',
        })
      },
    })
  },

})