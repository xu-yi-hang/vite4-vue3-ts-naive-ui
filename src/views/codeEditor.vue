<template>
  <CommonPage>
    <div class="page">
      <n-grid x-gap="12" :cols="4" style="margin-bottom: 20px;">
        <n-gi>
          <n-select v-model:value="editorConfig.language" filterable placeholder="选择语言" :options="languageOptions" />
        </n-gi>
        <n-gi>
          <n-select v-model:value="editorConfig.theme" filterable placeholder="选择主题" :options="themeOptions" />
        </n-gi>
      </n-grid>
      <div class="editor-content">
        <Editor v-model="editorValue" :editorConfig="editorConfig" />
      </div>
    </div>
  </CommonPage>
</template>

<script setup lang="ts">
import { defaultSopport, keyWords } from "@/components/common/Editor/keyword"

const editorConfig = reactive({
  language: "javascript",
  theme: "vs-dark"
})
const editorValue = ref("")
const languageOptions = defaultSopport.concat(Object.keys(keyWords)).map(item => {
  return {
    label: item,
    value: item
  }
});
const themeOptions = [
  {
    label: 'vs',
    value: 'vs'
  },
  {
    label: 'vs-dark',
    value: 'vs-dark'
  },
  {
    label: 'hc-black',
    value: 'hc-black'
  }
];


</script>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  height: 100%;

  .editor-content {
    flex: 1;
  }
}
</style>
