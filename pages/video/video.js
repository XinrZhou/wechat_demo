import request from '../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        videoGroupList: [],
        navId: '',//导航标识,
        videoList: [],
        videoId:'' //视频id标识
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.getVideoGroupListData()
    },

    //获取导航数据
    async getVideoGroupListData() {
        let videoGroupListData = await request('/video/group/list')
        this.setData({
            videoGroupList: videoGroupListData.data.slice(0, 14),
            navId: videoGroupListData.data[0].id
        })
        //获取视频列表数据
        this.getVideoList(this.data.navId)
    },

    //获取视频列表数据
    async getVideoList(navId) {
        let videoListData = await request('/video/group', { id: navId })
        let index = 0
        let videoList = videoListData.datas.map(item => {
            item.id = index++
            return item
        })
        this.setData({
            videoList
        })
        this.getVideoUrlList(videoList)
    },

    //获取视频链接
    async getVideoUrlList(videoList) {
        let index = 0
        videoList = await Promise.all(videoList.map(async item => {
            let urls = await request('/video/url', { id: this.data.videoList[index++].data.vid })
            item.urls = urls.urls[0]
            return item
        }))
        this.setData({
            videoList
        })
        wx.hideLoading()
    },

    //点击播放/继续播放的回调
    handlePlay(event) {
        let id = event.currentTarget.id
        //this.id和this.videoContext均是上一个视频的信息
        // this.id !== id && this.videoContext && this.videoContext.stop()
        // this.id = id
        this.setData({
            videoId : id
        })
        this.videoContext = wx.createVideoContext(id)
        this.videoContext.play()
    },

    //点击切换导航
    changeNav(event) {
        let navId = event.currentTarget.id
        this.setData({
            navId: navId >>> 0,
            videoList: [],
            videoUrlList: []
        })
        wx.showLoading({
            title: '正在加载'
        })
        this.getVideoList(this.data.navId)
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})