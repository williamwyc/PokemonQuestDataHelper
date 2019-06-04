const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ingredient : [],
    types :"",
    cname : "",
    quality : ""
  },
  isImg: function(name){
    console.log(name)
    if(name == "bb"||"br"||"by"||"bg"||"sb"||"sr"||"sy"||"sg"||"rainbow"||"shell"){
      return true
    }
    else{
      return false
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var types = options.types
    var cname = options.cname
    var quality = options.quality
    var food = app.globalObject.getFood(types)
    this.setData({
      ingredient: app.globalObject.getIngredient(food.recipe,quality),
      types : types,
      cname: cname,
      quality: quality
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