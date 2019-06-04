const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pm: null,
    foodCname: []
  },
  tapQuality: function (event) {
    var quality = event.currentTarget.dataset.quality;
    var types = event.currentTarget.dataset.types;
    var cname = event.currentTarget.dataset.cname;
    wx.navigateTo({
      url: '/pages/ingredient/ingredient?quality='+quality+"&types="+types+"&cname="+cname
    })
  },
  toChinese: function(name){
    return app.globalObject.getFoodCName(name)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var item = app.globalObject.getById(options.id)
    var l = item.food.length
    var foodCname = [l]
    for(var i = 0;i<l;i++){
      foodCname[i]=this.toChinese(item.food[i].types)
    }
    this.setData({
      pm: item,
      foodCname: foodCname
    })
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