## 小程序相关
### 数据绑定
1. 小程序
* data中初始化数据
* 修改数据：this代表当前页面的实例对象，修改数据的行为是同步的
* 单项数据流（Model--->View）
```
this.setData()
```
2. Vue中
* data中初始化数据
* 修改数据
* 单项数据流（Model--->View），Vue中实现了双向数据绑定：v-model
```
this.key = value
```
### Vue中数据劫持代理
1. get()：用来获取扩展属性值的，当获取该属性值的时候调用get方法
2. set()：监视属性扩展值的，只要已修改就调用
3. 劫持代理
```
Object.defineProperty()
```
### 事件绑定
1. bind：不会阻止冒泡事件向上冒泡
```
<view bindtap="handleTap">
...
<view/>
```
2. catch：阻止冒泡事件向上冒泡
* tap相当于点击事件
* Vue中点击事件：@click="handleClick"
* 事件流的三个阶段：捕获（从外向内）、执行、冒泡（从内向外）
### 路由跳转
1. wx.redirectTo()：跳转后可以返回主页
2. wx.navigateTo()：跳转后可以返回上一级
3. wx.relaunch()
* 注：若要修改局部配置，直接修改对应页面的json文件即可
### 生命周期函数
1. onLoad()：监听页面加载
2. onShow()：监听页面显示，会执行多次
3. onReady()：监听页面初次渲染完成
4. onHide()：监听页面隐藏
5. onUnload()：监听页面卸载
### 获取用户基本信息
1. 用户未授权（首次登录）
```
<button bindtap="getUserProfile">userInfo</button>
```
```
getUserProfile(){
        wx.getUserProfile({ })
    },
```
2. 用户已授权（再次登录）
```
wx.getUserInfo({})
```