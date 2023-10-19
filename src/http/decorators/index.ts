/** 错误捕获 装饰器*/
export function ErrorDecorator(prototype: any, functionName: string, descriptor: any) {
    // 原函数
    const fn = descriptor.value
    descriptor.value = async function () {
        try {
            const res = await fn.apply(this, arguments)
            console.group(`${functionName}方法`)
            console.log('%c 请求成功! ', 'color: green');
            console.log(`%c 响应信息:${res.data.errorMsg} `, 'color: green');
            console.groupEnd();
            return res
        } catch (e) {
            console.group(`${functionName}方法`)
            console.log('%c 请求失败! ', 'color: red');
            console.log(`%c 错误信息:${e} `, 'color: red');
            console.groupEnd();
        }
    }
    return descriptor
}