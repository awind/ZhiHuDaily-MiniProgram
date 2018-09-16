//index.js
const date = require('../../utils/util')
Page({
  data: {
    // keys for story array
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
    const that = this
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/latest',
      success: function(res) {
        wx.hideLoading()
        const topStories = res.data.top_stories
        const stories = res.data.stories
        that.setData({
          keys: [today],
          topStories: topStories,
          stories: {
            [today]: stories,
          },
        })
      }, fail: function() {
        wx.hideLoading()
      },
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
      method: 'GET',
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