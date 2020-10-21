// miniprogram/pages/user/user.js
const app = getApp()
const items = [{
    text: 'aa',
  },
  {
    text: 'bb',
  },
  {
    text: 'cc',
  },
  {
    text: 'dd',
  },

]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH: app.globalData.navH,
    mainActiveIndex: 0,
    activeId: null,
    items
  },
  navBack() {
    wx.redirectTo({
      url: '/pages/index/index'
    })
  },
  onClickNav({
    detail = {}
  }) {
    console.log(detail)
    this.setData({
      mainActiveIndex: detail.index || 0,
    });
  },

  onClickItem({
    detail = {}
  }) {
    console.log(detail)
    const activeId = this.data.activeId === detail.id ? null : detail.id;

    this.setData({
      activeId
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.navH)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})