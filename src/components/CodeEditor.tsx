import React, { useEffect, useRef, useCallback } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';
import './CodeEditor.css';

interface CodeEditorProps {
  language: 'html' | 'css' | 'javascript';
  value: string;
  onChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ language, value, onChange }) => {
  const editorWrapperRef = useRef<HTMLDivElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const updateLineNumbers = useCallback(() => {
    if (lineNumbersRef.current) {
      const lineCount = value.split('\n').length;
      lineNumbersRef.current.innerHTML = Array.from(
        { length: lineCount },
        (_, i) => `<span>${i + 1}</span>`
      ).join('');
    }
  }, [value]);

  useEffect(() => {
    updateLineNumbers();
  }, [updateLineNumbers]);

  const handleScroll = useCallback(() => {
    if (lineNumbersRef.current && scrollContainerRef.current) {
      lineNumbersRef.current.scrollTop = scrollContainerRef.current.scrollTop;
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll]);

  const getLanguageLabel = () => {
    switch (language) {
      case 'html':
        return 'HTML';
      case 'css':
        return 'CSS';
      case 'javascript':
        return 'JavaScript';
      default:
        return '';
    }
  };

  const getPrismLanguage = () => {
    switch (language) {
      case 'html':
        return languages.markup;
      case 'css':
        return languages.css;
      case 'javascript':
        return languages.javascript;
      default:
        return languages.markup;
    }
  };

  const highlightCode = (code: string) => {
    return highlight(code, getPrismLanguage(), language);
  };

  return (
    <div className="code-editor-container">
      <div className="code-editor-header">
        <span className="code-editor-title">{getLanguageLabel()}</span>
      </div>
      <div className="code-editor-wrapper" ref={editorWrapperRef}>
        <div className="line-numbers" ref={lineNumbersRef}></div>
        <div
          ref={scrollContainerRef}
          className="editor-content editor-scrollable"
        >
          <Editor
            value={value}
            onValueChange={(code) => {
              onChange(code);
              updateLineNumbers();
            }}
            highlight={highlightCode}
            padding={16}
            className="code-editor"
            style={{
              fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
              fontSize: 14,
              lineHeight: '20px',
              outline: 0,
              background: '#1e1e1e',
              color: '#d4d4d4',
              minHeight: '100%',
              width: '100%',
              border: 'none',
            }}
            textareaClassName="code-editor-textarea"
            preClassName="code-editor-pre"
            placeholder={`Enter your ${getLanguageLabel()} code here...`}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
