//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    topStories: [],
    stories: [],
    current: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
  },
  onLoad: function() {
    const that = this
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/latest',
      success: function(res) {
        console.log(res.data)
        const topStories = res.data.top_stories
        const stories = res.data.stories
        that.setData({
          topStories: topStories,
          stories: stories,
        })
      }
    })
  },
  onItemClick: function(event) {
    const detailID = event.target.dataset.id
    wx.navigateTo({
      url: '../detail/detail?id='+detailID,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  tapNewsItem: function(event) {
    const detailID = event.target.dataset.newsid
    wx.navigateTo({
      url: '../detail/detail?id='+detailID,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
})