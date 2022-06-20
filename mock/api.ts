const mockjs = require('mockjs')

export default {
    // 使用 mockjs 等三方库
    'GET /api/home' : (req:any,res:any)=>{
        res.send  (
            mockjs.mock({
                'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
              })
        )

    }
  };