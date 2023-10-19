<template>
  <v-chart class="chart" :option="props.option" autoresize />
</template>
  
<script setup lang="ts">
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GraphicComponent
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';

use([
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GraphicComponent
]);


const props = defineProps({
  option: {
    type: Object,
    default: () => { }
  },
  theme: {
    type: String,
    defafult: ""
  }
})

</script>
  
<style scoped>
.chart {
  height: 100%;
  width: 100%;
}
</style>
  