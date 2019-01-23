class Observer {
    constructor() {
        // 空的队列
        // 事件队列，发布者和订阅者的供需关系来去决定去向
        this.list = {
            // 'eat':[()=>{
            //     console.log('eat')
            // }]
        }
    }
    // 监听 订阅者
    on(key, fn) {
        if (!this.list[key]) {
            this.list[key] = [];
        }
        this.list[key].push(fn);
    }
    // 触发 发布者
    emit(key,params) {
        // 把所有存着回调函数的数组给取出来
        let fns = this.list[key];
        // 如果数组队列为空，则返回
        if (!fns || fns.length === 0) {
            return false;
        }
        // 如果不为空，我就遍历所有的函数执行
        fns.forEach(fn => {
            fn(params);
        });
    }
}

export default new Observer;