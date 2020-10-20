//app.js
App({
  onLaunch: function () {
    wx.getSystemInfo({ //导航高度
      success: res => {
        
        this.globalData.navH = res.statusBarHeight + 45
        console.log(this.globalData.navH)
      },
      fail(err) {
        // console.log(err);
      }
    })
    var imageWidth = wx.getSystemInfoSync().windowWidth
    this.globalData.ratio = imageWidth / 750
    

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
        env: 'cykkk'
      })
    }

   
  },
  globalData: {
    userInfo: null,
    navH: "", //导航高度
    ratio: "", //rpx和px的比例
    city: null,
    selecttabbar: 1,
 
  }



})
