import { Http } from "@/http/api/request"
import { ErrorDecorator } from '@/http/decorators/index'
import { httpbaseUrl } from '@/http/path'

export class Flow extends Http {
    constructor() {
        super()
    }

    path = httpbaseUrl

    @ErrorDecorator
    /** 获取画布信息 */
    async queryDraw(id: number) {
        const res = await this.get2(this.path + '/flow/queryDraw', id)
        return res
    }
}
