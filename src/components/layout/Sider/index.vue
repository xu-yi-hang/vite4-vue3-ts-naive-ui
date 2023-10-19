<template>
    <n-watermark :content="route.name" cross fullscreen :font-size="16" :line-height="16" :width="384" :height="384"
        :x-offset="12" :y-offset="60" :rotate="-15" />
    <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="200" :collapsed="collapsed" show-trigger
        @collapse="collapsed = true" @expand="collapsed = false">
        <n-menu v-model:value="activeKey" :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="22"
            :options="menuOptions" />
    </n-layout-sider>
</template>

<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { renderCustomIcon } from '@/utils/index'
import { routes } from '@/router/routes';
import { RouterLink } from 'vue-router';

const route = useRoute();

function transFormMenuOptions() {
    const children = routes.find(item => item.path == "/laboratory")?.children ?? [];
    return children.filter(item => item?.meta.menu).map(item => {
        return {
            label: () =>
                h(
                    RouterLink,
                    {
                        to: {
                            path: item.path,
                        }
                    },
                    { default: () => item.name }
                ),
            key: item.name,
            icon: renderCustomIcon(item.meta.icon, { size: 16, color: '#18a058' })
        }
    })
}

const menuOptions: MenuOption[] = transFormMenuOptions()

const activeKey = ref<string | null>(null);
const collapsed = ref(false);

</script>