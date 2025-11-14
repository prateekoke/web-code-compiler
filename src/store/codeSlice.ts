import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CodeState {
  html: string;
  css: string;
  javascript: string;
}

const initialState: CodeState = {
  html: `<!DOCTYPE html>
<html>
<head>
  <title>Hello World</title>
</head>
<body>
  <h1>Welcome to Web Code Compiler</h1>
  <p>Start coding below and see your changes in real-time!</p>
  <div id="output"></div>
</body>
</html>`,
  css: `body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-height: 100vh;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

p {
  text-align: center;
  font-size: 18px;
}`,
  javascript: `document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('output');
  if (output) {
    output.innerHTML = '<p style="color: #ffd700; font-weight: bold;">JavaScript is working! 🚀</p>';
  }
  
  console.log('Hello from the code compiler!');
});`,
};

const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    updateHtml: (state, action: PayloadAction<string>) => {
      state.html = action.payload;
    },
    updateCss: (state, action: PayloadAction<string>) => {
      state.css = action.payload;
    },
    updateJavascript: (state, action: PayloadAction<string>) => {
      state.javascript = action.payload;
    },
  },
});

export const { updateHtml, updateCss, updateJavascript } = codeSlice.actions;
export default codeSlice.reducer;

