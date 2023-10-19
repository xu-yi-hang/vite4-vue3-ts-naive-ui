import { language as SqlLanguage } from "monaco-editor/esm/vs/basic-languages/sql/sql";
import { language as ShellLanguage } from "monaco-editor/esm/vs/basic-languages/shell/shell";
import { language as JavaLanguage } from "monaco-editor/esm/vs/basic-languages/java/java";
import { language as PythonLanguage } from "monaco-editor/esm/vs/basic-languages/python/python";

interface LanguageKeywords {
    [key: string]: Array<string>;
}

const keyWords: LanguageKeywords = {
    "sql": SqlLanguage.keywords,
    "shell": ShellLanguage.keywords,
    "java": JavaLanguage.keywords,
    "python": PythonLanguage.keyWords,
};

const defaultSopport = ["javascript", "typescript", "json", "css", "html"]

export {
    keyWords,
    defaultSopport
}

