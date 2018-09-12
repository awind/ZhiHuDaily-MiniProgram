const WxParse = require('../../wxParse/wxParse.js')

Page({
    data: {
        htmlData: "",
        image: "",
    },
    onLoad: function(option) {
        console.log(option.id)
        const that = this
        wx.request({
            url: 'https://news-at.zhihu.com/api/4/news/' + option.id,
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function(res){
                console.log(res.data)
                const image = res.data.images[0]
                const body = res.data.body
                WxParse.wxParse('htmlData', 'html', body, that, 0)
                that.setData({
                    image: image,
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

})