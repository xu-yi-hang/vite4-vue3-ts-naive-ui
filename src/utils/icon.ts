import { NIcon } from 'naive-ui'
import SvgIcon from '@/components/common/SvgIcon/index.vue'

function renderCustomIcon(name: string, props: { size?: number, color?: string } = { size: 12, color: 'currentColor' }) {
    return () => h(NIcon, props, { default: () => h(SvgIcon, { name }) })
}

export {
    renderCustomIcon
}