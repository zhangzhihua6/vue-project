// 路由配置
import Vue from 'vue'
// 引入路由模块
import VueRouter from 'vue-router'
// 显式安装该模块
Vue.use(VueRouter);
// 一层
// 首页路由
import App from '../App.vue'
// 详情页路由
// import Detail from '../pages/Detail.vue'
// // 登录路由
// import Sign from '../pages/Sign.vue'

// 二层路由
// 首页路由 微信页面
import Toppage from '../pages/Toppage.vue'
// 分类路由 联系页面
import Classlist from '../pages/Classlist.vue'
// 购物车页面
import Shopcar from '../pages/Shopcar.vue'
// 我的页面
import Main from '../pages/Main.vue'
//列表页
import goodlist from '../pages/goodlist.vue'


// 配置路由
const routes = [
    // 如果url的路由为 /foo，进入Foo组件
    {
        path: '/app',
        // 路由命名，方便跳转
        name: 'app',
        component: App,
        children: [{
                // 嵌套路由里面的path要删掉/
                path: 'Toppage',
                name: 'Toppage',
                component: Toppage
                
                
            },
            {
                path: 'Classlist',
                name: 'Classlist',
                component: Classlist
                
                
            },
            {
                path: 'Shopcar',
                name: 'Shopcar',
                component: Shopcar
              
                
            },
            {
                path: 'Main',
                name: 'Main',
                component: Main
            },
            {
                path: '/goodlist',
                name: 'goodlist',
                component: goodlist
            }
            
        ]
    },
    // {
    //     // 就是可以在:id里面接受一个不固定的值
    //     // 动态路由匹配
    //     path: '/detail/:id/:name',
    //     name: 'detail',
    //     component: Detail
    // },
    // {
    //     // 就是可以在:id里面接受一个不固定的值
    //     // 动态路由匹配
    //     path: '/sign',
    //     name: 'sign',
    //     component: Sign
    // },
    
    // 重定向路由，比如刚进页面的时候，默认跳转的路由位置
    {
        path: '/',
        redirect: {
            name: 'Toppage'
        }
    }
]

// 实例该路由配置
const router = new VueRouter({
    // h5history路由模式
    // 有兼容性的问题
    // mode: 'history',
    // 建议用默认的哈希模式
    mode: 'hash',
    routes // (缩写) 相当于 routes: routes
})
// 路由守卫
// router.beforeEach((to, from, next) => {
//     let token = localStorage.getItem("token");
//     // 如果token是123456的话进去目标页面，否则返回'/sign'页面
//     if (token == 123456 || to.path == '/sign') {
//         next()
//     } else {
//         // console.log(to.path,from)
//         // 如果失败跳转登录页面
//         router.push({
//             name: "sign"
//         })
//         // console.log('登录失败')
//     }
//     // setTimeout(()=>{
//     //     next()
//     // },3000)
// })
export default router