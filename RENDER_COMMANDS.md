# Render Deployment Commands - Quick Reference

## Single Full-Stack Service (Web Service)

### Build Command:
```bash
cd backend && npm install && npm run build
```

### Start Command:
```bash
cd backend && npm start
```

### Environment Variables:
```
GOOGLE_API_KEY=your_google_ai_api_key_here
NODE_ENV=production
```

### Service Type:
- **Web Service** (Node.js)
- **NOT** Static Site

---

## What This Does:

1. **Build Phase**: 
   - Installs backend dependencies
   - Runs `npm run build` which installs frontend deps and builds React app
   - Creates `frontend/dist` folder with built frontend

2. **Runtime**: 
   - Backend serves API on `/ai/*` routes
   - Backend serves React app on all other routes (`/*`)
   - Single URL serves both frontend and API

---

## Manual Deployment Steps

### 1. Deploy Single Service:
1. Go to Render Dashboard → "New" → "Web Service"
2. Connect GitHub repository  
3. Set **Service Type** to "Web Service" (not Static Site)
4. Use the **Build** and **Start** commands above
5. Set `GOOGLE_API_KEY` environment variable
6. Deploy

### 2. Test:
- Visit your service URL (e.g., `https://refactorai-app-xyz.onrender.com`)
- Frontend loads at root (`/`)
- API works at `/ai/get-review`
- Health check available at `/health`

---

## Alternative: Use Blueprint (render.yaml)

For easier deployment, use the included `render.yaml` file:
1. Go to Render → "New" → "Blueprint"
2. Connect GitHub repository
3. Render auto-detects `render.yaml`
4. Only set `GOOGLE_API_KEY` environment variable
5. Deploy automatically

---

## Local Testing

Test the production build locally:
```bash
# Build everything
node build.js

# Start server
cd backend && npm start

# Visit http://localhost:3000
```

## Benefits of Single Service:

✅ **Lower Cost** - Only one service instead of two
✅ **Simpler Setup** - No CORS issues, same origin
✅ **Easier Deployment** - Single service to manage
✅ **Better Performance** - No cross-origin requests
