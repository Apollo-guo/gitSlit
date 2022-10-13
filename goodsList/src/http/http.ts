import axios from "axios";
const api = axios.create({
    baseURL : "http://192.168.1.41:10393/",
    timeout : 5000,

})
// request拦截器
api.interceptors.request.use(config => {
    // config 请求的所有信息
    // console.log(config);
    return config // 将配置完成的config对象返回出去 如果不返回 请求讲不会进行
}, err => {
    // 请求发生错误时的相关处理 抛出错误
    Promise.reject(err).then(r =>{
        console.log(r)
    } )
})

//response拦截器
api.interceptors.response.use(res => {
    // 我们一般在这里处理，请求成功后的错误状态码 例如状态码是500，404，403
    // res 是所有相应的信息
    // console.log(res)
    return Promise.resolve(res)
}, err => {
    // 服务器响应发生错误时的处理
    Promise.reject(err).then(r => {
        console.log(r)
    })
})

export default api;