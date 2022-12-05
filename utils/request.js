// ajax请求

import config from "./config"
export default (url, data={} ,method='GET') => {
    return new Promise((resolve, reject) => {
        wx.request({
            url:config.host + url,
            data,
            method, 
            success: (res) => {
              resolve(res.data) //resolve：修改Promise的状态为成功状态
            },
            fail: (err) => {
              console.log(err)
              reject(err) //reject：修改Promist的状态为失败状态
            }
          })
    })
}