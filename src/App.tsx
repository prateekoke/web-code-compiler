import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { store } from './store';
import CodeEditor from './components/CodeEditor';
import Preview from './components/Preview';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { updateHtml, updateCss, updateJavascript } from './store/codeSlice';
import './App.css';

const AppContent: React.FC = () => {
  const { html, css, javascript } = useAppSelector((state) => state.code);
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'javascript'>('html');
  const [layout, setLayout] = useState<'horizontal' | 'vertical'>('horizontal');

  const handleHtmlChange = (value: string) => {
    dispatch(updateHtml(value));
  };

  const handleCssChange = (value: string) => {
    dispatch(updateCss(value));
  };

  const handleJavascriptChange = (value: string) => {
    dispatch(updateJavascript(value));
  };

  const renderCodeEditor = () => {
    switch (activeTab) {
      case 'html':
        return (
          <CodeEditor
            language="html"
            value={html}
            onChange={handleHtmlChange}
          />
        );
      case 'css':
        return (
          <CodeEditor
            language="css"
            value={css}
            onChange={handleCssChange}
          />
        );
      case 'javascript':
        return (
          <CodeEditor
            language="javascript"
            value={javascript}
            onChange={handleJavascriptChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">Web Code Compiler</h1>
          <p className="app-subtitle">Write, test, and debug web code in one environment</p>
        </div>
        <div className="header-controls">
          <button
            className={`layout-button ${layout === 'horizontal' ? 'active' : ''}`}
            onClick={() => setLayout('horizontal')}
            title="Horizontal Layout"
          >
            ⬌ Horizontal
          </button>
          <button
            className={`layout-button ${layout === 'vertical' ? 'active' : ''}`}
            onClick={() => setLayout('vertical')}
            title="Vertical Layout"
          >
            ⬍ Vertical
          </button>
        </div>
      </header>

      <main className={`app-main ${layout}`}>
        <PanelGroup
          direction={layout === 'horizontal' ? 'horizontal' : 'vertical'}
          className="panel-group"
        >
          <Panel defaultSize={50} minSize={20} className="panel">
            <div className="editor-section">
              <div className="editor-tabs">
                <button
                  className={`tab-button ${activeTab === 'html' ? 'active' : ''}`}
                  onClick={() => setActiveTab('html')}
                >
                  HTML
                </button>
                <button
                  className={`tab-button ${activeTab === 'css' ? 'active' : ''}`}
                  onClick={() => setActiveTab('css')}
                >
                  CSS
                </button>
                <button
                  className={`tab-button ${activeTab === 'javascript' ? 'active' : ''}`}
                  onClick={() => setActiveTab('javascript')}
                >
                  JavaScript
                </button>
              </div>
              <div className="editor-content">
                {renderCodeEditor()}
              </div>
            </div>
          </Panel>

          <PanelResizeHandle className={`resize-handle ${layout}`} />

          <Panel defaultSize={50} minSize={20} className="panel">
            <div className="preview-section">
              <Preview html={html} css={css} javascript={javascript} />
            </div>
          </Panel>
        </PanelGroup>
      </main>

      <footer className="app-footer">
        <p>Built with React, TypeScript, and Redux</p>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;

