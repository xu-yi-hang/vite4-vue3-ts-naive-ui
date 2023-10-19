import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export const plugins = [
    vue(),
    AutoImport({
        imports: [
            'vue',
            'vue-router',
            'pinia',
            {
                'naive-ui': [
                    'useDialog',
                    'useMessage',
                    'useNotification',
                    'useLoadingBar'
                ]
            }
        ],
        include: [
            /\.[tj]s$/, // .ts, .js
            /\.vue$/, /\.vue\?vue/, // .vue
        ],
        exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
        dts: './auto-imports.d.ts'
    }),
    Components({
        resolvers: [NaiveUiResolver()]
    }),
    createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')], // 指定要缓存的文件夹
        symbolId: 'custom-icon-[name]', // 指定symbolId格式
        inject: 'body-last'  // 'body-last' | 'body-first'
    })
]
