import request from '../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bannerList: [], //轮播图数据
        recommendList: [], //推荐歌单
        topList: [] //排行榜
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function () {
        //获取轮播图数据
        let bannerListData = await request('/banner', { type: 2 })
        this.setData({
            bannerList: bannerListData.banners
        })

        //获取推荐歌单数据
        let recommendListData = await request('/personalized', { limit: 10 })
        this.setData({
            recommendList: recommendListData.result,
        })

        //获取排行榜数据
        let index = 0
        let resultArr = []
        let topListData = await request('/toplist/detail')
        while (index < 4) {
            let topListItem = {
                name: topListData.list[index].name,
                imgUrl: topListData.list[index].coverImgUrl,
                tracks: topListData.list[index++].tracks
            }
            resultArr.push(topListItem)
            this.setData({
                topList: resultArr
            })
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

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