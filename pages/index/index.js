//index.js
const date = require('../../utils/util')
Page({
  data: {
    // keys for stories
    keys: [],
    topStories: [],
    stories: [],
    current: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    isHideLoadMore: true,
  },
  onLoad: function() {
    const today = date.getCurrentMonthFirst()
    console.log(today)
    const that = this
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/latest',
      success: function(res) {
        console.log(res.data)
        const topStories = res.data.top_stories
        const stories = res.data.stories
        that.setData({
          keys: [today],
          topStories: topStories,
          stories: {
            [today]: stories,
          },
        })
      }
    })
  },
  onReachBottom: function() {
    this.setData({
      isHideLoadMore: false,
    })
    const that = this
    const latest = this.data.keys.sort()[0]
    const beforeDate = date.dateBefore(latest, 1)
    const before = beforeDate.replace(/-/g, '')
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/before/' + before,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        const oldData = that.data.stories
        that.setData({
          keys: Object.keys(oldData).concat(beforeDate),
          stories: {
            ...oldData,
            [beforeDate]: res.data.stories,
          },
          isHideLoadMore: true,
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
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
      url: '../detail/detail?id=' + detailID,
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