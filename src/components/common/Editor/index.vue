<template>
    <div ref="cusEditor" class="cusEditor"></div>
</template>
<script setup lang="ts">
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import { OPTIONS_BASE } from './optionBase'
import { keyWords } from './keyword'
import './worker'

interface IProps {
    modelValue: string
    disabled?: boolean
    editorConfig?: { language: string; theme: 'vs' | 'vs-dark' | 'hc-black' }
}
const props = withDefaults(defineProps<IProps>(), {
    modelValue: '',
    disabled: false,
    editorConfig: () => ({ language: 'sql', theme: 'vs-dark' }),
})

const cusEditor = ref<HTMLElement | null>(null)
let editor: Partial<monaco.editor.IStandaloneCodeEditor> = {}
let cusEditorCompletion = ref<monaco.IDisposable | null>(null)
const emit = defineEmits(['update:modelValue'])

/**
 * @description: 初始化自动补全
 */
function initAutoCompletion() {
    const languageKeyWords = keyWords[props.editorConfig.language]
    if (!languageKeyWords) return
    cusEditorCompletion.value = monaco.languages.registerCompletionItemProvider(props.editorConfig.language, {
        // 触发提示的字符
        triggerCharacters: [".", " ", ...languageKeyWords],
        provideCompletionItems: (model, position) => {
            const word = model.getWordUntilPosition(position)
            const range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn,
            }
            return {
                suggestions: getKeywordsSuggest(props.editorConfig.language, range),
            };
        },
    });
}

/**
 * @description: 获取关键字的补全列表
 * @tips: CompletionItemKind 的所有枚举可以在monaco.d.ts 文件中找到，有二十多个，取需即可
 */
function getKeywordsSuggest(language: string, range: { startLineNumber: number; endLineNumber: number; startColumn: number; endColumn: number; }): monaco.languages.CompletionItem[] {
    const items: monaco.languages.CompletionItem[] = [];
    if (language in keyWords) {
        keyWords[language].forEach((key: string) => {
            const completionItem: monaco.languages.CompletionItem = {
                label: key, // 显示的名称
                kind: monaco.languages.CompletionItemKind.Keyword,
                insertText: key, // 真实补全的值
                range
            };
            items.push(completionItem);
        });
    }
    return items;
}

/**初始化编辑器 */
onMounted(() => {
    onDispose()
    initAutoCompletion()
    if (cusEditor.value) {
        editor = monaco.editor.create(cusEditor.value, { ...OPTIONS_BASE, ...props.editorConfig, readOnly: props.disabled })
        editor.onDidChangeModelContent &&
            editor.onDidChangeModelContent(() => {
                const value = editor.getValue && editor.getValue() // 给父组件实时返回最新文本
                emit('update:modelValue', value)
            })
    }
})
/**销毁实例 */
const onDispose = () => {
    editor && editor.dispose && editor.dispose();
    autoCompletionDispose()
}

function autoCompletionDispose() {
    cusEditorCompletion.value && cusEditorCompletion.value.dispose && cusEditorCompletion.value.dispose();
}

onUnmounted(() => {
    onDispose()
})
/**修改只读状态 */
watch(
    () => props.disabled,
    (val) => {
        editor.updateOptions && editor.updateOptions({ readOnly: val })
    }
)
/**修改配置 */
watch(
    () => props.editorConfig,
    (val) => {
        const model = editor.getModel && editor.getModel()
        if (model) {
            autoCompletionDispose()
            initAutoCompletion()
            monaco.editor.setModelLanguage(model, val.language)
            monaco.editor.setTheme(val.theme)
        }
    },
    { deep: true }
)
/**回显数据 */
watch(
    () => props.modelValue,
    (val) => {
        if (editor) {
            const value = editor.getValue && editor.getValue()
            if (val !== value) {
                editor.setValue && editor.setValue(val || '')
            }
        }
    }
)
</script>

<style scoped>
.cusEditor {
    width: 100%;
    height: 100%;
    min-height: 400px;
}
</style>