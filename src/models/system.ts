interface homeState {
    myName : string
}

interface homeData {
    namespace : string,
    state : homeState
}

export default  {
    // models命名空间，需全局唯一
    namespace: 'system',           
    // models存储的数据store                  
    state: {
        myname : "这是主页"
    },      
    // 更新store，用新数据合并state的旧数据                                
    reducers: {

    },
};