import $http from '../axios/index'

/** http请求类 */
class Http {
    /** axios实例 */
    http: any = $http
    /** json格式 */
    post: Function = $http.post
    /** 路由后以'?'拼接参数 */
    get1: Function = $http.get
    /** 路由后面直接用'/'拼接参数 */
    get2: Function = $http.get
    constructor() {
        // 封装请求方式
        this.get1 = function (url: string, data?: any) {
            return $http.get(url, {
                params: data
            })
        }
        this.get2 = function (url: string, data?: any) {
            return $http.get(url + '/' + data)
        }
    }
}

export {
    Http
}