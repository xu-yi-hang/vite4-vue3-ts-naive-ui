
<template>
    <n-layout-content ref="contentRef" content-style="height: 100%" :native-scrollbar="false">
        <n-spin :show="globalStore.loading" class="spin">
            <RouterView />
            <template #description>
                加载中...
            </template>
        </n-spin>
    </n-layout-content>
</template>

<script setup lang="ts">
import { useGlobalStore } from "@/stores"

const globalStore = useGlobalStore()

</script>

<style scoped>
.spin {
    width: 100%;
    height: 100%;

}

.spin>>>.n-spin-content {
    height: 100%;
}
</style>@/stores/modules/global