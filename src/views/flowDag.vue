<template>
    <div>流程</div>
</template>

<script setup lang="ts">
import { useGlobalStore } from "@/stores"

const globalStore = useGlobalStore()
globalStore.setLoading(true)

</script>