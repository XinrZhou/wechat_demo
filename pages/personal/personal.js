let startY = 0 //手指起始坐标
let moveY = 0  //手指移动坐标
let moveDistance = 0 //手指移动距离

Page({

    /**
     * 页面的初始数据
     */
    data: {
        //translate：CSS3新特性
        coverTransform:'translateY(0)',
        coverTransition:'',
        userInfo:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        //读取用户信息基本信息
        let userInfo = wx.getStorageSync('userInfo')
        if(userInfo) {
            this.setData({
                userInfo: JSON.parse(userInfo)
            })
        }
    },

    bindTouchStart(event){
        this.setData({
            coverTransition:''
        })
        startY = event.touches[0].clientY
    },

    bindTouchMove(event){
        moveY = event.touches[0].clientY
        moveDistance = moveY - startY
        if(moveDistance <= 0){
            return
        }
        if(moveDistance >= 80){
            moveDistance = 80
        }
        //动态更新coverTransform的值
        this.setData({
            coverTransform:`translateY(${moveDistance}rpx)`
        })
    },

    bindTouchEnd(){
        this.setData({
            coverTransform:'translateY(0rpx)',
            coverTransition:'transform 1s linear'
        })
    },

    //跳转至登录
    toLogin(){
        wx.navigateTo({
          url: '/pages/login/login',
        })
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