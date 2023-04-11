const app = getApp()
let _this;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    page:1,
    load:false,
    size:10,
    tag:[''],
    flag:0,
    url:'get',
    wheres:"",
    sorts:"",
    fields:'',
    wx_id:wx.getStorageSync("user").id
  },


 
  navTo(e) {
    app.com.navTo(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    _this = this
  },
 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
    this.setData({
      wx_id: wx.getStorageSync("user").id
    })
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
    return {
      title:'帮我一个忙',
      path:'/pages/index/index'
    }
  }
})