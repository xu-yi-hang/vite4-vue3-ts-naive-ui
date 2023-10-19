<template>
    <svg aria-hidden="true">
        <use :href="symbolId" :fill="color" />
    </svg>
</template>

<script setup lang="ts">
defineOptions({
    name: 'svg-icon'
})
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: 'currentColor',
    },
})
const symbolId = computed(() => `#custom-icon-${props.name}`)
</script>