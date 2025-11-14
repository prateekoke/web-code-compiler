import React, { useEffect, useRef, useCallback } from 'react';
import './Preview.css';

interface PreviewProps {
  html: string;
  css: string;
  javascript: string;
}

const Preview: React.FC<PreviewProps> = ({ html, css, javascript }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const updateIframeContent = useCallback(() => {
    if (iframeRef.current && iframeRef.current.contentDocument) {
      const doc = iframeRef.current.contentDocument;
      const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>${javascript}</script>
          </body>
        </html>
      `;
      doc.open();
      doc.write(htmlContent);
      doc.close();
    }
  }, [html, css, javascript]);

  useEffect(() => {
    updateIframeContent();
  }, [updateIframeContent]);

  const handleRefresh = () => {
    if (iframeRef.current && iframeRef.current.contentDocument) {
      // Directly update content instead of reloading to prevent nesting
      updateIframeContent();
    }
  };

  return (
    <div className="preview-container">
      <div className="preview-header">
        <span className="preview-title">Live Preview</span>
        <button
          className="refresh-button"
          onClick={handleRefresh}
          title="Refresh Preview"
        >
          ↻ Refresh
        </button>
      </div>
      <div className="preview-content">
        <iframe
          ref={iframeRef}
          title="preview"
          className="preview-iframe"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  );
};

export default Preview;

