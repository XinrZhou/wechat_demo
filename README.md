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
### 使用图标
1. 阿里矢量图标库
2. 添加入库-->生成链接-->复制css代码-->iconfont.wxss-->对应位置引入
### 前后端交互
1. wx.request()
2. 注意点
* 必须是https协议
* 一个接口最多配置20个域名
* 并发限制上限：10个
* 开发中设置不校验合法域名：开发工具-->右上角详情-->本地设置-->不校验...
3. 异步返回的是Promise实例
### 自定义组件
1. 在对应页面的.json文件中注册组件
2. 组件复用：和Vue类似
### 内网穿透
1. 真机无法获取到本地服务器数据(http://localhost:3000)
2. 解决：内网穿透
* 外网穿透到内网
* 下载uTools
* 安装插件：https://github.com/lblblong/nat-utools/releases/tag/v1.2.3
### 补充
1.  文本溢出隐藏 省略号代替 
* 单行
```
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
```
* 多行
```
    display: -webkit-box; /* 将对象作为弹性伸缩盒子模型显示 */
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;  /* 设置对其模式 */
    -webkit-line-clamp: 2; /* 设置行数 */
```

