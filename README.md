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