<template>
    <n-layout-header style="height: 64px;padding-left: 24px;" bordered>
        <Chart :option="option" style="width: 100px;" />
    </n-layout-header>
</template>

<script setup lang="ts">
import Chart from '@/components/common/Chart/index.vue'

const option = {
    graphic: {
        elements: [
            {
                type: 'text',
                left: 'center',
                top: 'center',
                style: {
                    text: 'Demo',
                    fontSize: 28,
                    fontWeight: 'bold',
                    lineDash: [0, 200],
                    lineDashOffset: 0,
                    fill: 'transparent',
                    stroke: '#18a058',
                    lineWidth: 1
                },
                keyframeAnimation: {
                    duration: 5000,
                    loop: true,
                    keyframes: [
                        {
                            percent: 0.7,
                            style: {
                                fill: 'transparent',
                                lineDashOffset: 200,
                                lineDash: [200, 0]
                            }
                        },
                        {
                            // Stop for a while.
                            percent: 0.8,
                            style: {
                                fill: 'transparent'
                            }
                        },
                        {
                            percent: 1,
                            style: {
                                fill: 'transparent'
                            }
                        }
                    ]
                }
            }
        ]
    }
};
</script>