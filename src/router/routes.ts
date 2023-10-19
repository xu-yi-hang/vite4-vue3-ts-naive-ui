import Layout from '@/components/layout/index.vue'

const routes = [
    {
        path: '/',
        redirect: "/codeEditor"
    },
    {
        path: '/laboratory',
        name: '实验室',
        component: Layout,
        children: [
            {
                path: '/codeEditor',
                name: '代码编辑器',
                component: () => import("@/views/codeEditor.vue"),
                meta: {
                    menu: true,
                    icon: "code-box-line"
                },
            },
            {
                path: '/flowDag',
                name: '流程图',
                component: () => import("@/views/flowDag.vue"),
                meta: {
                    menu: true,
                    icon: "flow-chart"
                },
            },
        ]
    },
]

export {
    routes
}