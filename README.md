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
### 事件委托
1. 将子元素的事件委托（绑定）给父元素 
2. 好处
* 减少绑定的次数
* 后期新添加的元素也可以享用之前委托的事件
3. 原理：冒泡
4. 触发事件的仍然是子元素
5. 如何找到触发事件的对象：event.target
6. currentTarget和target的区别
* currentTarget要求绑定事件的元素一定是触发事件的元素
* target绑定事件的元素不一定是触发事件的元素
### 路由跳转
1. wx.redirectTo()：跳转后可以返回主页
2. wx.navigateTo()：跳转后可以返回上一级
3. wx.relaunch()
* 注：若要修改局部配置，直接修改对应页面的json文件即可
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
4. 服务器地址：http://122.9.33.79:3000
5. 接口文档：https://binaryify.github.io/NeteaseCloudMusicApi/#/
### 自定义组件
1. 在对应页面的.json文件中注册组件
2. 组件复用：和Vue类似
### 内网穿透
1. 真机无法获取到本地服务器数据(http://localhost:3000)
2. 解决：内网穿透
* 外网穿透到内网
* 下载uTools
* 安装插件：https://github.com/lblblong/nat-utools/releases/tag/v1.2.3
### 登录
1. 实时收集表单数据
* 事件绑定(bindChange是失去焦点时才获取，此处用bindinput)
```
bindinput="handleInput"
```
* Vue中用v-model实现双向数据绑定
2. 获取表单数据
* H5中：event.target.value
* 小程序中：target.detail.value
3. 向event对象传参
* 传一个参数：用id  获取：event.target.id
* 传多个参数：data-XXX=""  获取：event.target.dataset.XXX
```
 <input id="phone" data-type="phone" type="text" placeholder="请输入手机号码" bindinput="handleInput"/>
```
4. alert是window对象的方法，小程序中要使用wx.showToast()
### 本地存储
1. 语法：wx.setStorage || wx.setStorageSync
2. 单个key允许存储的最大数据长度为1M，所有数据存储上限为10M
3. Vue中数据存储：localStorage.setItem() || sessionStorage.setItem()  
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
    -webkit-box-orient: vertical;  /* 设置对齐模式 */
    -webkit-line-clamp: 2; /* 设置行数 */
```
2. CSS3新特性
* transform：该属性允许对元素进行旋转、缩放、移动或倾斜
* transition：更改 CSS 属性时控制动画速度
```
transform 1s linear
```

