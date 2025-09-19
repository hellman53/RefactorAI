# RefactorAI - Local Development Guide

This guide covers setting up RefactorAI for local development with hot reloading and real-time code changes.

## Features Added

### 🔄 **Hot Reload with Nodemon**
- Backend automatically restarts when you change server code
- Watches for changes in `src/`, `server.js`, and even frontend files
- No need to manually restart the server

### 📜 **Scrollable Code Editor** 
- Code editor on the left is now fully scrollable
- Handles long code files gracefully
- Custom scrollbar styling for better UX
- Responsive design for different screen sizes

## Development Setup

### Prerequisites
1. Node.js installed
2. Google AI API key
3. Git repository cloned locally

### Environment Setup

1. **Backend Environment** (`backend/.env`):
```env
GOOGLE_API_KEY=your_google_ai_api_key_here
PORT=3000
NODE_ENV=development
```

2. **Frontend Environment** (`frontend/.env` - optional for separate dev):
```env
VITE_API_BASE_URL=http://localhost:3000
```

## Development Workflows

### 🚀 **Option 1: Full-Stack with Hot Reload (Recommended)**

This approach serves the built frontend from the backend with hot reload:

```bash
# 1. Build the frontend first
node build.js

# 2. Start backend with nodemon (will auto-restart on changes)
cd backend && npm run dev
```

**Benefits:**
- ✅ Single service (same as production)
- ✅ Backend hot reload on code changes
- ✅ No CORS issues
- ❌ Need to rebuild frontend for frontend changes

### 🔧 **Option 2: Separate Development with Hot Reload**

This runs frontend and backend separately with full hot reload:

```bash
# Terminal 1: Backend with nodemon
cd backend && npm run dev

# Terminal 2: Frontend with Vite dev server  
cd frontend && npm run dev
```

**Benefits:**
- ✅ Full hot reload for both frontend and backend
- ✅ Instant frontend updates
- ❌ Need to handle CORS
- ❌ Different setup than production

### 📦 **Option 3: Production-like Build**

Test the production build locally:

```bash
# Build and start (no hot reload)
node build.js
cd backend && npm start
```

## Available Scripts

### Backend Scripts
```bash
npm start        # Start server (production mode)
npm run dev      # Start with nodemon (hot reload)
npm run dev:watch # Advanced watching (includes frontend)
npm run build    # Build frontend from backend
npm test         # Run tests
```

### Frontend Scripts
```bash
npm run dev      # Vite dev server with hot reload
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Lint code
```

## Nodemon Configuration

The backend includes `nodemon.json` with optimized settings:

```json
{
  "watch": ["src", "server.js", "../frontend/src"],
  "ext": "js,json,jsx,css", 
  "ignore": ["node_modules", "dist", "build"],
  "delay": 1000,
  "verbose": true
}
```

**What it does:**
- Watches backend `src/` folder and `server.js`
- Optionally watches frontend `src/` for full-stack development
- Ignores `node_modules` and build folders
- 1-second delay to avoid multiple restarts
- Verbose logging to see what triggered restarts

## Code Editor Features

### Scrolling Behavior
- **Vertical Scroll**: Long code files scroll vertically
- **Horizontal Scroll**: Long lines scroll horizontally  
- **Resizable**: Can resize the editor vertically with `resize: vertical`
- **Custom Scrollbars**: Styled scrollbars for better appearance

### Editor Styling
- **Font**: Fira Code/Fira Mono monospace
- **Theme**: Dark theme matching the overall design
- **Syntax Highlighting**: JavaScript syntax highlighting via Prism.js
- **Responsive**: Adapts to different screen sizes

## Development Tips

### 🔥 **Hot Reload Best Practices**
1. **Use Option 1** for backend-focused development
2. **Use Option 2** when actively working on frontend
3. **Use Option 3** to test production builds

### 🐛 **Debugging**
- **Check Terminal**: Nodemon shows restart reasons
- **Browser DevTools**: Check Network tab for API calls
- **API Testing**: Test endpoints directly at `http://localhost:3000/ai/get-review`

### 📝 **Code Changes**
- **Backend Changes**: Auto-reload with nodemon
- **Frontend Changes**: 
  - Option 1: Need to rebuild (`npm run build`)
  - Option 2: Instant reload with Vite

### 🚨 **Common Issues**

1. **"vite: not found"**: Run `npm install --include=dev` in frontend
2. **Port conflicts**: Change PORT in backend `.env` 
3. **CORS errors**: Use same origin or configure CORS properly
4. **Nodemon not restarting**: Check `nodemon.json` watch patterns

## Testing Changes

### Test Backend Changes:
```bash
# Make a change to src/app.js or src/controllers/ai.controller.js
# Nodemon should automatically restart
# Check terminal for restart logs
```

### Test Frontend Changes:

**Option 1 (Full-stack):**
```bash
cd frontend && npm run build
# Backend will serve new frontend
```

**Option 2 (Separate dev):**
```bash
# Changes automatically reload in browser
```

### Test Code Editor Scrolling:
1. Paste a long code file (100+ lines)
2. Verify vertical scrolling works
3. Add long lines and verify horizontal scrolling
4. Test on mobile/tablet (responsive design)

## Production Deployment

When ready to deploy, the development setup seamlessly transitions to production:

```bash
# Same commands work for deployment
node build.js
cd backend && npm start
```

The production build uses the same architecture as Option 1 development mode.
