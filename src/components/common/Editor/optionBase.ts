import * as monaco from 'monaco-editor';
export const OPTIONS_BASE: monaco.editor.IStandaloneEditorConstructionOptions = {
    value: '', // 初始显示文字
    lineNumbers: 'on', // 是否展示行号 'off' | 'on
    automaticLayout: true, // 自适应布局 默认true
    minimap: {
        enabled: false,
    },
    tabSize: 2,
    selectOnLineNumbers: true, //单击行号时是否应选择相应的行？默认为true
    roundedSelection: false, //用圆角边框渲染编辑器选择。默认为true。
    cursorStyle: "line", //光标样式
    glyphMargin: true, //字形边缘
    useTabStops: false, //使用Tab键停止
    fontSize: 14, //字体大小
    quickSuggestionsDelay: 300, //代码提示延时
}