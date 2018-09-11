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
    console.log('onLoad')
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
    console.log(event.target.dataset.id+"")
  },
  tapNewsItem: function(event) {
    console.log(event.target.dataset.newsid+"")
  }
})