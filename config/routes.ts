export default [
        { exact: true, path: '/', redirect: '/home' },
        { 
            path: '/', 
            name: '主页',
            component: '@/pages/index/index' ,
            routes : [{
                path : '/home',
                name : "首页",
                component: '@/pages/home/index'
            }]
        }
]