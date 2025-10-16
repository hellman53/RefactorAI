# 🤖 RefactorAI

**AI-powered code review and refactoring tool** built with React, Node.js, and Google's Gemini AI.

RefactorAI helps developers improve their code quality by providing intelligent suggestions, identifying potential issues, and recommending best practices through an intuitive web interface.

## 🌐 Live Demo

**Try Memora now:**  [refactorai-1.onrender.com](https://refactorai-1.onrender.com/)

## ✨ Features

- 🔍 **Intelligent Code Analysis** - AI-powered code review using Google's Gemini AI
- 📝 **Real-time Code Editor** - Syntax-highlighted, scrollable code editor with dark theme  
- 🚀 **Instant Feedback** - Get AI suggestions and improvements in real-time
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🔄 **Hot Reload Development** - Real-time server restart with nodemon for efficient development
- ☁️ **Cloud Ready** - Deploy easily to Render, Vercel, or any cloud platform

## 📸 Screenshots

![https://github.com/hellman53/RefactorAI/blob/439a223a710b20b4fac4211c8965c4e0366fa457/frontend/public/preview.png](https://github.com/hellman53/RefactorAI/blob/439a223a710b20b4fac4211c8965c4e0366fa457/frontend/public/preview.png)

## 🏗️ Architecture

```
┌─────────────────┐    HTTP/API    ┌──────────────────┐    AI API    ┌─────────────────┐
│  React Frontend │ ──────────────▶│  Express Backend │ ──────────▶ │  Google Gemini  │
│   (Vite + CSS)  │                │  (Node.js + AI)  │             │   AI Service    │
└─────────────────┘                └──────────────────┘             └─────────────────┘
```

- **Frontend**: React + Vite with syntax highlighting and responsive design
- **Backend**: Express.js API server with Google AI integration
- **AI Service**: Google Gemini AI for intelligent code analysis
- **Deployment**: Single full-stack service (backend serves frontend)

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **Google AI API Key** ([Get one here](https://makersuite.google.com/app/apikey))
- **Git** for version control

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/RefactorAI.git
cd RefactorAI
```

### 2. Set Up Environment Variables

Create a `.env` file in the `backend` directory:

```bash
# backend/.env
GOOGLE_API_KEY=your_google_ai_api_key_here
PORT=3000
NODE_ENV=development
```

### 3. Install Dependencies & Build

```bash
# Install all dependencies and build frontend
node build.js
```

### 4. Start Development Server

```bash
# Start with hot reload (recommended)
cd backend && npm run dev
```

🎉 **That's it!** Open [http://localhost:3000](http://localhost:3000) to see RefactorAI in action.

## 💻 Development

### Hot Reload Development (Recommended)

For backend-focused development with hot reload:

```bash
# Build frontend and start backend with nodemon
node build.js
cd backend && npm run dev
```

### Separate Development Servers

For full hot reload on both frontend and backend:

```bash
# Terminal 1: Backend with hot reload
cd backend && npm run dev

# Terminal 2: Frontend dev server with Vite
cd frontend && npm run dev
```

### Available Scripts

#### Backend Scripts
```bash
npm start        # Production server
npm run dev      # Development with hot reload  
npm run build    # Build frontend
npm test         # Run tests
```

#### Frontend Scripts
```bash
npm run dev      # Vite dev server
npm run build    # Production build
npm run preview  # Preview build
npm run lint     # Lint code
```

## 🔧 Configuration

### Backend Configuration (`backend/nodemon.json`)

```json
{
  "watch": ["src", "server.js", "../frontend/src"],
  "ext": "js,json,jsx,css",
  "ignore": ["node_modules", "dist", "build"],
  "delay": 1000,
  "verbose": true
}
```

### Frontend Configuration (`frontend/vite.config.js`)

```javascript
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
})
```

## 📚 API Reference

### POST `/ai/get-review`

Analyze code and get AI-powered suggestions.

**Request Body:**
```json
{
  "code": "function example() { return 1 + 1; }"
}
```

**Response:**
```json
{
  "review": "## Code Review\n\n**Analysis**: Your function looks good! Here are some suggestions:\n\n- Consider adding type annotations\n- Add error handling\n- Include unit tests"
}
```

### GET `/health`

Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "RefactorAI Backend is running"
}
```

## 🌐 Deployment

### Deploy to Render (Recommended)

RefactorAI is configured for one-click deployment to Render:

1. **Fork/Push** this repository to GitHub

2. **Connect to Render**: 
   - Go to [render.com](https://render.com)
   - Click "New" → "Blueprint"
   - Connect your GitHub repository

3. **Set Environment Variables**:
   - `GOOGLE_API_KEY`: Your Google AI API key

4. **Deploy**: Click "Apply" - Render will automatically:
   - Install backend dependencies
   - Build the frontend
   - Start the single full-stack service

**Live URL**: `https://your-app-name.onrender.com`

### Manual Deployment

**Build Command:**
```bash
cd backend && npm install && npm run build
```

**Start Command:**
```bash
cd backend && npm start
```

**Environment Variables:**
- `GOOGLE_API_KEY` (required)
- `NODE_ENV=production`

### Other Platforms

RefactorAI can be deployed to any Node.js hosting platform:
- **Vercel**: Use the Next.js adapter
- **Heroku**: Configure Procfile
- **Railway**: Use the provided configuration
- **DigitalOcean**: Use App Platform
- **AWS**: Deploy with Elastic Beanstalk or Lambda

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Vite 7** - Fast build tool and dev server
- **React Simple Code Editor** - Syntax-highlighted code editor
- **Prism.js** - Code syntax highlighting
- **Axios** - HTTP client for API calls
- **React Markdown** - Markdown rendering for AI responses

### Backend  
- **Node.js** - JavaScript runtime
- **Express 4** - Web application framework
- **Google Generative AI** - AI-powered code analysis
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Development Tools
- **Nodemon** - Auto-restart development server
- **ESLint** - Code linting and formatting
- **Vite** - Development server with hot reload

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### 1. Fork & Clone
```bash
git clone https://github.com/yourusername/RefactorAI.git
cd RefactorAI
```

### 2. Create Feature Branch
```bash
git checkout -b feature/amazing-feature
```

### 3. Make Changes
- Follow the existing code style
- Add tests for new features
- Update documentation as needed

### 4. Test Changes
```bash
# Test locally
node build.js
cd backend && npm run dev
```

### 5. Commit & Push
```bash
git commit -m "Add amazing feature"
git push origin feature/amazing-feature
```

### 6. Create Pull Request
Open a pull request with:
- Clear description of changes
- Screenshots (if UI changes)
- Test results

## 📋 Project Structure

```
RefactorAI/
├── 📁 backend/                 # Express.js API server
│   ├── 📁 src/
│   │   ├── 📄 app.js          # Express app configuration
│   │   ├── 📁 controllers/     # Route controllers
│   │   ├── 📁 routes/         # API routes
│   │   └── 📁 services/       # Business logic
│   ├── 📄 server.js           # Server entry point
│   ├── 📄 package.json        # Backend dependencies
│   ├── 📄 nodemon.json        # Nodemon configuration
│   └── 📄 .env               # Environment variables
├── 📁 frontend/               # React frontend
│   ├── 📁 src/
│   │   ├── 📄 App.jsx         # Main React component
│   │   ├── 📄 App.css         # Styling
│   │   └── 📄 main.jsx        # React entry point
│   ├── 📄 package.json        # Frontend dependencies
│   ├── 📄 vite.config.js      # Vite configuration
│   └── 📄 index.html          # HTML template
├── 📄 build.js                # Production build script
├── 📄 render.yaml             # Render deployment config
├── 📄 DEPLOYMENT.md           # Deployment guide
├── 📄 DEVELOPMENT.md          # Development guide
└── 📄 README.md               # This file
```

## 🔍 Troubleshooting

### Common Issues

**1. "vite: not found" during build**
```bash
cd frontend && npm install --include=dev
```

**2. Server not restarting with nodemon**
```bash
# Check nodemon configuration
cat backend/nodemon.json

# Restart manually
cd backend && npm run dev
```

**3. CORS errors in separate development**
- Use same origin (Option 1 development)
- Or configure CORS properly in backend

**4. Google AI API errors**
- Verify API key is valid
- Check API quotas and limits
- Ensure proper environment variable setup

### Debug Mode

Enable verbose logging:

```bash
# Backend debug
DEBUG=* npm run dev

# Nodemon verbose
cd backend && nodemon --verbose server.js
```

## 🙏 Acknowledgments

- **Google AI** for providing the Gemini AI API
- **React Team** for the amazing frontend framework
- **Vite Team** for the fast build tool
- **Render** for easy deployment platform
- **Open Source Community** for the awesome libraries
---

<div align="center">
  <p>Built with ❤️ using React, Node.js, and Google AI</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>

