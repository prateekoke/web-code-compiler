# Web Code Compiler

A modern web application platform that enables developers to write, test, and debug web code in one integrated environment. Built with React, TypeScript, and Redux for optimal productivity and enhanced learning experiences.

## Features

- **Multi-Language Support**: Write HTML, CSS, and JavaScript code in separate editors
- **Live Preview**: See your code changes in real-time with an integrated preview panel
- **State Management**: Leverages Redux for efficient and predictable state transitions
- **Responsive Design**: Fully responsive interface that works on desktop, tablet, and mobile devices
- **Type Safety**: Built with TypeScript for improved code quality and maintainability
- **Modern UI**: Clean, intuitive interface inspired by modern code editors

## Technology Stack

- **React 18**: For building responsive and interactive user interfaces
- **TypeScript**: For improved code quality and maintainability
- **Redux Toolkit**: For efficient state management
- **React Redux**: For React-Redux integration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner

## Project Structure

```
web-code-compiler/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CodeEditor.tsx
│   │   ├── CodeEditor.css
│   │   ├── Preview.tsx
│   │   └── Preview.css
│   ├── store/
│   │   ├── index.ts
│   │   ├── codeSlice.ts
│   │   └── hooks.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── index.css
├── package.json
└── tsconfig.json
```

## Key Components

- **CodeEditor**: A textarea-based code editor with line numbers for HTML, CSS, and JavaScript
- **Preview**: Live preview panel that renders the compiled HTML, CSS, and JavaScript
- **Redux Store**: Manages the state of all code editors (HTML, CSS, JavaScript)

## Usage

1. Select a language tab (HTML, CSS, or JavaScript) to edit code
2. Type your code in the editor
3. Watch the live preview update automatically
4. Switch between horizontal and vertical layouts using the header controls
5. Use the refresh button to manually reload the preview if needed

## Benefits

- **Increased Productivity**: All tools in one place eliminates context switching
- **Enhanced Learning**: Instant feedback helps developers understand code behavior
- **Robust State Management**: Redux ensures predictable state transitions
- **Scalable Architecture**: Well-structured codebase for long-term maintenance
- **Developer Experience**: TypeScript catches errors early and improves IDE support

## License

This project is private and proprietary.

