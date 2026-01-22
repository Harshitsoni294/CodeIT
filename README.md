# CodeIT

<div align="center">
  <h3>Real-time Collaborative Code Editor</h3>
  <p>A premium, minimalistic platform for seamless code collaboration with AI assistance</p>

  ![License](https://img.shields.io/badge/license-MIT-blue.svg)
  ![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
  ![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
</div>

---

## 🌟 Overview

**CodeIT** is a modern, real-time collaborative code editor that enables multiple developers to work together seamlessly. Built with a premium minimalistic design philosophy, it combines powerful features with an intuitive interface for an exceptional coding experience.

### ✨ Key Highlights

- 🚀 **Real-time Collaboration** - Multiple users can code together simultaneously
- 🤖 **AI-Powered Copilot** - Generate code using Hugging Face's GPT-OSS-120B model
- 🎨 **Collaborative Drawing** - Sketch ideas and diagrams together
- 💻 **Multi-file Support** - Work with complete project structures
- 🎯 **Syntax Highlighting** - Support for 100+ programming languages
- 💬 **Group Chat** - Communicate with your team in real-time
- 🌙 **Multiple Themes** - Customize your coding environment
- 📦 **Import/Export** - Upload folders and download code as ZIP

---

## 🎯 Features

### Core Features

- **Real-time Code Synchronization**: Instant code updates across all connected users
- **File Management**: Create, rename, delete files and folders
- **Multi-file Editing**: Work with multiple files simultaneously with tabbed interface
- **Cursor Tracking**: See where other users are typing in real-time
- **User Presence**: Know who's online with live status indicators

### Advanced Features

- **AI Code Generation**: Describe what you need, and AI generates the code
- **Collaborative Whiteboard**: Draw, sketch, and brainstorm together using tldraw
- **Code Execution**: Run code directly in the editor (via Piston API)
- **Auto Language Detection**: Automatically detects file language based on extension
- **Download Projects**: Export entire codebase as ZIP file
- **Folder Upload**: Import complete project folders

### Customization

- **20+ Editor Themes**: From Dracula to Solarized
- **Multiple Fonts**: Choose from professional coding fonts
- **Adjustable Font Size**: Customize to your preference
- **Language Selection**: Manual override for syntax highlighting

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **CodeMirror 6** - Modern code editor
- **Socket.IO Client** - Real-time communication
- **tldraw** - Collaborative whiteboard

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Socket.IO** - WebSocket server
- **TypeScript** - Type safety

### AI & APIs
- **Hugging Face** - AI code generation (GPT-OSS-120B)
- **Piston API** - Code execution engine

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)
- **Git** (for cloning the repository)

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Harshitsoni294/CodeIT.git
cd codeit
```

### 2. Install Dependencies

#### Server
```bash
cd server
npm install
```

#### Client
```bash
cd ../client
npm install
```

### 3. Environment Configuration

#### Server Environment

Create `.env` file in the `server` directory:

```env
PORT=3000
HF_TOKEN=your_huggingface_token_here
```

**Get your Hugging Face Token:**
1. Visit [Hugging Face Settings](https://huggingface.co/settings/tokens)
2. Create a new token (Read access is sufficient)
3. Copy and paste into `.env` file

#### Client Environment

Create `.env` file in the `client` directory:

```env
VITE_BACKEND_URL=http://localhost:3000
```

### 4. Start the Application

#### Development Mode

**Terminal 1 - Start Server:**
```bash
cd server
npm run dev
```

**Terminal 2 - Start Client:**
```bash
cd client
npm run dev
```

The application will be available at:
- **Client**: http://localhost:5173
- **Server**: http://localhost:3000

#### Production Build

**Build the client:**
```bash
cd client
npm run build
```

**Build the server:**
```bash
cd server
npm run build
npm start
```

---

## 🎮 Usage

### Creating/Joining a Room

1. **Open the application** at `http://localhost:5173`
2. **Generate a Room ID** or enter an existing one
3. **Enter your username**
4. **Click "Join Room"** to start collaborating

### Working with Files

- **Create File**: Right-click in file explorer → New File
- **Create Folder**: Right-click in file explorer → New Folder
- **Open Folder**: Click "Open Folder" button to import a project
- **Download Code**: Click "Download Code" to export as ZIP
- **Switch Files**: Click on file tabs to switch between open files

### Using AI Copilot

1. Click the **Sparkle icon** (✨) in the sidebar
2. Describe the code you want to generate
3. Click **"Generate Code"**
4. Choose to:
   - **Copy** - Copy code to clipboard
   - **Paste** - Append to current file
   - **Replace** - Replace entire file content

### Collaborative Drawing

1. Click the **Drawing icon** in the sidebar
2. Use drawing tools to sketch ideas
3. All participants see changes in real-time

### Running Code

1. Click the **Play icon** (▶️) in the sidebar
2. Select language and input (if needed)
3. Click **"Run"** to execute code
4. View output in the panel

---

## 🎨 Customization

### Changing Themes

1. Click **Settings icon** (⚙️) in sidebar
2. Select your preferred theme from dropdown
3. Changes apply instantly

### Adjusting Font

1. Go to **Settings**
2. Choose **Font Family** (Space Mono, Fira Code, etc.)
3. Select **Font Size** (12px - 24px)

---

## 🏗️ Project Structure

```
codeit/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── api/           # API clients
│   │   ├── components/    # React components
│   │   ├── context/       # React context providers
│   │   ├── hooks/         # Custom React hooks
│   │   ├── pages/         # Page components
│   │   ├── styles/        # Global styles
│   │   ├── types/         # TypeScript types
│   │   └── utils/         # Utility functions
│   └── package.json
│
├── server/                 # Backend Node.js application
│   ├── src/
│   │   ├── types/         # TypeScript types
│   │   └── server.ts      # Main server file
│   └── package.json
│
└── README.md
```

---

## 🔒 Security

- **Environment Variables**: Never commit `.env` files
- **API Keys**: Stored server-side, never exposed to client
- **CORS**: Configured for secure cross-origin requests
- **Input Validation**: All user inputs are validated
- **File Size Limits**: Prevents large file uploads (1MB limit)

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

