export default (url,header = {},data = {},method = "GET",type) => {
  return new Promise((resolve,reject) => {
    wx.request({
      url,
      data,
      header,
      method,
      success(res){
        resolve(res);
      },
      fail(err){
        reject(err);
      }
    })
  })
  }